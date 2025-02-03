import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendVerificationEmail } from "../utils/emailService.js";
import logger from "../utils/logger.js";

// Admin registration
export const createAdmin = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Create new admin
    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      password,
      phone,
    });

    await newAdmin.save();

    // Send verification email
    await sendVerificationEmail(newAdmin.email, newAdmin._id);

    logger.info(`Admin registered: ${newAdmin.email}`);
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    logger.error(`Error registering admin: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Admin login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    logger.info(`Admin logged in: ${admin.email}`);
    res.json({ token });
  } catch (error) {
    logger.error(`Error logging in admin: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all data (superadmin only)
export const getAllData = async (req, res) => {
  try {
    const allData = {
      sellers: await Seller.find(),
      users: await User.find(),
      products: await Product.find(),
      orders: await Order.find(),
    };

    logger.info("All data fetched by superadmin");
    res.json(allData);
  } catch (error) {
    logger.error(`Error fetching all data: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};
