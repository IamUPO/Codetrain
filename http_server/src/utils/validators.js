import User from "../models/userModel.js";

// Check if email already exists in the database
export const validateEmail = async (email) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email already in use.");
    }
};

// Check if username already exists in the database
export const validateUsername = async (userName) => {
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
        throw new Error("Username already in use.");
    }
};

// Basic validation for required fields
export const validateRequiredFields = (fullName, email, password, userName) => {
    if (!fullName || !email || !password || !userName) {
        throw new Error("All fields are required.");
    }
};
