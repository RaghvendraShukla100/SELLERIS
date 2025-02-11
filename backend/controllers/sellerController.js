// backend/controllers/sellerController.js
import Seller from "../models/userSchema/sellers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// GET all sellers (admin only)
export const getSellers = async (req, res) => {
  try {
    console.log("User Role:", req.user.role); // Log the user's role
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }
    const sellers = await Seller.find().select("-password");
    res.json(sellers);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET a single seller by ID (seller can only access their own details)
export const getSellerById = async (req, res) => {
  const { id } = req.params;
  console.log("Seller ID:", id); // Log the seller ID

  try {
    console.log("Requester ID:", req.seller.id); // Log the requester ID
    if (req.seller.id !== id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const seller = await Seller.findById(id).select("-password");
    if (!seller) {
      return res.status(404).json({ error: "Seller not found" });
    }
    res.json(seller);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// CREATE a new seller
export const createSeller = async (req, res) => {
  const sellerData = req.body;
  console.log("Received Seller Data:", sellerData); // Log the received seller data

  try {
    // Convert 'isDefault' to boolean
    if (typeof sellerData.businessAddress.isDefault === "string") {
      sellerData.businessAddress.isDefault =
        sellerData.businessAddress.isDefault === "on";
    }

    // Check if the seller already exists
    const existingSeller = await Seller.findOne({ email: sellerData.email });
    if (existingSeller) {
      return res.status(400).json({ error: "Seller already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(sellerData.password, 10);
    sellerData.password = hashedPassword;
    console.log("Hashed Password:", hashedPassword); // Log the hashed password

    // Create and save the new seller
    const newSeller = new Seller(sellerData);
    await newSeller.save();
    console.log("New Seller Created:", newSeller); // Log the newly created seller

    // Generate a JWT token
    const token = jwt.sign({ id: newSeller._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Generated Token:", token); // Log the generated token

    // Respond with the newly created seller and token
    res.status(201).json({ seller: newSeller, token });
  } catch (error) {
    console.error("Server Error:", error); // Log the server error
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE a seller by ID (seller can only update their own details)
export const updateSeller = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log("Update Data:", updateData); // Log the update data

  try {
    console.log("Requester ID:", req.seller.id); // Log the requester ID
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
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE a seller by ID (admin only)
export const deleteSeller = async (req, res) => {
  const { id } = req.params;
  console.log("Delete Seller ID:", id); // Log the delete seller ID

  try {
    console.log("User Role:", req.user.role); // Log the user's role
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const deletedSeller = await Seller.findByIdAndDelete(id);

    if (!deletedSeller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    res.json({ message: "Seller deleted successfully" });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
