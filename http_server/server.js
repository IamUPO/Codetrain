// server.js
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const todoRoute = require("./routes/todoRoute");

dotenv.config();

const server = express();

// Middleware
server.use(morgan("dev"));
server.use(express.json()); 

server.use((req, res, next) => {
    console.log("Parsed Body:", req.body);
    next();
});

// Database connection
connectDB();

// Routes - All routes defined in todoRoute will be prefixed with /api/v1
server.use("/api/v1", todoRoute);

module.exports = server;
