import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { validateEmail, validateUsername, validateRequiredFields } from "../utils/validators.js";

// Signup logic
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, userName } = req.body;

    validateRequiredFields(fullName, email, password, userName);

    await validateEmail(email);
    await validateUsername(userName);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      userName,
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};
