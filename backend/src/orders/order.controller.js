const logger = require("../logger/logging.js"); // Assuming the path is correct
const Order = require("./order.model");

const createAOrder = async (req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        logger.info("Order created successfully", { orderId: savedOrder._id, orderDetails: savedOrder }); // Structured success log
        res.status(200).json(savedOrder);
    } catch (error) {
        logger.error("Error creating order", { error: error.message, stack: error.stack, requestBody: req.body }); // Detailed error log
        res.status(500).send({ message: "Creation of order unsuccessful!!" });
    }
};

const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const orders = await Order.find({ email }).sort({ createdAt: -1 });
        if (!orders || orders.length === 0) {
            logger.warn("No orders found for email", { email }); // Structured warning log
            return res.status(404).json({ message: "Order not found" });
        }
        logger.info("Orders retrieved for email", { email, numberOfOrders: orders.length }); // Success log with email and order count
        res.status(200).json(orders);
    } catch (error) {
        logger.error("Error retrieving orders by email", { email, error: error.message, stack: error.stack }); // Detailed error log
        res.status(500).send({ message: "Unable to find orders by this email id" });
    }
};

module.exports = {
    createAOrder,
    getOrderByEmail
};
