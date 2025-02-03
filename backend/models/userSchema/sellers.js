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

// Sub-schema for Bank Details
const bankDetailsSchema = new Schema({
  accountHolderName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  bankName: { type: String, required: true },
  ifscCode: { type: String, required: true },
  branchName: { type: String },
});

// Main Seller Schema
const sellerSchema = new Schema(
  {
    // Personal Details
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date },
    profilePicture: { type: String }, // URL to the seller's profile picture

    // Business Details
    businessName: { type: String, required: true },
    businessDescription: { type: String },
    businessLogo: { type: String }, // URL to the business logo
    businessAddress: addressSchema, // Business address
    taxIdentificationNumber: { type: String }, // TIN or GST number
    businessRegistrationNumber: { type: String }, // Business registration number

    // Bank Details (for payouts)
    bankDetails: bankDetailsSchema,

    // Verification Status
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    isIdentityVerified: { type: Boolean, default: false }, // KYC verification
    isBusinessVerified: { type: Boolean, default: false }, // Business verification

    // Authentication
    emailVerificationToken: { type: String },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },

    // Products Listed by the Seller
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

    // Orders Fulfilled by the Seller
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],

    // Seller Ratings and Reviews
    ratings: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        review: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],

    // Average Rating (calculated field)
    averageRating: { type: Number, default: 0, min: 0, max: 5 },

    // Seller Preferences
    preferences: {
      newsletterSubscription: { type: Boolean, default: false },
      notificationPreferences: {
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: true },
      },
    },

    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Middleware to update the 'updatedAt' field before saving
sellerSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Middleware to calculate average rating
sellerSchema.methods.calculateAverageRating = function () {
  if (this.ratings.length === 0) {
    this.averageRating = 0;
    return;
  }
  const totalRating = this.ratings.reduce(
    (sum, rating) => sum + rating.rating,
    0
  );
  this.averageRating = totalRating / this.ratings.length;
};

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
