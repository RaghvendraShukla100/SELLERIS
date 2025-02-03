import express from "express";
import {
  getHomepageSection,
  refreshHomepageCache,
} from "../controllers/homepageController.js";
import { cacheMiddleware } from "../middleware/cacheMiddleware.js";

const router = express.Router();

// GET homepage section data (cached)
router.get("/:section", cacheMiddleware, getHomepageSection);

// Refresh homepage cache (e.g., after data update)
router.post("/refresh-cache", refreshHomepageCache);

export default router;
