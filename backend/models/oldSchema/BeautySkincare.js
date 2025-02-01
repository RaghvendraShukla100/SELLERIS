import mongoose from "mongoose";

const { Schema } = mongoose;

const beautySkincareSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  brand: { type: String, required: true },
  genericName: { type: String, required: true },
  sizes: [String],
  ingredients: [String],
  skinType: String,
  inBox: String,
  detailsAboutThisItem: [String],
  description: String,
  specialPromotionalImages: [String],
  images: [String],
  reviews: [
    {
      user: {
        id: String,
        name: String,
        date: String,
        country: String,
      },
      rating: Number,
      comment: {
        heading: String,
        body: String,
      },
    },
  ],
  price: String,
  availability: String,
  warranty: String,
  customerServiceContact: String,
  shippingDetails: {
    cost: String,
    estimatedDelivery: String,
  },
  productDimensions: {
    length: String,
    width: String,
    height: String,
    weight: String,
  },
  additionalFeatures: [String],
  discountsOrOffers: String,
});

const BeautySkincare = mongoose.model("BeautySkincare", beautySkincareSchema);
export default BeautySkincare;
