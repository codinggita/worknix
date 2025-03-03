// const express = require("express");
// const router = express.Router();
// const {
//   createMessage,
//   getMessagesByCommunityId,
// } = require("../controllers/messageControllers");
// const { protect } = require("../middleware/authMiddleware");

// // Create a new message in a community
// router.post("/create", protect, createMessage);

// // Get messages for a specific community
// router.get("/:communityId", protect, getMessagesByCommunityId);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessagesByCommunityId,
  editMessage,
  deleteMessage,
  pinMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

// Create a new message in a community
router.post("/create", protect, createMessage);

// Get messages for a specific community (supports pagination)
router.get("/:communityId", protect, getMessagesByCommunityId);

// Edit a message (only by sender)
router.put("/:messageId", protect, editMessage);

// Delete a message (only by sender or admin)
router.delete("/:messageId", protect, deleteMessage);

// Pin/Unpin a message (only admin/moderators)
router.post("/:messageId/pin", protect, pinMessage);

module.exports = router;
