import mongoose from "mongoose";
import Product from "./products.js";

const { Schema } = mongoose;

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

const Electronics = Product.discriminator("Electronics", electronicsSchema);

export default Electronics;
