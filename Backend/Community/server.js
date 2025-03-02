// const express = require("express");
// const cors = require("cors"); // Import cors
// const connectDB = require("./config/db");
// const communityRoutes = require("./routes/communityRoutes");
// const dotenv = require("dotenv");

// // Explicitly load .env from the config folder
// dotenv.config({ path: "./config/.env" });

// // Connect to the database
// connectDB();

// const app = express();

// // Enable CORS
// app.use(cors());

// // Middleware to parse JSON requests
// app.use(express.json());

// // Register Community routes
// app.use("/api/communities", communityRoutes);

// // Default 404 handler
// app.use((req, res) => {
//   res.status(404).send("Route not found");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const communityRoutes = require("./routes/communityRoutes");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

// Load environment variables
dotenv.config({ path: "./config/.env" });

// Connect to the database
connectDB();

const app = express();

// Enable CORS with restrictions
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(morgan("dev")); // Logs API requests
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/communities", communityRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Default 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
