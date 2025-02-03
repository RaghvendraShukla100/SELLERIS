import mongoose from "mongoose";
import Product from "./products.js";

const { Schema } = mongoose;

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

const Clothing = Product.discriminator("Clothing", clothingSchema);

export default Clothing;
