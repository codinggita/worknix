const mongoose = require("mongoose");
const Community = require("../models/Community");

exports.createCommunity = async (req, res) => {
  try {
    const { name, description, private, members, admins } = req.body;
    let profilePhoto = req.file ? req.file.path : null;

    // Convert members and admins to ObjectId
    const formattedMembers = members ? members.map(id => new mongoose.Types.ObjectId(id)) : [];
    const formattedAdmins = admins ? admins.map(id => new mongoose.Types.ObjectId(id)) : [];

    const newCommunity = new Community({
      name,
      description,
      profilePhoto,
      private,
      members: formattedMembers,
      admins: formattedAdmins,
    });

    await newCommunity.save();
    res.status(201).json({ message: "Community created successfully", community: newCommunity });
  } catch (error) {
    console.error("Error creating community:", error);
    res.status(500).json({ message: "Error creating community", error });
  }
};

// Get All Communities
exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find().populate("members admins", "name email");
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching communities", error });
  }
};

// Get User's Joined Communities
exports.getUserCommunities = async (req, res) => {
  try {
    const { userId } = req.params;
    const communities = await Community.find({ members: userId }).populate("members admins", "name email");
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user communities", error });
  }
};

// Get Top Followed Communities
exports.getTopCommunities = async (req, res) => {
  try {
    const topCommunities = await Community.find().sort({ "members.length": -1 }).limit(5);
    res.status(200).json(topCommunities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching top communities", error });
  }
};
