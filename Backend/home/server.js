const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoUri = "mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/worknix?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>
  console.log("Connected to MongoDB Atlas")
);

// API Routes
app.use("/api/posts", postRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
