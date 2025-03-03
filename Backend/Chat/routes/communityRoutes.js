const express = require("express");
const router = express.Router();
const { createCommunity, getAllCommunities, getUserCommunities, getTopCommunities } = require("../controllers/communityController");
const upload = require("../middlewares/upload");

// Create a Community (With Profile Photo Upload)
router.post("/create", upload.single("profilePhoto"), createCommunity);

// Get all Communities
router.get("/explore", getAllCommunities);

// Get User's Joined Communities
router.get("/user/:userId", getUserCommunities);

// Get Top Followed Communities
router.get("/top", getTopCommunities);

module.exports = router;
