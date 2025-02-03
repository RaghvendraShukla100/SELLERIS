const mongoose = require("mongoose");
const { Schema } = mongoose;

// Sub-schema for Address
const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  isDefault: { type: Boolean, default: false }, // To mark default address
});

// Sub-schema for Payment Method
const paymentMethodSchema = new Schema({
  cardNumber: { type: String, required: true },
  cardHolderName: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true },
  isDefault: { type: Boolean, default: false }, // To mark default payment method
});

// Main User Schema
const userSchema = new Schema({
  // Personal Details
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  profilePicture: { type: String }, // URL to the user's profile picture

  // Authentication
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },

  // Addresses
  addresses: [addressSchema], // Array of addresses

  // Payment Methods
  paymentMethods: [paymentMethodSchema], // Array of payment methods

  // Preferences
  preferences: {
    newsletterSubscription: { type: Boolean, default: false },
    theme: { type: String, enum: ["light", "dark"], default: "light" },
  },

  // Wishlist
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // Array of product IDs

  // Cart
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, default: 1 },
      addedAt: { type: Date, default: Date.now },
    },
  ],

  // Order History
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // Array of order IDs

  // Product Visit History
  productVisitHistory: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      visitedAt: { type: Date, default: Date.now },
    },
  ],

  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to update the 'updatedAt' field before saving
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
