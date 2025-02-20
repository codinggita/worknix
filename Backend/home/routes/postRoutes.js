const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Post = require("../models/Post");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "video/mp4",
      "audio/mpeg", // MIME type for MP3
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg, jpeg, png, mp4, and mp3 files are allowed"), false);
    }
  },
});

// POST route to create a post
router.post("/", upload.single("media"), async (req, res) => {
  try {
    const { description } = req.body;

    if (!description || !req.file) {
      return res.status(400).json({ error: "Description and media file are required" });
    }

    // Upload file to Cloudinary
    const uploadToCloudinary = () =>
      new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: "auto", folder: "worknix_posts" }, // `auto` detects file type (image, video, or audio)
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file.buffer);
      });

    const cloudinaryResult = await uploadToCloudinary();

    // Save post to database
    const newPost = new Post({
      description,
      mediaUrl: cloudinaryResult.secure_url,
      mediaType: req.file.mimetype,
      likes: 0, // Initialize likes as 0
    });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// PATCH route to like a post
router.patch("/:id/like", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the post by ID and increment likes
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } }, // Increment likes by 1
      { new: true } // Return the updated document
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error liking post:", error.message);
    res.status(500).json({ error: "Failed to like the post" });
  }
});

// GET route to fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

module.exports = router;
