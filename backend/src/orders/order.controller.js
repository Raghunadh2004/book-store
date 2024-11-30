const Order = require("./order.model");


const createAOrder = async (req,res) => {
    try {
        const newOrder =  await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Creation of order unsuccessful!!"})
    }
}

const getOrderByEmail = async (req,res) => {
    try {
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt: -1});
        if (!orders){
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.log((error));
        res.status(500).send({message:"Unable to find orders by this email id"})
    }
}

module.exports = {
    createAOrder,
    getOrderByEmail
} 