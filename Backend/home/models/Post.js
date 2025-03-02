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
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    mediaUrl: { type: String }, // Made optional
    mediaType: { type: String }, // Made optional
    user: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      name: { type: String, required: true },
    }, // ✅ Changed to store user object
    likes: { type: Number, default: 0 },
    comments: [
      {
        user: {
          id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
          name: { type: String, required: true },
        },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
