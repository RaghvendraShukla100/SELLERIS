// /backend/controllers/sellerController.js

import Seller from "../models/seller.js";

// GET all sellers
export const getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (error) {
    console.error("Error fetching sellers:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET a single seller by ID
export const getSellerById = async (req, res) => {
  const { id } = req.params;

  try {
    const seller = await Seller.findById(id);
    if (!seller) {
      return res.status(404).json({ error: "Seller not found" });
    }
    res.json(seller);
  } catch (error) {
    console.error("Error fetching seller:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// CREATE a new seller
export const createSeller = async (req, res) => {
  const sellerData = req.body;

  try {
    const newSeller = new Seller(sellerData);
    await newSeller.save();
    res.status(201).json(newSeller);
  } catch (error) {
    console.error("Error creating seller:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE a seller by ID
export const updateSeller = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedSeller = await Seller.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedSeller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    res.json(updatedSeller);
  } catch (error) {
    console.error("Error updating seller:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// DELETE a seller by ID
export const deleteSeller = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSeller = await Seller.findByIdAndDelete(id);

    if (!deletedSeller) {
      return res.status(404).json({ error: "Seller not found" });
    }

    res.json({ message: "Seller deleted successfully" });
  } catch (error) {
    console.error("Error deleting seller:", error);
    res.status(500).json({ error: "Server error" });
  }
};
