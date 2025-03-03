// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const postRoutes = require("./routes/postRoutes");

// const app = express();

// // Middleware
// app.use(express.json({ limit: "50mb" })); // For JSON payloads
// app.use(express.urlencoded({ extended: true, limit: "50mb" })); // For URL-encoded form data
// app.use(cors()); // Enable CORS

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));

// // Routes
// app.use("/api/posts", postRoutes);

// // Server Initialization
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");

const app = express();

// Middleware
app.use(express.json({ limit: "50mb" })); // JSON parsing
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // URL-encoded form data

// CORS Configuration (More Secure)
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // Allow frontend domain
    credentials: true, // Allow cookies if needed
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// Handle connection errors after initial connection
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB Runtime Error:", err);
});

// Routes
app.use("/api/posts", postRoutes);

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on http://localhost:${PORT}`);
});
