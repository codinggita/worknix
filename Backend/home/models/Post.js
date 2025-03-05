// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     description: { type: String, required: true },
//     mediaUrl: { type: String, required: true },
//     mediaType: { type: String, required: true },
//     likes: { type: Number, default: 0 },
//     comments: [
//       {
//         user: { type: String, required: true },
//         text: { type: String, required: true },
//         createdAt: { type: Date, default: Date.now },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const Post = mongoose.model("Post", postSchema);

// module.exports = Post;
// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     user: { type: String, required: true }, // Store the username of the user who created the post
//     description: { type: String, required: true },
//     mediaUrl: { type: String, required: true },
//     mediaType: { type: String, required: true },
//     likes: { type: Number, default: 0 },
//     comments: [
//       {
//         user: { type: String, required: true }, // Store the username of the user who commented
//         text: { type: String, required: true },
//         createdAt: { type: Date, default: Date.now },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const Post = mongoose.model("Post", postSchema);

// module.exports = Post;
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: [
      {
        user: { type: String, required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
