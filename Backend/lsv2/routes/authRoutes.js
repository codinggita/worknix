const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Company = require("../models/Company");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Generate a unique ID
function generateRandomNumber() {
  return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit unique number
}

function getCurrentYear() {
  return new Date().getFullYear().toString().slice(-2);
}

async function generateUniqueId(prefix, model, idField) {
  let uniqueId;
  let exists = true;
  while (exists) {
    uniqueId = `${prefix}${getCurrentYear()}${generateRandomNumber()}`;
    exists = await model.findOne({ [idField]: uniqueId });
  }
  return uniqueId;
}

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password, type } = req.body; // 'type' can be 'employee' or 'company'

  try {
    if (!["employee", "company"].includes(type)) {
      return res.status(400).json({ message: "Invalid user type" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (type === "employee") {
      const userId = await generateUniqueId("WE", User, "userId");
      const newUser = new User({ username, email, password: hashedPassword, userId });
      await newUser.save();
      return res.status(201).json({ message: "Employee registered", userId });
    } else {
      const companyId = await generateUniqueId("WC", Company, "companyId");
      const newCompany = new Company({ companyName: username, email, password: hashedPassword, companyId });
      await newCompany.save();
      return res.status(201).json({ message: "Company registered", companyId });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password, type } = req.body;

  try {
    let user;
    if (type === "employee") {
      user = await User.findOne({ email });
    } else if (type === "company") {
      user = await Company.findOne({ email });
    } else {
      return res.status(400).json({ message: "Invalid user type" });
    }

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, type }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
