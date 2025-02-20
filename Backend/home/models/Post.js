const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String, // Store Base64 string
    required: true,
  },
  mediaType: {
    type: String, // e.g., "image/jpeg"
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
