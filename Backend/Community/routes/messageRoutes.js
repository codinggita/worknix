const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessagesByCommunityId,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

// Create a new message in a community
router.post("/create", protect, createMessage);

// Get messages for a specific community
router.get("/:communityId", protect, getMessagesByCommunityId);

module.exports = router;
