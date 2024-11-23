import express from "express";
import morgan from "morgan";

// import dotenv
import dotenv from "dotenv";

// Connect to MongoDB database
import { connectDB } from './config/db.js';

// Import routes
import todoRoute from './routes/todoRoute.js';

// initialize dotenv
dotenv.config();

// Initialize an Express application
const app = express();

// Initialize Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.json()); 

// Initialiaze Routes
app.use("/api/todo", todoRoute);

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;

// Log a message when the server starts
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});