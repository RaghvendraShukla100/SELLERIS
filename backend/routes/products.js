// /backend/routes/products.js

import express from "express";
import {
  getProductsByType,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";
import { validateProductType } from "../middleware/validateProductType.js";

const router = express.Router();

// GET all products of a type
router.get("/:productType", validateProductType, getProductsByType);

// GET a single product by ID
router.get("/:productType/:id", validateProductType, getProductById);

// CREATE a new product
router.post("/:productType", validateProductType, createProduct);

// UPDATE a product by ID
router.put("/:productType/:id", validateProductType, updateProduct);

// DELETE a product by ID
router.delete("/:productType/:id", validateProductType, deleteProduct);

export default router;
