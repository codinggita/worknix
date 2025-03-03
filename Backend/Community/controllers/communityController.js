import Community from '../models/Community.js';
import User from '../models/User.js';
import sendEmail from '../utils/emailService.js';

// Create Community
export const createCommunity = async (req, res) => {
  try {
    const { name, description, isPrivate } = req.body;
    const adminId = req.user.id;

    const community = new Community({ 
      name, description, isPrivate, 
      admins: [adminId], 
      members: [adminId] 
    });

    await community.save();
    res.status(201).json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Invite User (Admin Only)
export const inviteUser = async (req, res) => {
  try {
    const { email, communityId } = req.body;
    const adminId = req.user.id;

    const community = await Community.findById(communityId);
    if (!community.admins.includes(adminId)) {
      return res.status(403).json({ message: "Only admins can invite users" });
    }

    sendEmail(email, `You are invited to join ${community.name}`, "Click the link to join...");
    res.status(200).json({ message: "Invitation sent" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Make User VIP (Admin Only)
export const makeVIP = async (req, res) => {
  try {
    const { userId, communityId } = req.body;
    const adminId = req.user.id;

    const community = await Community.findById(communityId);
    if (!community.admins.includes(adminId)) {
      return res.status(403).json({ message: "Only admins can make VIPs" });
    }

    if (!community.vipUsers.includes(userId)) {
      community.vipUsers.push(userId);
      await community.save();
    }

    res.status(200).json({ message: "User is now VIP" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
