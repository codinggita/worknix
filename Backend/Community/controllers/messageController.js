import Message from '../models/Message.js';
import Community from '../models/Community.js';

export const sendMessage = async (req, res) => {
  try {
    const { communityId, content } = req.body;
    const senderId = req.user.id;

    const community = await Community.findById(communityId);
    if (!community) return res.status(404).json({ message: "Community not found" });

    if (!community.admins.includes(senderId) && !community.vipUsers.includes(senderId)) {
      return res.status(403).json({ message: "You are not allowed to send messages" });
    }

    const message = new Message({ community: communityId, sender: senderId, content });
    await message.save();
    
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
