import express from "express";
import productsRoutes from "./products.js";
import homepageRoutes from "./homepage.js";
import userRoutes from "./user.js";
import sellerRoutes from "./seller.js";
import adminRoutes from "./admin.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Rate limiting middleware
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }); // 100 requests per 15 minutes
router.use(limiter);

// Mount routes
router.use("/products", productsRoutes);
router.use("/homepage", homepageRoutes);
router.use("/user", userRoutes);
router.use("/sellers", sellerRoutes);
router.use("/admin", adminRoutes);

// Centralized error handling
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default router;
