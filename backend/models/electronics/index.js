// /models/electronics/index.js

import mongoose from "mongoose";
import Product from "../product/index.js";

const { Schema } = mongoose;

// Electronics Schema
const electronicsSchema = new Schema({
  os: String,
  RAM: [String],
  ROM: [String],
  display: {
    size: String,
    resolution: String,
    type: String, // e.g., "LCD", "OLED"
  },
  processor: String,
  batteryLife: String,
  connectivityOptions: [String], // e.g., ["Bluetooth", "WiFi", "NFC"]
  technicalSpecifications: {
    type: Map,
    of: String,
  },
  inBox: [String], // e.g., ["Charger", "Earphones"],
});

// Electronics Model
const Electronics = Product.discriminator("Electronics", electronicsSchema);

export default Electronics;
