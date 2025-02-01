// /models/product/index.js

import mongoose from "mongoose";

const { Schema } = mongoose;

// Base Product Schema
const productSchema = new Schema(
  {
    // Core Identifiers
    sku: { type: String, required: true, unique: true }, // Stock Keeping Unit
    name: { type: String, required: true },
    genericName: { type: String },
    brand: { type: String },
    productType: { type: String, required: true },

    // Classification
    category: { type: String, required: true },
    subCategory: { type: String },

    // Descriptions
    description: String,
    detailsAboutThisItem: [String],
    tags: [String],

    // Pricing and Stock
    price: { type: Number, required: true, min: 0 },
    stocks: { type: Number, required: true, min: 0 },
    discountsOrOffers: String,

    // Visuals
    images: [
      {
        color: String,
        links: [String],
      },
    ],
    specialPromotionalImages: [String],

    // Customer Service
    warranty: String,
    customerServiceContact: String,

    // Shipping Details
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

    // Product Attributes
    material: String,
    colors: [String],

    // Additional Info
    additionalFeatures: [String],
    inBox: String,
  },
  { timestamps: true }
);

// Set discriminator key
productSchema.set("discriminatorKey", "productType");

// Indexes for optimized queries
productSchema.index({ sku: 1 });
productSchema.index({ category: 1 });
productSchema.index({ brand: 1 });

// Base Product Model
const Product = mongoose.model("Product", productSchema);

export default Product;
