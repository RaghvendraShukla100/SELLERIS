import express from "express";
import {
  getSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
} from "../controllers/sellerController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";
import {
  validateSellerCreation,
  validateSellerUpdate,
} from "../middleware/validationMiddleware.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Rate limiting middleware
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }); // 100 requests per 15 minutes
router.use(limiter);

// GET all sellers (public route)
router.get("/", getSellers);

// GET a single seller by ID (public route)
router.get("/:id", getSellerById);

// CREATE a new seller (protected route, admin only)
router.post("/", authenticate, isAdmin, validateSellerCreation, createSeller);

// UPDATE a seller by ID (protected route, admin or seller themselves)
router.put("/:id", authenticate, validateSellerUpdate, updateSeller);

// DELETE a seller by ID (protected route, admin only)
router.delete("/:id", authenticate, isAdmin, deleteSeller);

export default router;
