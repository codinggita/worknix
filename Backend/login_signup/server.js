const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Import and configure dotenv

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/worknix")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error.message);
  });

// Define Schema and Model
const newSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  mobile: { type: String, required: true },
});

const collection = mongoose.model("Login_Signup", newSchema);

// JWT Secret Key (ensure it's loaded from environment)
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in your .env file!");
  process.exit(1); // Exit if the JWT_SECRET is missing
}

// Routes
app.get("/", cors(), (req, res) => {
  res.send("Welcome to the API!");
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password, username, mobile } = req.body;

  try {
    const userExists = await collection.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new collection({
      email,
      password: hashedPassword,
      username,
      mobile,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error occurred during signup" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user: { username: user.username, mobile: user.mobile } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error occurred during login" });
  }
});

// Middleware to Authenticate Token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Save user details from token to request object
    next();
  } catch (err) {
    console.error("Invalid Token Error:", err);
    res.status(403).json({ message: "Invalid Token" });
  }
};

// Example Protected Route
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Start Server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
