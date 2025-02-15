// import InstagramPosts from './InstagramPost';
// import NavigationBar from '../Common/NavigationBar';
// import { Box } from '@mui/material';

// const Home = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         height: '100vh',
//       }}
//     >
//       {/* Fixed Navigation Bar */}
//       <Box
//         sx={{
//           width: '250px',
//           height: 'calc(100vh + 30px)',
//           position: 'fixed',
//           left: 0,
//           top: -30,
//           bgcolor: '#f0f0f0',
//           borderRight: '1px solid #ddd',
//           p: 2,
//         }}
//       >
//         <NavigationBar />
//       </Box>

//       {/* Scrollable Instagram Posts */}
//       <Box
//         sx={{
//           marginLeft: '250px',
//           flex: 1,
//           overflowY: 'auto',
//           height: '100vh',
//           p: 2,
//         }}
//       >
//         <InstagramPosts />
//       </Box>
//     </Box>
//   );
// };

// export default Home;


// import InstagramPosts from './InstagramPost';
// import NavigationBar from '../Common/NavigationBar';
// import Searchbar from '../Common/Searchbar';
// import { Box } from '@mui/material';

// const Home = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         height: '100vh',
//         bgcolor: '#F5FAFF', // Set background color for the entire layout
//       }}
//     >
//       {/* Left-Side Navigation Bar */}
//       <Box
//         sx={{
//           width: '250px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//             marginLeft: '', tems: 'center',
       
//           position: 'fixed', // Stick to the left edge
//           top: 0,
//           left: 0,
//           bottom: 0, // Stretch from top to bottom
//         }}
//       >
//         <NavigationBar />
//       </Box>

//       {/* Right-Side Content */}
//       <Box
//         sx={{
//           flex: 1,
//           marginLeft: '80px', // Offset to account for fixed navbar width
//           display: 'flex',
//           flexDirection: 'column',
//           overflowY: 'auto',
//           bgcolor: '#F5FAFF', // Right-side background color
//         }}
//       >
//         {/* Top Searchbar */}
//         <Box
//           sx={{
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '16px 0',
//             borderBottom: '1px solid #ddd',
//             position: 'sticky',
//             top: 0,
//             bgcolor: '#fff', // Background for the search bar
//             zIndex: 10,
//           }}
//         >
//           <Searchbar />
//         </Box>

//         {/* Posts Section */}
//         <Box
//           sx={{
//             flex: 1,
//             padding: '24px',
//           }}
//         >
//           <InstagramPosts />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import InstagramPosts from './InstagramPost';
import NavigationBar from '../Common/NavigationBar';
import Searchbar from '../Common/Searchbar';
import AddPost from './AddPost';
import { Box } from '@mui/material';

const Home = () => {
  const [isAddPostOpen, setIsAddPostOpen] = useState(false); // State to handle modal visibility
  const [posts, setPosts] = useState([]); // State to store posts

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add the new post to the posts array
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: '#F5FAFF', // Uniform background color
      }}
    >
      {/* Left-Side Navigation Bar */}
      <Box
        sx={{
         left:'0px',
          width: '250px',
          position: 'fixed',
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#F5FAFF', // Same background color
        }}
      >
        <NavigationBar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          marginLeft: '80px',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#F5FAFF', // Same background color
        }}
      >
        {/* Top Searchbar Box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // Space between search bar and button
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '16px', // Add space around the box
            bgcolor: '#fff', // White box background
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add slight shadow for box
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Searchbar />
          </Box>
          <button
            style={{
              padding: '8px 16px',
              background: '#008080',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '16px', // Space between search bar and button
            }}
            onClick={() => setIsAddPostOpen(true)} // Open the modal
          >
            Add Post
          </button>
        </Box>

        {/* Posts */}
        <Box sx={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          <InstagramPosts posts={posts} />
        </Box>
      </Box>

      {/* Add Post Modal */}
      {isAddPostOpen && (
        <AddPost
          onClose={() => setIsAddPostOpen(false)}
          onAddPost={handleAddPost}
        />
      )}
    </Box>
  );
};

export default Home;
