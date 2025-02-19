// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//   description: String,
//   mediaUrl: String,
//   mediaType: String, // 'image' or 'video'
//   mediaId: String, // Cloudinary file ID
//   likes: { type: Number, default: 0 },
//   comments: [{ type: String }],
// });

// module.exports = mongoose.model("Post", postSchema);
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },
  mediaId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
