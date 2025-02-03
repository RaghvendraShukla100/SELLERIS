import mongoose from "mongoose";
import Product from "./products.js";

const { Schema } = mongoose;

const homeDecorSchema = new Schema({
  colors: [String],
  material: String,
  style: String,
  roomType: [String],
  theme: String,
  isHandmade: Boolean,
  artisan: String,
});

const HomeDecor = Product.discriminator("HomeDecor", homeDecorSchema);

export default HomeDecor;
