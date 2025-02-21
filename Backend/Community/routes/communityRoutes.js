const express = require("express");
const router = express.Router();
const {
  createCommunity,
  getAllCommunities,
  getCommunityById,
  joinCommunity,
  followCommunity,
  getCommunityMessages,
  sendMessage,
} = require("../controllers/communityControllers");
const { protect } = require("../middleware/authMiddleware");

// Create a new community
router.post("/create", protect, createCommunity);

// Get all public communities
router.get("/all", protect, getAllCommunities);

// Get a single community by ID
router.get("/:id", protect, getCommunityById);

// Join a community
router.post("/:id/join", protect, joinCommunity);

// Follow a community
router.post("/:id/follow", protect, followCommunity);

// Get messages of a community
router.get("/:id/messages", protect, getCommunityMessages);

// Send a message in a community
router.post("/:id/messages", protect, sendMessage);

module.exports = router;
