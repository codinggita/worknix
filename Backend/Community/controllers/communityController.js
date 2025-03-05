const Community = require('../models/Community');
const User = require('../models/User');

// Create a community
exports.createCommunity = async (req, res) => {
  try {
    const { name, description, profilePhoto, isPrivate, admin } = req.body;

    const community = new Community({
      name,
      description,
      profilePhoto,
      isPrivate,
      admin,
      members: [admin] // Admin is the first member
    });

    await community.save();
    res.status(201).json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a community (Admin only)
exports.deleteCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const community = await Community.findById(id);

    if (!community) return res.status(404).json({ message: 'Community not found' });

    // Check if the requester is the admin
    if (req.user.id !== community.admin.toString()) {
      return res.status(403).json({ message: 'Only the admin can delete the community' });
    }

    await Community.findByIdAndDelete(id);
    res.json({ message: 'Community deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // Add a member to a community
// exports.addMember = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     const community = await Community.findById(id);

//     if (!community) return res.status(404).json({ message: 'Community not found' });

//     if (community.members.includes(userId)) {
//       return res.status(400).json({ message: 'User is already a member' });
//     }

//     // If it's private, only admin can add members
//     if (community.isPrivate && req.user.id !== community.admin.toString()) {
//       return res.status(403).json({ message: 'Only admin can add members to a private community' });
//     }

//     community.members.push(userId);
//     await community.save();

//     res.json({ message: 'Member added successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// Add a member to a community
exports.addMember = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
  
      console.log("Community ID:", id);
      console.log("User ID to add:", userId);
      console.log("Request User:", req.user); // Check if req.user exists
  
      // Find the community by ID
      const community = await Community.findById(id);
  
      if (!community) {
        console.log("Community not found");
        return res.status(404).json({ message: 'Community not found' });
      }
  
      console.log("Community found:", community);
  
      // Check if user is already a member
      if (community.members.includes(userId)) {
        console.log("User already a member");
        return res.status(400).json({ message: 'User is already a member' });
      }
  
      // If it's private, only the admin can add members
      if (community.isPrivate) {
        console.log("Community is private. Checking admin...");
        if (!req.user || req.user.id !== community.admin.toString()) {
          console.log("Unauthorized: Only admin can add members");
          return res.status(403).json({ message: 'Only admin can add members to a private community' });
        }
      }
  
      console.log("Adding user to the community...");
      community.members.push(userId);
      await community.save();
  
      console.log("Member added successfully");
      res.json({ message: 'Member added successfully' });
    } catch (error) {
      console.log("Error:", error.message);
      res.status(500).json({ message: error.message });
    }
  };
  

// // Remove a member from a community (Admin only)
// exports.removeMember = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     const community = await Community.findById(id);

//     if (!community) return res.status(404).json({ message: 'Community not found' });

//     // Only admin can remove a member
//     if (req.user.id !== community.admin.toString()) {
//       return res.status(403).json({ message: 'Only admin can remove members' });
//     }

//     community.members = community.members.filter(member => member.toString() !== userId);
//     await community.save();

//     res.json({ message: 'Member removed successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const mongoose = require('mongoose');
const Community = require('../models/Community'); // Ensure correct model import

// Remove a member from a community (Admin only)
exports.removeMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    console.log(`Request received to remove user ${userId} from community ${id}`);

    const community = await Community.findById(id);
    
    if (!community) {
      console.log(`Community with ID ${id} not found`);
      return res.status(404).json({ message: 'Community not found' });
    }

    console.log(`Community found: ${community.name}, Admin: ${community.admin}`);

    // Only admin can remove a member
    if (req.user.id !== community.admin.toString()) {
      console.log(`Unauthorized attempt: User ${req.user.id} tried to remove a member`);
      return res.status(403).json({ message: 'Only admin can remove members' });
    }

    console.log(`Admin verified. Checking if user ${userId} is a member...`);

    if (!community.members.includes(userId)) {
      console.log(`User ${userId} is not a member of this community`);
      return res.status(400).json({ message: 'User is not a member of this community' });
    }

    console.log(`Removing user ${userId} from the community...`);
    community.members = community.members.filter(member => member.toString() !== userId);
    await community.save();

    console.log(`User ${userId} removed successfully from community ${id}`);
    res.json({ message: 'Member removed successfully' });

  } catch (error) {
    console.error(`Error removing member: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// Get public communities for explore section
exports.getCommunities = async (req, res) => {
  try {
    const communities = await Community.find({ isPrivate: false });
    res.json(communities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
