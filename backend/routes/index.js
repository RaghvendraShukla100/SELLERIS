import express from "express";
import productsRoutes from "./productsRoutes.js";
import homepageRoutes from "./homepageRoutes.js";
import userRoutes from "./usersRoutes.js";
import sellerRoutes from "./sellersRoutes.js";
import adminRoutes from "./adminRoutes.js"; // Import admin routes
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const router = express.Router();

// Security middleware
router.use(helmet());

// CORS configuration
router.use(cors());

// Logging middleware
router.use(morgan("combined"));

// Rate limiting middleware
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }); // 100 requests per 15 minutes
router.use(limiter);

// Mount routes with /api prefix
router.use("/products", productsRoutes);
router.use("/homepage", homepageRoutes);
router.use("/user", userRoutes);
router.use("/sellers", sellerRoutes);

router.use("/admin", adminRoutes); // Ensure this line mounts the admin routes correctly

// Centralized error handling
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default router;
