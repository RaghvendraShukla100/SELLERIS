import mongoose from "mongoose";
import BaseUser from "./baseUser.js";

const { Schema } = mongoose;

const userSchema = new Schema({
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orderHistory: [
    {
      orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
      date: { type: Date, required: true },
    },
  ],
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  visitHistory: [
    {
      date: { type: Date, required: true },
      viewedProducts: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
        },
      ],
    },
  ],
});

const User = BaseUser.discriminator("User", userSchema);

export default User;
