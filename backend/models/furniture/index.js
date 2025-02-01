// /models/furniture/index.js

import mongoose from "mongoose";
import Product from "../product/index.js";

const { Schema } = mongoose;

// Furniture Schema
const furnitureSchema = new Schema({
  colors: [String],
  material: String,
  frameMaterial: String,
  cushionMaterial: String,
  assemblyRequired: Boolean,
  careInstructions: String,
  maxLoadCapacity: Number, // in kg
  roomType: [String], // e.g., ["Living Room", "Bedroom"],
});

// Furniture Model
const Furniture = Product.discriminator("Furniture", furnitureSchema);

export default Furniture;
