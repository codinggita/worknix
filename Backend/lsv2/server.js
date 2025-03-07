// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // CORS Configuration (for local + future deployment)
// const allowedOrigins = ["http://localhost:5173", "https://your-deployed-frontend.com"];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

// // MongoDB Connection with Error Handling
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((error) => {
//     console.error("❌ Failed to connect to MongoDB:", error.message);
//     process.exit(1); // Stop server on failure
//   });

// // Routes
// app.use("/auth", authRoutes);
// app.get("/", (req, res) => res.send("Welcome to Worknix API!"));

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong!", error: err.message });
// });

// // Start Server
// const PORT = process.env.PORT || 8001;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const allowedOrigins = ["http://localhost:5173", "https://your-frontend.com"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  });

// Routes
app.use("/auth", authRoutes);
app.get("/", (req, res) => res.send("Welcome to Worknix API!"));

// Debug Route (Check if backend is working)
app.get("/auth/test", (req, res) => {
  res.json({ message: "Auth route is working!" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Start Server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
