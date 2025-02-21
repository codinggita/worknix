const Community = require("../models/Community");
const User = require("../models/User");

// Get all communities
exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create a new community
exports.createCommunity = async (req, res) => {
  const { name, description, isPrivate, members } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "Community name and description are required." });
  }

  try {
    const community = await Community.create({
      name,
      description,
      isPrivate,
      admin: req.user.id,
      members: [req.user.id, ...(members || [])],
    });

    res.status(201).json(community);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Join a community
exports.joinCommunity = async (req, res) => {
  const { communityId } = req.params;

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    if (community.isPrivate) {
      return res.status(403).json({ message: "You cannot join a private community without an invite." });
    }

    if (!community.members.includes(req.user.id)) {
      community.members.push(req.user.id);
      await community.save();
    }

    res.json({ message: "Successfully joined the community.", community });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Follow a community
exports.followCommunity = async (req, res) => {
  const { communityId } = req.params;

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    if (!community.followers.includes(req.user.id)) {
      community.followers.push(req.user.id);
      await community.save();
    }

    res.json({ message: "Successfully followed the community.", community });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get community details
exports.getCommunityDetails = async (req, res) => {
  const { communityId } = req.params;

  try {
    const community = await Community.findById(communityId)
      .populate("admin", "name email")
      .populate("members", "name email")
      .populate("messages");

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    res.json(community);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
