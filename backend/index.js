// /backend/index.js

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {
  getProductsByType,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/productsController.js";

import { getHomepageSection } from "./controllers/homepageController.js";

import { validateProductType } from "./middleware/validateProductType.js";
import { cacheMiddleware } from "./middleware/cacheMiddleware.js";

const app = express();
const port = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Products Routes

// GET all products of a type
app.get("/api/products/:productType", validateProductType, getProductsByType);

// GET a single product by ID
app.get("/api/products/:productType/:id", validateProductType, getProductById);

// CREATE a new product
app.post("/api/products/:productType", validateProductType, createProduct);

// UPDATE a product by ID
app.put("/api/products/:productType/:id", validateProductType, updateProduct);

// DELETE a product by ID
app.delete(
  "/api/products/:productType/:id",
  validateProductType,
  deleteProduct
);

// Homepage Routes

app.get("/api/homepage/:section", cacheMiddleware, getHomepageSection);

// Start the server
app.listen(port, () => {
  console.log(`SERVER IS LISTENING AT ${port}`);
});
