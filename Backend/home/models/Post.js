const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: String,
  mediaUrl: String,
  mediaType: String,
  likes: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;

