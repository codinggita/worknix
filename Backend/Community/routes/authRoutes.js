// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser, getUserProfile } = require("../controllers/authControllers");
// const { protect } = require("../middleware/authMiddleware");

// // User Registration
// router.post("/register", registerUser);

// // User Login
// router.post("/login", loginUser);

// // Get User Profile (protected route)
// router.get("/profile", protect, getUserProfile);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    verifyEmail, 
    forgotPassword, 
    resetPassword, 
    updateUserProfile, 
    logoutUser, 
    getAllUsers 
} = require("../controllers/authControllers");

const { protect, admin } = require("../middleware/authMiddleware");

// User Registration
router.post("/register", registerUser);

// Email Verification
router.get("/verify-email/:token", verifyEmail);

// User Login
router.post("/login", loginUser);

// User Logout
router.post("/logout", protect, logoutUser);

// Get User Profile (Protected)
router.get("/profile", protect, getUserProfile);

// Update User Profile (Protected)
router.put("/profile", protect, updateUserProfile);

// Forgot Password
router.post("/forgot-password", forgotPassword);

// Reset Password
router.post("/reset-password/:token", resetPassword);

// Get All Users (Admin only)
router.get("/users", protect, admin, getAllUsers);

module.exports = router;
