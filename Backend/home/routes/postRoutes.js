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
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "video/mp4"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg, jpeg, png, and mp4 files are allowed"), false);
    }
  },
});

// POST route to create a post
router.post("/", upload.single("media"), async (req, res) => {
  try {
    console.log("Incoming Request Body:", req.body);
    console.log("Incoming File:", req.file);

    const { description } = req.body;

    // Validate fields
    if (!description || !req.file) {
      return res.status(400).json({ error: "Description and media file are required" });
    }

    // Upload file to Cloudinary
    const uploadToCloudinary = () =>
      new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: "auto", folder: "worknix_posts" },
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
    });

    await newPost.save();

    console.log("Post saved successfully:", newPost);

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
