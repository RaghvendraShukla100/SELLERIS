// /backend/middleware/authSellerMiddleware.js

import jwt from "jsonwebtoken";
import Seller from "../models/seller.js";

export const authenticateSeller = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.seller = decoded;

    const seller = await Seller.findById(req.seller.id);
    if (!seller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    next();
  } catch (error) {
    console.error("Error with token:", error);
    res.status(401).json({ error: "Token is not valid" });
  }
};
