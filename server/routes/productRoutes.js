const express = require("express");

const {
  getProducts,
  getProductBySlug,
  getProductVariants,
  getProductVariantById,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:slug/variants", getProductVariants);

router.get(
  "/:slug/variants/:variantId",
  getProductVariantById
);

router.get("/:slug", getProductBySlug);

module.exports = router;