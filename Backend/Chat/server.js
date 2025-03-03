require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const communityRoutes = require("./routes/communityRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/communities", communityRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
