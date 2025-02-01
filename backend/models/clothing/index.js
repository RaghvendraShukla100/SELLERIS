// /models/clothing/index.js

import mongoose from "mongoose";
import Product from "../product/index.js";

const { Schema } = mongoose;

// Clothing Schema
const clothingSchema = new Schema({
  sizes: [String],
  fit: String, // e.g., "Slim Fit", "Regular Fit"
  style: String, // e.g., "Casual", "Formal"
  occasionToWear: [String], // e.g., ["Wedding", "Party"]
  gender: { type: String, enum: ["Men", "Women", "Unisex", "Kids"] },
  productDimensions: {
    chest: Number,
    waist: Number,
    hip: Number,
    length: Number,
    sleeveLength: Number,
  },
});

// Clothing Model
const Clothing = Product.discriminator("Clothing", clothingSchema);

export default Clothing;
