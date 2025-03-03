// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const config = require("../config/env");

// // Utility function to generate a JWT token
// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, config.JWT_SECRET, {
//     expiresIn: config.JWT_EXPIRES_IN,
//   });
// };

// // Register a new user
// exports.registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User already exists." });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user.id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user.id),
//       });
//     } else {
//       res.status(400).json({ message: "Invalid user data." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error.", error: error.message });
//   }
// };

// // Login a user
// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     const user = await User.findOne({ email });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       res.json({
//         _id: user.id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user.id),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error.", error: error.message });
//   }
// };

// // Get user profile
// exports.getUserProfile = async (req, res) => {
//   const user = await User.findById(req.user.id).select("-password");

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: "User not found." });
//   }
// };
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// Register user with profile picture upload
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const profilePic = req.file ? req.file.path : ""; // Cloudinary URL

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create user
  const user = await User.create({ name, email, password, profilePic });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

module.exports = { registerUser };
