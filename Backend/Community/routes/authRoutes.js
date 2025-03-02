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
const { registerUser, loginUser, getUserProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Register with profile image upload
router.post("/register", upload.single("profilePic"), registerUser);

// Login user
router.post("/login", loginUser);

// Get user profile (protected)
router.get("/profile", protect, getUserProfile);

module.exports = router;
