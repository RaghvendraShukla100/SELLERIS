import express from "express";
import {
  createAdmin,
  loginAdmin,
  getAllData,
} from "../controllers/adminController.js";
import { authenticate, isSuperAdmin } from "../middleware/authMiddleware.js";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// Admin registration
router.post("/register", validateRegistration, (req, res, next) => {
  console.log("Request received at /api/admin/register:", req.body); // Add logging
  createAdmin(req, res).catch(next); // Ensure errors are passed to the error handler
});

// Admin login
router.post("/login", validateLogin, loginAdmin);

// Get all data (protected route, superadmin only)
router.get("/data", authenticate, isSuperAdmin, getAllData);

export default router;
