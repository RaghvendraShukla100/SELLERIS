import mongoose from "mongoose";
import BaseUser from "./baseUser.js";

const { Schema } = mongoose;

const sellerSchema = new Schema({
  businessName: { type: String, required: true },
  businessLicenseNumber: { type: String, required: true },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  paymentMethods: [
    {
      token: { type: String, required: true }, // Tokenized payment method
      last4: { type: String, required: true }, // Last 4 digits of the card
      brand: { type: String, required: true }, // Card brand (e.g., Visa, MasterCard)
      expirationDate: { type: Date, required: true }, // Expiration date
    },
  ],
});

const Seller = BaseUser.discriminator("Seller", sellerSchema);

export default Seller;
