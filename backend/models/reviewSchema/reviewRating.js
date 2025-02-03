const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewRatingSchema = new Schema(
  {
    // User who gave the review
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Product being reviewed
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // Seller of the product
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },

    // Order associated with the review
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    // Rating (1 to 5 stars)
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    // Review text
    review: {
      type: String,
      trim: true,
      maxlength: 500, // Limit review length
    },

    // Review title (optional)
    title: {
      type: String,
      trim: true,
      maxlength: 100,
    },

    // Images or videos attached to the review (optional)
    media: [
      {
        type: String, // URLs to images or videos
      },
    ],

    // Helpful votes (optional)
    helpfulVotes: {
      type: Number,
      default: 0,
    },

    // Flags for inappropriate content (optional)
    isFlagged: {
      type: Boolean,
      default: false,
    },

    // Timestamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Middleware to update the 'updatedAt' field before saving
reviewRatingSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const ReviewRating = mongoose.model("ReviewRating", reviewRatingSchema);

module.exports = ReviewRating;
