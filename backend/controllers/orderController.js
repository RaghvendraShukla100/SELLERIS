import Order from "../models/orderSchema.js";
import logger from "../utils/logger.js";

// Create Order
export const createOrder = async (req, res) => {
  const {
    userId,
    items,
    subtotal,
    tax,
    shippingCost,
    totalAmount,
    shippingDetails,
    paymentDetails,
    notes,
  } = req.body;

  try {
    const orderId = `ORDER${Date.now()}`; // Generating a unique order ID
    const newOrder = new Order({
      userId,
      orderId,
      items,
      subtotal,
      tax,
      shippingCost,
      totalAmount,
      shippingDetails,
      paymentDetails,
      notes,
    });

    await newOrder.save();

    logger.info(`Order created: ${newOrder.orderId}`);
    res.status(201).json(newOrder);
  } catch (error) {
    logger.error(`Error creating order: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Order by ID
export const getOrderById = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOne({ orderId })
      .populate("userId")
      .populate("items.productId");
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    logger.info(`Order fetched: ${order.orderId}`);
    res.json(order);
  } catch (error) {
    logger.error(`Error fetching order: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Orders by User ID
export const getOrdersByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).populate("items.productId");
    if (!orders.length) {
      return res.status(404).json({ error: "No orders found for this user" });
    }

    logger.info(`Orders fetched for user: ${userId}`);
    res.json(orders);
  } catch (error) {
    logger.error(`Error fetching orders: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { orderId },
      { orderStatus: status },
      { new: true, runValidators: true }
    );
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    logger.info(`Order status updated: ${order.orderId}`);
    res.json(order);
  } catch (error) {
    logger.error(`Error updating order status: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ orderId });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    logger.info(`Order deleted: ${order.orderId}`);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    logger.error(`Error deleting order: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};
