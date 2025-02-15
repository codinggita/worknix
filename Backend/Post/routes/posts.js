const express = require('express');
const router = express.Router();
const multer = require('multer'); // Middleware for handling file uploads
const cloudinary = require('cloudinary').v2; // Cloudinary SDK
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer and Cloudinary Storage Setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'social-media-posts', // Cloudinary folder name
    allowed_formats: ['jpg', 'png', 'jpeg'], // File formats
  },
});

const upload = multer({ storage: storage });

// Posts array for testing
let posts = [];

// POST: Create a new post with an image
router.post('/', upload.single('image'), (req, res) => {
  const { content, author } = req.body;

  if (!content || !author) {
    return res.status(400).json({ error: 'Content and author are required' });
  }

  // Check if image was uploaded and retrieve its Cloudinary URL
  const imageUrl = req.file ? req.file.path : null;

  // Create a new post object
  const newPost = {
    id: posts.length + 1, // Simple ID generation for example purposes
    content,
    author,
    imageUrl, // Add the Cloudinary image URL
    createdAt: new Date(),
  };

  // Add the new post to the array
  posts.push(newPost);

  // Respond with the created post
  res.status(201).json({
    message: 'Post created successfully',
    data: newPost,
  });
});

module.exports = router;
