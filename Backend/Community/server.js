const express = require("express");
const cors = require("cors"); // Import cors
const connectDB = require("./config/db");
const communityRoutes = require("./routes/communityRoutes");
const dotenv = require("dotenv");

// Explicitly load .env from the config folder
dotenv.config({ path: "./config/.env" });

// Connect to the database
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Register Community routes
app.use("/api/communities", communityRoutes);

// Default 404 handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
