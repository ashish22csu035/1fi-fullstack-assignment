const Product = require("../models/Product");


const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().select(
      "name slug brand category shortDescription badge rating reviewCount variants"
    );

    const formattedProducts = products.map((product) => {
      const startingPrice = Math.min(
        ...product.variants.map((variant) => variant.price)
      );

      const originalPrice = Math.max(
        ...product.variants.map((variant) => variant.mrp)
      );

      return {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        category: product.category,
        shortDescription: product.shortDescription,
        badge: product.badge,
        rating: product.rating,
        reviewCount: product.reviewCount,
        startingPrice,
        originalPrice,
        image: product.variants[0]?.images[0] || "",
        variantCount: product.variants.length,
      };
    });

    res.status(200).json({
      success: true,
      count: formattedProducts.length,
      data: formattedProducts,
    });
  } catch (error) {
    next(error);
  }
};


const getProductBySlug = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
    });

    if (!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};


const getProductVariants = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
    }).select("name slug variants");

    if (!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      product: {
        name: product.name,
        slug: product.slug,
      },
      count: product.variants.length,
      data: product.variants,
    });
  } catch (error) {
    next(error);
  }
};


const getProductVariantById = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
    });

    if (!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      return next(error);
    }

    const variant = product.variants.id(req.params.variantId);

    if (!variant) {
      const error = new Error("Variant not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      product: {
        name: product.name,
        slug: product.slug,
      },
      data: variant,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductBySlug,
  getProductVariants,
  getProductVariantById,
};