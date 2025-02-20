const express = require("express");
const multer = require("multer");
const Post = require("../models/Post");
const router = express.Router();

// Multer Configuration
const storage = multer.memoryStorage(); // Use memory storage for Base64 handling

// File filter to allow only specific media types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Invalid file type. Only JPG, JPEG, and PNG are allowed."), false); // Reject the file
  }
};

const upload = multer({ storage, fileFilter });

// Post Route
router.post("/", upload.single("media"), async (req, res) => {
  try {
    const { description } = req.body;

    if (!description || !req.file) {
      console.error("Missing fields:", { description, file: req.file });
      return res.status(400).json({ error: "Description and media file are required" });
    }

    // Convert uploaded file to Base64
    const mediaData = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    // Save to database
    const newPost = new Post({
      description,
      mediaUrl: mediaData,
      mediaType: req.file.mimetype,
    });

    await newPost.save();
    console.log("Post saved successfully:", newPost);

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error in POST /api/posts:", error.message);
    res.status(500).json({ error: error.message || "Failed to create post" });
  }
});

module.exports = router;

