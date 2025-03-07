// // const express = require("express");
// // const bcrypt = require("bcryptjs");
// // const User = require("../models/User");
// // const Company = require("../models/Company");
// // const jwt = require("jsonwebtoken");
// // require("dotenv").config();

// // const router = express.Router();

// // // Generate a unique ID
// // function generateRandomNumber() {
// //   return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit unique number
// // }

// // function getCurrentYear() {
// //   return new Date().getFullYear().toString().slice(-2);
// // }

// // async function generateUniqueId(prefix, model, idField) {
// //   let uniqueId;
// //   let exists = true;
// //   while (exists) {
// //     uniqueId = `${prefix}${getCurrentYear()}${generateRandomNumber()}`;
// //     exists = await model.findOne({ [idField]: uniqueId });
// //   }
// //   return uniqueId;
// // }

// // // Signup Route
// // router.post("/signup", async (req, res) => {
// //   const { username, email, password, type } = req.body; // 'type' can be 'employee' or 'company'

// //   try {
// //     if (!["employee", "company"].includes(type)) {
// //       return res.status(400).json({ message: "Invalid user type" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     if (type === "employee") {
// //       const userId = await generateUniqueId("WE", User, "userId");
// //       const newUser = new User({ username, email, password: hashedPassword, userId });
// //       await newUser.save();
// //       return res.status(201).json({ message: "Employee registered", userId });
// //     } else {
// //       const companyId = await generateUniqueId("WC", Company, "companyId");
// //       const newCompany = new Company({ companyName: username, email, password: hashedPassword, companyId });
// //       await newCompany.save();
// //       return res.status(201).json({ message: "Company registered", companyId });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error", error });
// //   }
// // });

// // // Login Route
// // router.post("/login", async (req, res) => {
// //   const { email, password, type } = req.body;

// //   try {
// //     let user;
// //     if (type === "employee") {
// //       user = await User.findOne({ email });
// //     } else if (type === "company") {
// //       user = await Company.findOne({ email });
// //     } else {
// //       return res.status(400).json({ message: "Invalid user type" });
// //     }

// //     if (!user) return res.status(404).json({ message: "User not found" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

// //     const token = jwt.sign({ id: user._id, type }, process.env.JWT_SECRET, { expiresIn: "1h" });

// //     res.status(200).json({ message: "Login successful", token, user });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error", error });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");
// // const Company = require("../models/Company");

// // const router = express.Router();

// // // Generate Unique User ID
// // const generateUserId = () => {
// //   const year = new Date().getFullYear().toString().slice(-2); // Last two digits of year
// //   const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
// //   return `WE${year}${randomNum}`;
// // };

// // // Generate Unique Company ID
// // const generateCompanyId = () => {
// //   const year = new Date().getFullYear().toString().slice(-2);
// //   const randomNum = Math.floor(1000 + Math.random() * 9000);
// //   return `WC${year}${randomNum}`;
// // };

// // // Signup Route
// // router.post("/signup", async (req, res) => {
// //   try {
// //     const { username, email, password, type } = req.body;

// //     // Check if user exists
// //     const existingUser = await User.findOne({ email }) || await Company.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "Email already in use." });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
    
// //     if (type === "employee") {
// //       const newUser = new User({
// //         username,
// //         email,
// //         password: hashedPassword,
// //         userId: generateUserId(),
// //       });
// //       await newUser.save();
// //       return res.status(201).json({ message: "User created successfully", userId: newUser.userId });
// //     } else {
// //       const newCompany = new Company({
// //         companyName: username,
// //         email,
// //         password: hashedPassword,
// //         companyId: generateCompanyId(),
// //       });
// //       await newCompany.save();
// //       return res.status(201).json({ message: "Company created successfully", companyId: newCompany.companyId });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error", error });
// //   }
// // });

// // // Login Route
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
    
// //     let user = await User.findOne({ email });
// //     let company = await Company.findOne({ email });

// //     if (!user && !company) {
// //       return res.status(400).json({ message: "Invalid email or password" });
// //     }

// //     const account = user || company;
// //     const isPasswordValid = await bcrypt.compare(password, account.password);
// //     if (!isPasswordValid) {
// //       return res.status(400).json({ message: "Invalid email or password" });
// //     }

// //     const token = jwt.sign({ id: account._id, type: user ? "employee" : "company" }, "secret", { expiresIn: "7d" });

// //     res.status(200).json({ message: "Login successful", token, userType: user ? "employee" : "company" });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error", error });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const User = require("../models/User");
// const Company = require("../models/Company");

// const router = express.Router();

// // Generate Unique User ID
// const generateUserId = () => {
//   const year = new Date().getFullYear().toString().slice(-2); // Last two digits of year
//   const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
//   return `WE${year}${randomNum}`;
// };

// // Generate Unique Company ID
// const generateCompanyId = () => {
//   const year = new Date().getFullYear().toString().slice(-2);
//   const randomNum = Math.floor(1000 + Math.random() * 9000);
//   return `WC${year}${randomNum}`;
// };

// // Signup Route
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password, type } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email }) || await Company.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already in use." });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     if (type === "employee") {
//       const newUser = new User({
//         username,
//         email,
//         password: hashedPassword,
//         userId: generateUserId(),
//       });
//       await newUser.save();
//       return res.status(201).json({ message: "User created successfully", userId: newUser.userId });
//     } else {
//       const newCompany = new Company({
//         companyName: username,
//         email,
//         password: hashedPassword,
//         companyId: generateCompanyId(),
//       });
//       await newCompany.save();
//       return res.status(201).json({ message: "Company created successfully", companyId: newCompany.companyId });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     let user = await User.findOne({ email });
//     let company = await Company.findOne({ email });

//     if (!user && !company) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const account = user || company;
//     const isPasswordValid = await bcrypt.compare(password, account.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const token = jwt.sign({ id: account._id, type: user ? "employee" : "company" }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.status(200).json({ message: "Login successful", token, userType: user ? "employee" : "company" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Password Reset Request
// router.post("/password-reset", async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Find user or company by email
//     const user = await User.findOne({ email });
//     const company = await Company.findOne({ email });

//     if (!user && !company) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Generate reset token
//     const resetToken = crypto.randomBytes(32).toString("hex");

//     // Set token in DB
//     const account = user || company;
//     account.resetToken = resetToken;
//     account.resetTokenExpiry = Date.now() + 3600000; // 1 hour expiry
//     await account.save();

//     // Send email with reset link
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const resetLink = `https://your-frontend.com/reset-password?token=${resetToken}`;

//     await transporter.sendMail({
//       to: email,
//       subject: "Password Reset Request",
//       html: `<p>Click the link below to reset your password:</p>
//              <p><a href="${resetLink}">${resetLink}</a></p>`,
//     });

//     res.json({ message: "Password reset email sent!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Password Reset (New Password Submission)
// router.post("/reset-password", async (req, res) => {
//   try {
//     const { token, newPassword } = req.body;

//     const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });
//     const company = await Company.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

//     if (!user && !company) {
//       return res.status(400).json({ message: "Invalid or expired token" });
//     }

//     const account = user || company;
//     account.password = await bcrypt.hash(newPassword, 10);
//     account.resetToken = null;
//     account.resetTokenExpiry = null;
//     await account.save();

//     res.json({ message: "Password has been reset successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Company = require("../models/Company");

const router = express.Router();

// Generate Unique IDs
const generateUserId = () => `WE${new Date().getFullYear().toString().slice(-2)}${Math.floor(1000 + Math.random() * 9000)}`;
const generateCompanyId = () => `WC${new Date().getFullYear().toString().slice(-2)}${Math.floor(1000 + Math.random() * 9000)}`;

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, type } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email }) || await Company.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    if (type === "employee") {
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        userId: generateUserId(),
      });
      await newUser.save();
      return res.status(201).json({ message: "User created successfully", userId: newUser.userId });
    } else {
      const newCompany = new Company({
        companyName: username,
        email,
        password: hashedPassword,
        companyId: generateCompanyId(),
      });
      await newCompany.save();
      return res.status(201).json({ message: "Company created successfully", companyId: newCompany.companyId });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    let user = await User.findOne({ email });
    let company = await Company.findOne({ email });

    if (!user && !company) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const account = user || company;
    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: account._id, type: user ? "employee" : "company" }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "Login successful", token, userType: user ? "employee" : "company" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Password Reset Request
router.post("/password-reset", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    const company = await Company.findOne({ email });

    if (!user && !company) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Set token in DB
    const account = user || company;
    account.resetToken = resetToken;
    account.resetTokenExpiry = Date.now() + 3600000; // 1 hour expiry
    await account.save();

    // Email Configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `https://your-frontend.com/reset-password?token=${resetToken}`;

    await transporter.sendMail({
      to: email,
      subject: "Password Reset Request",
      html: `
        <p>You requested a password reset. Click the link below:</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    res.json({ message: "Password reset email sent!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });
    const company = await Company.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

    if (!user && !company) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const account = user || company;
    account.password = await bcrypt.hash(newPassword, 10);
    account.resetToken = null;
    account.resetTokenExpiry = null;
    await account.save();

    res.json({ message: "Password has been reset successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
