import mongoose from "mongoose";
import Product from "./products.js";

const { Schema } = mongoose;

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

const BeautySkincare = Product.discriminator(
  "BeautySkincare",
  beautySkincareSchema
);

export default BeautySkincare;
