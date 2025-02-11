// backend/models/userSchema/sellers.js
import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date },
  profilePicture: { type: String },
  businessName: { type: String, required: true },
  businessDescription: { type: String },
  businessLogo: { type: String },
  businessAddress: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
    isDefault: { type: Boolean, default: true },
  },
  taxIdentificationNumber: { type: String },
  businessRegistrationNumber: { type: String },
  bankDetails: {
    accountHolderName: { type: String },
    accountNumber: { type: String },
    bankName: { type: String },
    ifscCode: { type: String },
    branchName: { type: String },
  },
  preferences: {
    newsletterSubscription: { type: Boolean, default: false },
    notificationPreferences: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: true },
    },
  },
});

const Seller = mongoose.model("Seller", sellerSchema);
export default Seller;
