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

// Discriminators for different product types
const beautySkincareSchema = new Schema({
  sizes: [String],
  ingredients: [String],
  skinType: [String],
  usageInstructions: String,
  safetyWarnings: String,
  expiryDate: Date,
  isNatural: Boolean,
  isOrganic: Boolean,
  isCrueltyFree: Boolean,
});
export const BeautySkincare = Product.discriminator(
  "BeautySkincare",
  beautySkincareSchema
);

const clothingSchema = new Schema({
  sizes: [String],
  fit: String,
  style: String,
  occasionToWear: [String],
  gender: { type: String, enum: ["Men", "Women", "Unisex", "Kids"] },
  productDimensions: {
    chest: Number,
    waist: Number,
    hip: Number,
    length: Number,
    sleeveLength: Number,
  },
});
export const Clothing = Product.discriminator("Clothing", clothingSchema);

const electronicsSchema = new Schema({
  os: String,
  RAM: [String],
  ROM: [String],
  display: {
    size: String,
    resolution: String,
    type: String,
  },
  processor: String,
  batteryLife: String,
  connectivityOptions: [String],
  technicalSpecifications: {
    type: Map,
    of: String,
  },
  inBox: [String],
});
export const Electronics = Product.discriminator(
  "Electronics",
  electronicsSchema
);

const furnitureSchema = new Schema({
  colors: [String],
  material: String,
  frameMaterial: String,
  cushionMaterial: String,
  assemblyRequired: Boolean,
  careInstructions: String,
  maxLoadCapacity: Number,
  roomType: [String],
});
export const Furniture = Product.discriminator("Furniture", furnitureSchema);

const homeDecorSchema = new Schema({
  colors: [String],
  material: String,
  style: String,
  roomType: [String],
  theme: String,
  isHandmade: Boolean,
  artisan: String,
});
export const HomeDecor = Product.discriminator("HomeDecor", homeDecorSchema);

export default Product;
