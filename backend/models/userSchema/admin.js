const mongoose = require("mongoose");
const { Schema } = mongoose;

// Admin Schema
const adminSchema = new Schema({
  // Personal Details
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  profilePicture: { type: String }, // URL to the admin's profile picture

  // Role and Permissions
  role: { type: String, enum: ["superadmin", "admin"], default: "admin" }, // Role of the admin

  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to update the 'updatedAt' field before saving
adminSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Middleware to hash the password before saving
const bcrypt = require("bcrypt");

adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

// Method to check password
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
