const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Setup for file uploads with multer
const upload = multer({
  dest: 'uploads/', // Directory for uploaded files
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size: 5MB
});

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (uploaded media)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API route for adding posts
app.post('/api/posts', upload.single('media'), (req, res) => {
  const { description } = req.body;
  const media = req.file;

  if (!description || !media) {
    return res.status(400).json({ error: 'Description and media file are required.' });
  }

  const mediaUrl = `/uploads/${media.filename}`; // Path to uploaded file
  const newPost = {
    id: Date.now(),
    description,
    mediaUrl,
  };

  // Respond with the new post details
  res.status(201).json(newPost);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
