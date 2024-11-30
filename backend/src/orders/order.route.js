const express = require('express');
const Order = require("./order.model");
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router();

//create an order
router.post("/",createAOrder);

//get orders
router.get("/email/:email",getOrderByEmail);

module.exports = router;