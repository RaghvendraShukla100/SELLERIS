import mongoose from "mongoose";

// Define the Address Schema
const addressSchema = new mongoose.Schema({
  buildingNumber: { type: String },
  houseNumber: { type: String, required: true },
  street: { type: String, required: true },
  area: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: Number, required: true },
  country: { type: String, required: true },
});

// Define the Personal Information Schema
const personalInfoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  profileImage: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  address: {
    primaryAddress: addressSchema,
  },
});

// Define the User Schema
const userSchema = new mongoose.Schema({
  personalInfo: personalInfoSchema,
  cartData: { type: Array, default: [] },
  createdOrders: { type: Array, default: [] },
  wishlistProducts: { type: Array, default: [] },
  recentVisitHistory: { type: Array, default: [] },
});

// Create the User Model
const User = mongoose.model("User", userSchema);

export default User;
