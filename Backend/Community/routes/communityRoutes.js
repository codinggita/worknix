const express = require("express");
const {
  createCommunity,
  getAllCommunities,
  getCommunityById,
  updateCommunity,
  deleteCommunity,
} = require("../controllers/communityController");

const router = express.Router();

// Create a community
router.post("/", createCommunity);

// Get all communities
router.get("/", getAllCommunities);

// Get a community by ID
router.get("/:id", getCommunityById);

// Update a community
router.put("/:id", updateCommunity);

// Delete a community
router.delete("/:id", deleteCommunity);

module.exports = router;
