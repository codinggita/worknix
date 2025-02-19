// const express = require("express");
// const multer = require("multer");
// const { v2: cloudinary } = require("cloudinary");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const Post = require("../models/Post");

// const router = express.Router();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Multer with Cloudinary Storage
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "instagram-clone",
//     allowed_formats: ["jpg", "jpeg", "png", "mp4"],
//   },
// });

// const upload = multer({ storage });

// // Upload a Post
// router.post("/", upload.single("media"), async (req, res) => {
//   try {
//     const { description } = req.body;

//     const newPost = new Post({
//       description,
//       mediaUrl: req.file.path,
//       mediaType: req.file.mimetype.includes("video") ? "video" : "image",
//       mediaId: req.file.filename,
//     });

//     await newPost.save();

//     res.status(200).json({ message: "Post uploaded successfully!", post: newPost });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to upload post", error });
//   }
// });

// // Get All Posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch posts", error });
//   }
// });

// // Delete a Post
// router.delete("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) return res.status(404).json({ message: "Post not found" });

//     await cloudinary.uploader.destroy(post.mediaId);
//     await Post.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: "Post deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete post", error });
//   }
// });

// module.exports = router;


const express = require("express");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Post = require("../models/Post");

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Debug Cloudinary Config
console.log("Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "*****" : undefined,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "*****" : undefined,
});

// Multer with Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "worknix",
    allowed_formats: ["jpg", "jpeg", "png", "mp4"],
  },
});

const upload = multer({ storage });

// Upload a Post
router.post("/", upload.single("media"), async (req, res) => {
  try {
    const { description } = req.body;

    // Debug uploaded file and description
    console.log("Uploaded File:", req.file);
    console.log("Description:", description);

    if (!req.file) {
      return res.status(400).json({ message: "Media file is required." });
    }

    const newPost = new Post({
      description,
      mediaUrl: req.file.path,
      mediaType: req.file.mimetype.includes("video") ? "video" : "image",
      mediaId: req.file.filename,
    });

    await newPost.save();

    res.status(200).json({ message: "Post uploaded successfully!", post: newPost });
  } catch (error) {
    console.error("Error while uploading post:", error);
    res.status(500).json({ message: "Failed to upload post", error });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error });
  }
});

// Delete a Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await cloudinary.uploader.destroy(post.mediaId);
    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error("Error while deleting post:", error);
    res.status(500).json({ message: "Failed to delete post", error });
  }
});

module.exports = router;

