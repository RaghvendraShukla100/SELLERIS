import {
  Clothing,
  Electronics,
  BeautySkincare,
  Furniture,
  HomeDecor,
} from "../models/productSchema/products.js";
import logger from "../utils/logger.js";

// Helper function to get the model based on product type
const getModelByProductType = (productType) => {
  switch (productType) {
    case "clothing":
      return Clothing;
    case "electronics":
      return Electronics;
    case "beautyskincare":
      return BeautySkincare;
    case "furniture":
      return Furniture;
    case "homedecor":
      return HomeDecor;
    default:
      return null;
  }
};

// Get products by type
export const getProductsByType = async (req, res) => {
  const productType = req.params.productType.toLowerCase();
  const { page = 1, limit = 10, sortBy = "name", order = "asc" } = req.query;
  const sortOrder = order === "desc" ? -1 : 1;

  try {
    const model = getModelByProductType(productType);
    if (!model) {
      return res.status(400).json({ error: "Invalid product type" });
    }

    const total = await model.countDocuments();

    const products = await model
      .find()
      .sort({ [sortBy]: sortOrder })
      .limit(parseInt(limit))
      .skip((page - 1) * limit)
      .exec();

    logger.info(`Products fetched for type: ${productType}`);
    res.json({
      products,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    logger.error(`Error fetching products: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  const productType = req.params.productType.toLowerCase();
  const { id } = req.params;

  try {
    const model = getModelByProductType(productType);
    if (!model) {
      return res.status(400).json({ error: "Invalid product type" });
    }

    const product = await model.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    logger.info(`Product fetched: ${product.name}`);
    res.json(product);
  } catch (error) {
    logger.error(`Error fetching product: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Create product
export const createProduct = async (req, res) => {
  const productType = req.params.productType.toLowerCase();
  const productData = req.body;

  try {
    const model = getModelByProductType(productType);
    if (!model) {
      return res.status(400).json({ error: "Invalid product type" });
    }

    const newProduct = new model(productData);
    await newProduct.save();

    logger.info(`Product created: ${newProduct.name}`);
    res.status(201).json(newProduct);
  } catch (error) {
    logger.error(`Error creating product: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  const productType = req.params.productType.toLowerCase();
  const { id } = req.params;
  const updateData = req.body;

  try {
    const model = getModelByProductType(productType);
    if (!model) {
      return res.status(400).json({ error: "Invalid product type" });
    }

    const updatedProduct = await model.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    logger.info(`Product updated: ${updatedProduct.name}`);
    res.json(updatedProduct);
  } catch (error) {
    logger.error(`Error updating product: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  const productType = req.params.productType.toLowerCase();
  const { id } = req.params;

  try {
    const model = getModelByProductType(productType);
    if (!model) {
      return res.status(400).json({ error: "Invalid product type" });
    }

    const deletedProduct = await model.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    logger.info(`Product deleted: ${deletedProduct.name}`);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    logger.error(`Error deleting product: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};
