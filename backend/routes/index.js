// /backend/routes/index.js

import express from "express";
import productsRoutes from "./products.js";
import homepageRoutes from "./homepage.js";

const router = express.Router();

// Mount product routes at /products
router.use("/products", productsRoutes);

// Mount homepage routes at /homepage
router.use("/homepage", homepageRoutes);

export default router;
