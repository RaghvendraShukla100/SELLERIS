// backend/controllers/sellerController.js
import Seller from "../models/userSchema/sellers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// GET all sellers (admin only)
export const getSellers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }
    const sellers = await Seller.find().select("-password");
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET a single seller by ID (seller can only access their own details)
export const getSellerById = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.seller.id !== id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const seller = await Seller.findById(id).select("-password");
    if (!seller) {
      return res.status(404).json({ error: "Seller not found" });
    }
    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// CREATE a new seller
export const createSeller = async (req, res) => {
  const sellerData = req.body;

  try {
    const existingSeller = await Seller.findOne({ email: sellerData.email });
    if (existingSeller) {
      return res.status(400).json({ error: "Seller already exists" });
    }

    const hashedPassword = await bcrypt.hash(sellerData.password, 10);
    sellerData.password = hashedPassword;

    const newSeller = new Seller(sellerData);
    await newSeller.save();

    const token = jwt.sign({ id: newSeller._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ seller: newSeller, token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE a seller by ID (seller can only update their own details)
export const updateSeller = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    if (req.seller.id !== id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedSeller = await Seller.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedSeller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    res.json(updatedSeller);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE a seller by ID (admin only)
export const deleteSeller = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const deletedSeller = await Seller.findByIdAndDelete(id);

    if (!deletedSeller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    res.json({ message: "Seller deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
