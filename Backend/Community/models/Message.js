// const mongoose = require("mongoose");

// const messageSchema = new mongoose.Schema(
//   {
//     sender: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: [true, "Sender is required"],
//     },
//     community: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Community",
//       required: [true, "Community is required"],
//     },
//     content: {
//       type: String,
//       required: [true, "Message content cannot be empty"],
//       trim: true,
//     },
//     attachments: [
//       {
//         url: String,
//         type: String, // e.g., 'image', 'video', or 'file'
//       },
//     ],
//     isPinned: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Message", messageSchema);
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Sender is required"],
    },
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      required: [true, "Community is required"],
    },
    content: {
      type: String,
      required: [true, "Message content cannot be empty"],
      trim: true,
    },
    attachments: [
      {
        url: String,
        type: String, // e.g., 'image', 'video', or 'file'
      },
    ],
    reactions: [
      {
        emoji: String, // e.g., "👍", "❤️", "😂"
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // Reference to another message
      },
    ],
    readBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isPinned: {
      type: Boolean,
      default: false,
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
