import express from 'express';
import { signup } from '../controllers/authController.js';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// // Login routes
// router.post('/login', login)

// // Logout routes
// router.post('/logout', logout)

// // Update profile routes
// router.put('/update-profile', protectRoute, updateProfile);

// // Check Authentication routes
// router.get('/status', protectRoute, checkAuth);

export default router;