// const express = require('express');
// const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

// const router = express.Router();

// // Register a new user
// router.post('/register', registerUser);

// // Login user
// router.post('/login', loginUser);

// // Get user profile (protected route)
// router.get('/profile', protect, getUserProfile);

// module.exports = router;
const express = require('express');
const { getAllUsers, updateUserProfile, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all users (Admin Only)
router.get('/', protect, admin, getAllUsers);

// Update user profile (Protected)
router.put('/profile', protect, updateUserProfile);

// Delete a user (Admin Only)
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
