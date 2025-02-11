import express from "express";
import {
  getProductsByType,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";
import { validateProductType } from "../middleware/validateProductType.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all products of a type
router.get("/api/:productType", validateProductType, getProductsByType);

// GET a single product by ID
router.get("/api/:productType/:id", validateProductType, getProductById);

// CREATE a new product (protected route, seller only)
router.post(
  "/api/:productType",
  authenticate,
  validateProductType,
  createProduct
);

// UPDATE a product by ID (protected route, seller only)
router.put(
  "/api/:productType/:id",
  authenticate,
  validateProductType,
  updateProduct
);

// DELETE a product by ID (protected route, seller only)
router.delete(
  "/api/:productType/:id",
  authenticate,
  validateProductType,
  deleteProduct
);

export default router;
