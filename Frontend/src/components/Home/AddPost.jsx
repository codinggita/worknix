// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import axios from 'axios'; // Import axios for API calls

// const AddPost = ({ onClose, onAddPost }) => {
//   const [description, setDescription] = useState('');
//   const [media, setMedia] = useState(null);
//   const [mediaPreview, setMediaPreview] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // Loading state

//   const handleMediaUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setMedia(file);
//       setMediaPreview(URL.createObjectURL(file)); // Preview for uploaded file
//     }
//   };

//   const handleAddPost = async () => {
//     if (!description || !media) return;

//     setIsLoading(true); // Start loading

//     const formData = new FormData();
//     formData.append('description', description);
//     formData.append('media', media);

//     try {
//       // Replace `/api/posts` with your actual backend endpoint
//       const response = await axios.post('/api/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Assuming the backend responds with the newly created post
//       const newPost = response.data;
//       onAddPost(newPost); // Update posts in the frontend
//       onClose(); // Close the modal
//     } catch (error) {
//       console.error('Error uploading post:', error);
//       alert('Failed to upload post. Please try again.');
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <Box
//         sx={{
//           background: '#fff',
//           padding: '20px',
//           borderRadius: '8px',
//           width: '400px',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h6" sx={{ marginBottom: '16px' }}>
//           Add New Post
//         </Typography>

//         <TextField
//           fullWidth
//           label="Post Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           margin="normal"
//         />

//         {/* Media Upload */}
//         <Button
//           variant="outlined"
//           component="label"
//           sx={{ width: '100%', marginBottom: '16px' }}
//         >
//           Upload Photo/Video
//           <input
//             type="file"
//             accept="image/*, video/*"
//             hidden
//             onChange={handleMediaUpload}
//           />
//         </Button>

//         {mediaPreview && (
//           <Box
//             sx={{
//               marginBottom: '16px',
//               height: '150px',
//               overflow: 'hidden',
//               borderRadius: '8px',
//             }}
//           >
//             {media.type?.includes('video') ? (
//               <video src={mediaPreview} controls style={{ width: '100%' }} />
//             ) : (
//               <img src={mediaPreview} alt="Preview" style={{ width: '100%' }} />
//             )}
//           </Box>
//         )}

//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button variant="outlined" onClick={onClose} disabled={isLoading}>
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddPost}
//             disabled={!description || !media || isLoading}
//           >
//             {isLoading ? 'Uploading...' : 'Add Post'}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AddPost;



// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import axios from 'axios';

// const AddPost = ({ onClose, fetchPosts }) => {
//   const [description, setDescription] = useState('');
//   const [media, setMedia] = useState(null);
//   const [mediaPreview, setMediaPreview] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle media upload (file selected by user)
//   const handleMediaUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setMedia(file);
//       setMediaPreview(URL.createObjectURL(file)); // Preview uploaded file
//     }
//   };

//   // Handle form submission for adding post
//   const handleAddPost = async () => {
//     if (!description || !media) return; // Ensure both description and media are present

//     setIsLoading(true); // Start loading

//     const formData = new FormData();
//     formData.append('description', description);
//     formData.append('media', media);

//     try {
//       // Sending post request to backend (replace URL as needed)
//       const response = await axios.post('/api/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const newPost = response.data; // Get the newly created post data
//       fetchPosts(); // Update the posts in frontend (refresh the list)
//       onClose(); // Close the modal after adding post
//     } catch (error) {
//       console.error('Error uploading post:', error);
//       alert('Failed to upload post. Please try again.');
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <Box
//         sx={{
//           background: '#fff',
//           padding: '20px',
//           borderRadius: '8px',
//           width: '400px',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h6" sx={{ marginBottom: '16px' }}>
//           Add New Post
//         </Typography>

//         <TextField
//           fullWidth
//           label="Post Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           margin="normal"
//         />

//         {/* Media Upload Button */}
//         <Button
//           variant="outlined"
//           component="label"
//           sx={{ width: '100%', marginBottom: '16px' }}
//         >
//           Upload Photo/Video
//           <input
//             type="file"
//             accept="image/*, video/*"
//             hidden
//             onChange={handleMediaUpload}
//           />
//         </Button>

//         {/* Media Preview (Image or Video) */}
//         {mediaPreview && (
//           <Box
//             sx={{
//               marginBottom: '16px',
//               height: '150px',
//               overflow: 'hidden',
//               borderRadius: '8px',
//             }}
//           >
//             {media.type?.includes('video') ? (
//               <video src={mediaPreview} controls style={{ width: '100%' }} />
//             ) : (
//               <img src={mediaPreview} alt="Preview" style={{ width: '100%' }} />
//             )}
//           </Box>
//         )}

//         {/* Action Buttons */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button variant="outlined" onClick={onClose} disabled={isLoading}>
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddPost}
//             disabled={!description || !media || isLoading}
//           >
//             {isLoading ? 'Uploading...' : 'Add Post'}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AddPost;





// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import axios from 'axios';

// const AddPost = ({ onClose, fetchPosts }) => {
//   const [description, setDescription] = useState('');
//   const [media, setMedia] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [mediaPreview, setMediaPreview] = useState(null);

//   // Handle media upload (file selected by user)
//   const handleMediaUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setMedia(file);
//       setMediaPreview(URL.createObjectURL(file)); // Preview uploaded file
//     }
//   };

//   // Handle form submission for adding post
//   const handleAddPost = async () => {
//     if (!description || !media) return; // Ensure both description and media are present

//     setIsLoading(true); // Start loading

//     const formData = new FormData();
//     formData.append('description', description);
//     formData.append('media', media);

//     // Get the authentication token (from localStorage or state)
//     const token = localStorage.getItem('authToken');  // Example token retrieval

//     try {
//       // Sending post request to backend (replace URL as needed)
//       const response = await axios.post('/api/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`, // Send token with the request
//         },
//       });

//       const newPost = response.data.post;
//       fetchPosts(); // Refresh the list of posts
//       onClose(); // Close the modal
//     } catch (error) {
//       console.error('Error uploading post:', error);
//       alert('Failed to upload post. Please try again.');
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <Box
//         sx={{
//           background: '#fff',
//           padding: '20px',
//           borderRadius: '8px',
//           width: '400px',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h6" sx={{ marginBottom: '16px' }}>
//           Add New Post
//         </Typography>

//         <TextField
//           fullWidth
//           label="Post Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           margin="normal"
//         />

//         {/* Media Upload Button */}
//         <Button
//           variant="outlined"
//           component="label"
//           sx={{ width: '100%', marginBottom: '16px' }}
//         >
//           Upload Photo/Video
//           <input
//             type="file"
//             accept="image/*, video/*"
//             hidden
//             onChange={handleMediaUpload}
//           />
//         </Button>

//         {/* Media Preview (Image or Video) */}
//         {mediaPreview && (
//           <Box
//             sx={{
//               marginBottom: '16px',
//               height: '150px',
//               overflow: 'hidden',
//               borderRadius: '8px',
//             }}
//           >
//             {media.type?.includes('video') ? (
//               <video src={mediaPreview} controls style={{ width: '100%' }} />
//             ) : (
//               <img src={mediaPreview} alt="Preview" style={{ width: '100%' }} />
//             )}
//           </Box>
//         )}

//         {/* Action Buttons */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button variant="outlined" onClick={onClose} disabled={isLoading}>
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddPost}
//             disabled={!description || !media || isLoading}
//           >
//             {isLoading ? 'Uploading...' : 'Add Post'}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AddPost;




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
        "https://worknix-addpost.onrender.com/api/posts", // Replace with backend URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Send token with the request if needed
          },
        }
      );

      const newPost = response.data.post;
      fetchPosts(); // Refresh the list of posts
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
            {media.type?.includes("video") ? (
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
