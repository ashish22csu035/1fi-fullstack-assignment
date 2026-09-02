const mongoose = require("mongoose");

const emiPlanSchema = new mongoose.Schema(
  {
    tenure: {
      type: Number,
      required: true,
    },

    monthlyAmount: {
      type: Number,
      required: true,
    },

    interestRate: {
      type: Number,
      required: true,
    },

    cashback: {
      type: Number,
      default: 0,
    },

    label: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const variantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    storage: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    colorCode: {
      type: String,
      required: true,
    },

    mrp: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    images: {
      type: [String],
      required: true,
    },

    emiPlans: {
      type: [emiPlanSchema],
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: false,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      default: "Smartphone",
    },

    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    badge: {
      type: String,
      default: "New Launch",
    },

    features: {
      type: [String],
      default: [],
    },

    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },

    reviewCount: {
      type: Number,
      default: 0,
    },

    variants: {
      type: [variantSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;