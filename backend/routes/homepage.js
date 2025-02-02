// /backend/routes/homepage.js

import express from "express";
import { getHomepageSection } from "../controllers/homepageController.js";
import { cacheMiddleware } from "../middleware/cacheMiddleware.js";

const router = express.Router();

// GET homepage section data
router.get("/:section", cacheMiddleware, getHomepageSection);

export default router;
