import express from "express";
import {
  createOrder,
  getOrderById,
  getOrdersByUserId,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Route to create a new order
router.post("/api/orders", createOrder);

// Route to get an order by ID
router.get("/api/orders/:orderId", getOrderById);

// Route to get all orders by a user ID
router.get("/api/orders/user/:userId", getOrdersByUserId);

// Route to update the status of an order
router.put("/api/orders/:orderId/status", updateOrderStatus);

// Route to delete an order
router.delete("/api/orders/:orderId", deleteOrder);

export default router;
