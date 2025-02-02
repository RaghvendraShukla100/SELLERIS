import mongoose from "mongoose";

const { Schema } = mongoose;

const baseOptions = {
  discriminatorKey: "role",
  collection: "users",
};

const baseUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    sex: { type: String, enum: ["Male", "Female", "Other"] },
    dob: { type: Date },
    address: {
      street: { type: String },
      area: { type: String },
      buildingOrHouseNumber: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    contactNumber: { type: String },
  },
  baseOptions
);

const BaseUser = mongoose.model("BaseUser", baseUserSchema);

export default BaseUser;
