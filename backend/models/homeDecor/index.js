// /models/homeDecor/index.js

import mongoose from "mongoose";
import Product from "../product/index.js";

const { Schema } = mongoose;

// Home Decor Schema
const homeDecorSchema = new Schema({
  colors: [String],
  material: String,
  style: String, // e.g., "Modern", "Vintage"
  roomType: [String], // e.g., ["Living Room", "Bedroom"]
  theme: String, // e.g., "Bohemian", "Minimalist"
  isHandmade: Boolean,
  artisan: String, // Name of the artisan or brand
});

// HomeDecor Model
const HomeDecor = Product.discriminator("HomeDecor", homeDecorSchema);

export default HomeDecor;
