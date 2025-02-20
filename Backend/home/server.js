// require("dotenv").config(); // Load environment variables
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const postRoutes = require("./routes/postRoutes");

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors()); // Enable cross-origin requests

// // Debugging: Verify Cloudinary configuration
// console.log("Cloudinary Config Debug:", {
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // MongoDB Connection
// const mongoUri = process.env.MONGO_URI;
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));

// // Routes
// app.use("/api/posts", postRoutes);

// // Server Initialization
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path"); // Required for serving static files
const postRoutes = require("./routes/postRoutes");

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON data
app.use(cors()); // Enable cross-origin requests

// Debugging: Verify Cloudinary configuration
console.log("Cloudinary Config Debug:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Serve the 'uploads' folder as static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/posts", postRoutes);

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
