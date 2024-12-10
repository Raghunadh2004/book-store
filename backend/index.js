const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config(); 

// Middleware
app.use(express.json());

  
app.use(cors({
  origin: ['http://localhost:5173', 'http://192.168.49.2:30001','http://book-store'],
  credentials: true
}))

// Routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin.stats');

app.use("/api/books", bookRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/auth",userRoutes);
app.use("/api/admin",adminRoutes);

// Root Route
app.use('/', (req, res) => {
    app.use('/', (req, res) => {
    res.json({ message: "Welcome to my book-store server!!" });
});
});

// Database Connection and Server Initialization
async function main() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected successfully!!");
    } catch (err) {
        console.log("MongoDB connection error:", err);
    }
}

main();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
