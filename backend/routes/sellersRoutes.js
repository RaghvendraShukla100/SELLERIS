// backend/routes/sellersRoutes.js
import express from "express";
import {
  createSeller,
  updateSeller,
  deleteSeller,
  getSellerById,
  getSellers,
} from "../controllers/sellerController.js";
import {
  validateSellerCreation,
  validateSellerUpdate,
} from "../middleware/validationMiddleware.js";
import { authenticateUser } from "../middleware/authUserMiddleware.js";

const router = express.Router();

// GET all sellers (admin only)
router.get("/", authenticateUser, getSellers);

// GET a single seller by ID
router.get("/:id", authenticateUser, getSellerById);

// CREATE a new seller
router.post("/", validateSellerCreation, createSeller);

// UPDATE a seller by ID
router.put("/:id", authenticateUser, validateSellerUpdate, updateSeller);

// DELETE a seller by ID (admin only)
router.delete("/:id", authenticateUser, deleteSeller);

export default router;
