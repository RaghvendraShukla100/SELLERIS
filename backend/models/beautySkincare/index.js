// /models/beautySkincare/index.js

import mongoose from "mongoose";
import Product from "../product/index.js";

const { Schema } = mongoose;

// Beauty and Skincare Schema
const beautySkincareSchema = new Schema({
  sizes: [String],
  ingredients: [String],
  skinType: [String], // e.g., ["Oily", "Dry", "Sensitive"]
  usageInstructions: String,
  safetyWarnings: String,
  expiryDate: Date,
  isNatural: Boolean,
  isOrganic: Boolean,
  isCrueltyFree: Boolean,
});

// BeautySkincare Model
const BeautySkincare = Product.discriminator(
  "BeautySkincare",
  beautySkincareSchema
);

export default BeautySkincare;
