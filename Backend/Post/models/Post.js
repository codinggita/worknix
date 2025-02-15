const mongoose = require('mongoose');

// Define the Post Schema
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String, // Cloudinary URL for the uploaded media
    required: true,
  },
  mediaType: {
    type: String, // "image" or "video"
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Post model
module.exports = mongoose.model('Post', postSchema);

module.exports = mongoose.model('Post', postSchema);
