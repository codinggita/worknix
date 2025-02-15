import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AddPost = ({ onClose, onAddPost }) => {
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMedia(file);
      setMediaPreview(URL.createObjectURL(file)); // Preview for uploaded file
    }
  };

  const handleAddPost = () => {
    if (description && media) {
      const newPost = {
        id: Date.now(),
        description,
        image: mediaPreview,
        time: 'Just now',
        user: 'You',
        avatar: '/static/avatar.png',
        likes: '0',
      };
      onAddPost(newPost);
      onClose();
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '16px' }}>
          Add New Post
        </Typography>

        <TextField
          fullWidth
          label="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />

        {/* Media Upload */}
        <Button
          variant="outlined"
          component="label"
          sx={{ width: '100%', marginBottom: '16px' }}
        >
          Upload Photo/Video
          <input
            type="file"
            accept="image/*, video/*"
            hidden
            onChange={handleMediaUpload}
          />
        </Button>

        {mediaPreview && (
          <Box
            sx={{
              marginBottom: '16px',
              height: '150px',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            {media.type?.includes('video') ? (
              <video src={mediaPreview} controls style={{ width: '100%' }} />
            ) : (
              <img src={mediaPreview} alt="Preview" style={{ width: '100%' }} />
            )}
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPost}
            disabled={!description || !media}
          >
            Add Post
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPost;
