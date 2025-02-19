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

import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const AddPost = ({ onClose, fetchPosts }) => {
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mediaPreview, setMediaPreview] = useState(null);

  // Handle media upload (file selected by user)
  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMedia(file);
      setMediaPreview(URL.createObjectURL(file)); // Preview uploaded file
    }
  };

  // Handle form submission for adding post
  const handleAddPost = async () => {
    if (!description || !media) return; // Ensure both description and media are present

    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append("description", description);
    formData.append("media", media);

    // Get the authentication token (from localStorage or state)
    const token = localStorage.getItem("authToken"); // Example token retrieval

    try {
      // Sending post request to backend
      const response = await axios.post(
        "https://worknix-addpost.onrender.com/api/posts", // Backend URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Send token with the request if needed
          },
        }
      );

      const newPost = response.data.post;
      if (fetchPosts) fetchPosts(); // Refresh the list of posts
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to upload post. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Add New Post
        </Typography>

        <TextField
          fullWidth
          label="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />

        {/* Media Upload Button */}
        <Button
          variant="outlined"
          component="label"
          sx={{ width: "100%", marginBottom: "16px" }}
        >
          Upload Photo/Video
          <input
            type="file"
            accept="image/*, video/*"
            hidden
            onChange={handleMediaUpload}
          />
        </Button>

        {/* Media Preview (Image or Video) */}
        {mediaPreview && (
          <Box
            sx={{
              marginBottom: "16px",
              height: "150px",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            {media?.type?.includes("video") ? (
              <video src={mediaPreview} controls style={{ width: "100%" }} />
            ) : (
              <img src={mediaPreview} alt="Preview" style={{ width: "100%" }} />
            )}
          </Box>
        )}

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPost}
            disabled={!description || !media || isLoading}
          >
            {isLoading ? "Uploading..." : "Add Post"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPost;
