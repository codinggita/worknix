const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: String,
  mediaUrl: String,
  mediaType: String, // 'image' or 'video'
  mediaId: String, // Cloudinary file ID
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
});

module.exports = mongoose.model("Post", postSchema);
