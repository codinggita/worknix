import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  IconButton,
  TextField,
  Typography,
} from "@mui/joy";
import { Favorite, FavoriteBorder, ModeCommentOutlined, MoreHoriz } from "@mui/icons-material";

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://worknix-addpost.onrender.com/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle like button click
  const handleLike = async (postId) => {
    try {
      const response = await axios.patch(`https://worknix-addpost.onrender.com/api/posts/${postId}/like`);
      const updatedPost = response.data;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        )
      );
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  // Handle comment submission
  const handleCommentSubmit = async (postId) => {
    try {
      const response = await axios.post(
        `https://worknix-addpost.onrender.com/api/posts/${postId}/comment`,
        {
          user: "Anonymous", // Replace with actual user info if available
          text: commentText[postId],
        }
      );

      const updatedPost = response.data;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        )
      );

      // Clear comment text
      setCommentText((prev) => ({ ...prev, [postId]: "" }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Toggle comment box visibility
  const toggleCommentBox = (postId) => {
    setShowCommentBox((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Handle input change for comments
  const handleCommentChange = (postId, value) => {
    setCommentText((prev) => ({ ...prev, [postId]: value }));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        overflowY: "auto",
        p: 2,
        backgroundColor: "#f4f4f4",
      }}
    >
      {posts.map((post) => (
        <Box key={post._id} sx={{ width: "100%", maxWidth: 600, mb: 3 }}>
          <Card
            variant="outlined"
            sx={{
              "--Card-radius": (theme) => theme.vars.radius.md,
              borderColor: "#008080",
            }}
          >
            {/* Header */}
            <CardContent orientation="horizontal" sx={{ alignItems: "center", gap: 1 }}>
              <Avatar
                src={post.userAvatar || "/static/logo.png"} // Fallback avatar
                sx={{
                  border: "2px solid #008080",
                  p: 0.5,
                }}
              />
              <Typography fontWeight="lg" sx={{ color: "#008080" }}>
                {post.user || "Anonymous"}
              </Typography>
              <IconButton
                variant="plain"
                size="sm"
                sx={{ ml: "auto", color: "#008080" }}
              >
                <MoreHoriz />
              </IconButton>
            </CardContent>

            {/* Media */}
            <CardOverflow>
              <AspectRatio>
                {post.mediaType === "video/mp4" ? (
                  <video src={post.mediaUrl} controls />
                ) : post.mediaType === "audio/mpeg" ? (
                  <audio src={post.mediaUrl} controls />
                ) : (
                  <img src={post.mediaUrl} alt="Post" />
                )}
              </AspectRatio>
            </CardOverflow>

            {/* Like & Comment */}
            <CardContent orientation="horizontal" sx={{ alignItems: "center", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <IconButton
                  onClick={() => handleLike(post._id)}
                  sx={{
                    color: post.likes > 0 ? "red" : "#008080",
                  }}
                >
                  {post.likes > 0 ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Typography>{post.likes || 0}</Typography>
              </Box>
              <IconButton
                onClick={() => toggleCommentBox(post._id)}
                sx={{ color: "#008080" }}
              >
                <ModeCommentOutlined />
              </IconButton>
            </CardContent>

            {/* Description */}
            <CardContent>
              <Typography sx={{ fontSize: "sm", color: "#008080", mb: 1 }}>
                <strong>{post.user || "Anonymous"}:</strong> {post.description}
              </Typography>

              {/* Comment Section */}
              {showCommentBox[post._id] && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    placeholder="Add a comment..."
                    value={commentText[post._id] || ""}
                    onChange={(e) => handleCommentChange(post._id, e.target.value)}
                    sx={{ mb: 1 }}
                  />
                  <Button
                    onClick={() => handleCommentSubmit(post._id)}
                    variant="solid"
                    sx={{ backgroundColor: "#008080", color: "#fff" }}
                  >
                    Post Comment
                  </Button>
                </Box>
              )}

              {/* Display Comments */}
              <Box sx={{ mt: 2 }}>
                {post.comments.map((comment, index) => (
                  <Typography
                    key={index}
                    sx={{ fontSize: "sm", color: "#008080", mb: 1 }}
                  >
                    <strong>{comment.user}:</strong> {comment.text}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default InstagramPosts;
