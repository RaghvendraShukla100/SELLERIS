import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  sendVerificationEmail,
  sendPasswordResetEmail,
} from "../utils/emailService.js";
import logger from "../utils/logger.js";

// User registration
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save();

    // Send verification email
    await sendVerificationEmail(newUser.email, newUser._id);

    logger.info(`User registered: ${newUser.email}`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    logger.error(`Error registering user: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// User login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    logger.info(`User logged in: ${user.email}`);
    res.json({ token });
  } catch (error) {
    logger.error(`Error logging in user: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    logger.info(`User profile fetched: ${user.email}`);
    res.json(user);
  } catch (error) {
    logger.error(`Error fetching user profile: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  const { firstName, lastName, phone, preferences } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.phone = phone || user.phone;
    user.preferences = preferences || user.preferences;

    await user.save();

    logger.info(`User profile updated: ${user.email}`);
    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    logger.error(`Error updating user profile: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Verify email
export const verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.isEmailVerified = true;
    await user.save();

    logger.info(`Email verified: ${user.email}`);
    res.json({ message: "Email verified successfully" });
  } catch (error) {
    logger.error(`Error verifying email: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Forgot password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate password reset token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send password reset email
    await sendPasswordResetEmail(user.email, token);

    logger.info(`Password reset email sent: ${user.email}`);
    res.json({ message: "Password reset email sent" });
  } catch (error) {
    logger.error(`Error sending password reset email: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    logger.info(`Password reset: ${user.email}`);
    res.json({ message: "Password reset successfully" });
  } catch (error) {
    logger.error(`Error resetting password: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};
