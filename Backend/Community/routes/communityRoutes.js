// const express = require("express");
// const {
//   createCommunity,
//   getAllCommunities,
//   getCommunityById,
//   updateCommunity,
//   deleteCommunity,
// } = require("../controllers/communityController");

// const router = express.Router();

// // Create a community
// router.post("/", createCommunity);

// // Get all communities
// router.get("/", getAllCommunities);

// // Get a community by ID
// router.get("/:id", getCommunityById);

// // Update a community
// router.put("/:id", updateCommunity);

// // Delete a community
// router.delete("/:id", deleteCommunity);

// module.exports = router;
const express = require("express");
const {
  createCommunity,
  getAllCommunities,
  getCommunityById,
  updateCommunity,
  deleteCommunity,
  joinCommunity,
  leaveCommunity,
  getMyCommunities,
} = require("../controllers/communityController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a community (protected route)
router.post("/", protect, createCommunity);

// Get all communities (pagination optional)
router.get("/", getAllCommunities);

// Get my joined communities (protected)
router.get("/my-communities", protect, getMyCommunities);

// Get a community by ID
router.get("/:id", getCommunityById);

// Update a community (only admin or creator)
router.put("/:id", protect, updateCommunity);

// Delete a community (only admin or creator)
router.delete("/:id", protect, deleteCommunity);

// Join a community
router.post("/:id/join", protect, joinCommunity);

// Leave a community
router.post("/:id/leave", protect, leaveCommunity);

module.exports = router;
