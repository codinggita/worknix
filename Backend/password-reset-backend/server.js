// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const passwordResetRoutes = require("./passwordResetRoutes");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to Password Reset DB"))
//     .catch(err => console.error(err));

// app.use("/api/password-reset", passwordResetRoutes);

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Password Reset Server running on port ${PORT}`));
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passwordResetRoutes = require("./passwordResetRoutes");

const app = express();

// Enable CORS with specific settings
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend requests
    methods: "GET, POST, PUT, DELETE", // Allowed HTTP methods
    credentials: true, // If using cookies or authentication
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Password Reset DB"))
  .catch((err) => console.error(err));

app.use("/api/password-reset", passwordResetRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Password Reset Server running on port ${PORT}`));
