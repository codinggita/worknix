const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const upload = require('../multer');

// @route   POST /api/posts
// @desc    Upload a new post with media
router.post('/', upload.single('media'), async (req, res) => {
  const { content, author } = req.body;

  if (!content || !author || !req.file) {
    return res.status(400).json({ error: 'Content, author, and media are required' });
  }

  try {
    const newPost = new Post({
      content,
      mediaUrl: req.file.path, // Cloudinary URL
      mediaType: req.file.mimetype.startsWith('image') ? 'image' : 'video',
      author,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
