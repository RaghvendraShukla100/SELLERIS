import mongoose from "mongoose";

const { Schema } = mongoose;

// Base Product Schema
const productSchema = new Schema(
  {
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    genericName: { type: String },
    brand: { type: String },
    productType: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String },
    description: String,
    detailsAboutThisItem: [String],
    tags: { type: [String], required: true },
    price: { type: Number, required: true, min: 0 },
    stocks: { type: Number, required: true, min: 0 },
    discountsOrOffers: String,
    images: [
      {
        color: String,
        links: [String],
      },
    ],
    specialPromotionalImages: [String],
    warranty: String,
    customerServiceContact: String,
    shippingDetails: {
      cost: { type: Number, min: 0 },
      estimatedDelivery: String,
      dimensions: {
        length: Number,
        width: Number,
        height: Number,
        weight: Number,
      },
    },
    material: String,
    colors: [String],
    additionalFeatures: [String],
    inBox: String,
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    // New field to store average rating
    averageRating: {
      type: Number,
      default: null,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

productSchema.set("discriminatorKey", "productType");
productSchema.index({ category: 1 });
productSchema.index({ brand: 1 });

const Product = mongoose.model("Product", productSchema);

export default Product;
