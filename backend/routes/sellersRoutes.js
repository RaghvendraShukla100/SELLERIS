// backend/routes/sellerRoutes.js
import express from "express";
import {
  getSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
} from "../controllers/sellerController.js";
import { authenticateSeller } from "../middleware/authSellerMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";
import {
  validateSellerCreation,
  validateSellerUpdate,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// CREATE a new seller (public route)
router.post("/register", validateSellerCreation, createSeller);

// GET all sellers (admin only)
router.get("/", authenticateSeller, isAdmin, getSellers);

// GET a single seller by ID (protected route)
router.get("/:id", authenticateSeller, getSellerById);

// UPDATE a seller by ID (protected route)
router.put("/:id", authenticateSeller, validateSellerUpdate, updateSeller);

// DELETE a seller by ID (admin only)
router.delete("/:id", authenticateSeller, isAdmin, deleteSeller);

export default router;
