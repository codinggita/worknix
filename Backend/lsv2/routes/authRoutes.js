// const express = require("express");
// const bcrypt = require("bcryptjs");
// const User = require("../models/User");
// const Company = require("../models/Company");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const router = express.Router();

// // Generate a unique ID
// function generateRandomNumber() {
//   return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit unique number
// }

// function getCurrentYear() {
//   return new Date().getFullYear().toString().slice(-2);
// }

// async function generateUniqueId(prefix, model, idField) {
//   let uniqueId;
//   let exists = true;
//   while (exists) {
//     uniqueId = `${prefix}${getCurrentYear()}${generateRandomNumber()}`;
//     exists = await model.findOne({ [idField]: uniqueId });
//   }
//   return uniqueId;
// }

// // Signup Route
// router.post("/signup", async (req, res) => {
//   const { username, email, password, type } = req.body; // 'type' can be 'employee' or 'company'

//   try {
//     if (!["employee", "company"].includes(type)) {
//       return res.status(400).json({ message: "Invalid user type" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     if (type === "employee") {
//       const userId = await generateUniqueId("WE", User, "userId");
//       const newUser = new User({ username, email, password: hashedPassword, userId });
//       await newUser.save();
//       return res.status(201).json({ message: "Employee registered", userId });
//     } else {
//       const companyId = await generateUniqueId("WC", Company, "companyId");
//       const newCompany = new Company({ companyName: username, email, password: hashedPassword, companyId });
//       await newCompany.save();
//       return res.status(201).json({ message: "Company registered", companyId });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//   const { email, password, type } = req.body;

//   try {
//     let user;
//     if (type === "employee") {
//       user = await User.findOne({ email });
//     } else if (type === "company") {
//       user = await Company.findOne({ email });
//     } else {
//       return res.status(400).json({ message: "Invalid user type" });
//     }

//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id, type }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(200).json({ message: "Login successful", token, user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "employee", // Default selection
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://worknix-2.onrender.com/signup", formData);

      alert(`Signup successful! Your ID: ${response.data.userId || response.data.companyId}`);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 bg-red-100 p-2 rounded-md">
            {errorMessage}
          </motion.div>
        )}

        <input type="text" name="username" placeholder="Username/Company Name" value={formData.username} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300" />

        <div className="relative">
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <label className="block text-gray-700">Signup as:</label>
        <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300">
          <option value="employee">Employee</option>
          <option value="company">Company</option>
        </select>

        <motion.button type="submit" className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300" disabled={isLoading}>
          {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Create Account"}
        </motion.button>
      </form>
    </AuthLayout>
  );
}
