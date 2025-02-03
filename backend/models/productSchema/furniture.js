import mongoose from "mongoose";
import Product from "./products.js";

const { Schema } = mongoose;

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

const Furniture = Product.discriminator("Furniture", furnitureSchema);

export default Furniture;
