const Community = require("../models/Community");

// Create a community
const createCommunity = async (req, res) => {
  try {
    const { name, description, isPrivate } = req.body;
    const newCommunity = new Community({ name, description, isPrivate });
    const savedCommunity = await newCommunity.save();
    res.status(201).json(savedCommunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all communities
const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a community by ID
const getCommunityById = async (req, res) => {
  try {
    const { id } = req.params;
    const community = await Community.findById(id);
    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }
    res.json(community);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a community
const updateCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCommunity = await Community.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true } // Return the updated document and validate it
    );

    if (!updatedCommunity) {
      return res.status(404).json({ message: "Community not found" });
    }

    res.json(updatedCommunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a community
const deleteCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCommunity = await Community.findByIdAndDelete(id);

    if (!deletedCommunity) {
      return res.status(404).json({ message: "Community not found" });
    }

    res.json({ message: "Community deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCommunity,
  getAllCommunities,
  getCommunityById,
  updateCommunity,
  deleteCommunity,
};
