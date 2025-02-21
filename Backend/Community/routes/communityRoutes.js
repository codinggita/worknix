const express = require("express");
const router = express.Router();
const {
  getAllCommunities,
  createCommunity,
  joinCommunity,
  followCommunity,
  getCommunityDetails,
} = require("../controllers/communityController");
const { protect } = require("../middleware/authMiddleware"); // Assuming you have authMiddleware.js for authentication

// Route to get all communities
router.get("/all", protect, getAllCommunities);

// Route to create a community
router.post("/create", protect, createCommunity);

// Route to join a community
router.post("/:communityId/join", protect, joinCommunity);

// Route to follow a community
router.post("/:communityId/follow", protect, followCommunity);

// Route to get details of a specific community
router.get("/:communityId", protect, getCommunityDetails);

module.exports = router;
