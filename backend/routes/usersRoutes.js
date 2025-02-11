// backend/routes/userRoutes.js
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
import { authenticateUser } from "../middleware/authUserMiddleware.js";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// Register a new user
router.post("/register", validateRegistration, registerUser);

// Login a user
router.post("/login", validateLogin, loginUser);

// Get user profile
router.get("/profile", authenticateUser, getUserProfile);

// Update user profile
router.put("/profile", authenticateUser, updateUserProfile);

// Verify email
router.get("/verify-email/:token", verifyEmail);

// Forgot password
router.post("/forgot-password", forgotPassword);

// Reset password
router.post("/reset-password/:token", resetPassword);

export default router;
