const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, required: true },
    likes: { type: Number, default: 0 }, // New field for likes
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
