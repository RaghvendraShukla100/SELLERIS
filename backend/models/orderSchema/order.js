import mongoose from "mongoose";
import { Schema } from "mongoose";

// Sub-schema for Order Items
const orderItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: { type: String, required: true }, // Product name at the time of purchase
  price: { type: Number, required: true }, // Price per unit at the time of purchase
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true }, // price * quantity
  image: { type: String }, // Product image URL
});

// Sub-schema for Shipping Details
const shippingDetailsSchema = new Schema({
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  trackingNumber: { type: String }, // Shipping tracking number
  carrier: { type: String }, // Shipping carrier (e.g., FedEx, UPS)
  estimatedDelivery: { type: Date }, // Estimated delivery date
});

// Sub-schema for Payment Details
const paymentDetailsSchema = new Schema({
  paymentMethod: { type: String, required: true }, // e.g., Credit Card, PayPal
  transactionId: { type: String, required: true }, // Payment gateway transaction ID
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed", "Refunded"],
    default: "Pending",
  },
  paidAt: { type: Date }, // Timestamp when payment was completed
});

// Main Order Schema
const orderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User who placed the order
  orderId: { type: String, required: true, unique: true }, // Unique order ID (e.g., "ORDER12345")
  items: [orderItemSchema], // Array of ordered items
  subtotal: { type: Number, required: true }, // Total price before tax and shipping
  tax: { type: Number, required: true }, // Tax amount
  shippingCost: { type: Number, required: true }, // Shipping cost
  totalAmount: { type: Number, required: true }, // subtotal + tax + shippingCost
  shippingDetails: shippingDetailsSchema, // Shipping information
  paymentDetails: paymentDetailsSchema, // Payment information
  orderStatus: {
    type: String,
    enum: [
      "Pending",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
      "Returned",
    ],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now }, // Order creation date
  updatedAt: { type: Date, default: Date.now }, // Last update date
  deliveredAt: { type: Date }, // Timestamp when order was delivered
  cancelledAt: { type: Date }, // Timestamp when order was cancelled
  notes: { type: String }, // Additional notes (e.g., gift message, special instructions)
});

// Middleware to update the 'updatedAt' field before saving
orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
