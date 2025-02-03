// /backend/middleware/authUserMiddleware.js

import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    next();
  } catch (error) {
    console.error("Error with token:", error);
    res.status(401).json({ error: "Token is not valid" });
  }
};
