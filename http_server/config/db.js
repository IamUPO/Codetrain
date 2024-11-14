const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.DATABASE_URL || "mongodb://localhost:27017/todo";

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
