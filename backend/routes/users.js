import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// User registration
router.post("/register", validateRegistration, registerUser);

// User login
router.post("/login", validateLogin, loginUser);

// Email verification
router.get("/verify-email/:token", verifyEmail);

// Forgot password
router.post("/forgot-password", forgotPassword);

// Reset password
router.post("/reset-password/:token", resetPassword);

// Get user profile (protected route)
router.get("/profile", authenticate, getUserProfile);

// Update user profile (protected route)
router.put("/profile", authenticate, updateUserProfile);

export default router;
