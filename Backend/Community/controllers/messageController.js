const Community = require("../models/Community");
const User = require("../models/User");

// Send a message in a community
exports.sendMessage = async (req, res) => {
  const { communityId } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Message content is required." });
  }

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    const message = {
      user: req.user.id,
      content,
      timestamp: new Date(),
    };

    community.messages.push(message);
    await community.save();

    res.status(201).json({ message: "Message sent successfully.", message });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// Get all messages for a community
exports.getMessages = async (req, res) => {
  const { communityId } = req.params;

  try {
    const community = await Community.findById(communityId).populate("messages.user", "name email");

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    res.json(community.messages);
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// Delete a message (admin or sender only)
exports.deleteMessage = async (req, res) => {
  const { communityId, messageId } = req.params;

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    const message = community.messages.id(messageId);

    if (!message) {
      return res.status(404).json({ message: "Message not found." });
    }

    // Check if the user is the sender or an admin
    if (message.user.toString() !== req.user.id && community.admin.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to delete this message." });
    }

    message.remove();
    await community.save();

    res.json({ message: "Message deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};
