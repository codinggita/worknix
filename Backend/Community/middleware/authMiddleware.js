const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes and validate user authentication
const protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user to the request object
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found. Access denied." });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(401).json({ message: "Invalid token. Access denied.", error: error.message });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token provided. Access denied." });
  }
};

module.exports = { protect };
