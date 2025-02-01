import mongoose from "mongoose";

const { Schema } = mongoose;

const clothingSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  productType: { type: String, required: true },
  occasionToWear: { type: String, required: true },
  genericName: { type: String, required: true },
  brand: { type: String, required: true },
  sizes: [String],
  colors: [String],
  material: String,
  fit: String,
  inBox: String,
  detailsAboutThisItem: [String],
  description: String,
  style: { type: String, enum: ["Western", "Indian"], required: true },
  specialPromotionalImages: [String],
  images: [
    {
      color: String,
      links: [String],
    },
  ],
  reviews: [
    {
      user: {
        id: String,
        name: String,
        date: { type: Date, required: true },
        country: String,
      },
      rating: Number,
      comment: {
        heading: String,
        body: String,
      },
    },
  ],
  price: Number,
  stocks: Number,
  warranty: String,
  customerServiceContact: String,
  shippingDetails: {
    cost: String,
    estimatedDelivery: String,
  },
  productDimensions: {
    length: String,
    chest: String,
    sleeveLength: String,
    weight: String,
  },
  additionalFeatures: [String],
  discountsOrOffers: String,
});

const Clothing = mongoose.model("Clothing", clothingSchema);
export default Clothing;
