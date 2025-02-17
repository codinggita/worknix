// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Link from '@mui/joy/Link';
// import IconButton from '@mui/joy/IconButton';
// import Input from '@mui/joy/Input';
// import Typography from '@mui/joy/Typography';
// import Grid from '@mui/material/Grid';
// import MoreHoriz from '@mui/icons-material/MoreHoriz';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
// import Face from '@mui/icons-material/Face';

// export default function InstagramPosts() {
//   const [posts, setPosts] = React.useState([]);

//   React.useEffect(() => {
//     // Simulate fetching data from the backend
//     const fetchPosts = async () => {
//       const data = [
//         {
//           id: 1,
//           user: 'MUI',
//           avatar: '/static/logo.png',
//           image: '/static/images/cards/yosemite.jpeg',
//           likes: '8.1M',
//           description: 'The React component library you always wanted',
//           time: '2 DAYS AGO',
//         },
//         {
//           id: 2,
//           user: 'React',
//           avatar: '/static/logo.png',
//           image: '/static/images/cards/mountain.jpeg',
//           likes: '1.2M',
//           description: 'Building interfaces made easy!',
//           time: '1 DAY AGO',
//         },
//       ];
//       setPosts(data);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         height: '100vh',
//         overflowY: 'auto',
//         p: 2,
//       }}
//     >
//       {posts.map((post) => (
//         <Box key={post.id} sx={{ width: '100%', maxWidth: 600, mb: 2 }}>
//           <Card
//             variant="outlined"
//             sx={{
//               '--Card-radius': (theme) => theme.vars.radius.xs,
//               borderColor: '#008080',
//             }}
//           >
//             <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
//               <Box
//                 sx={{
//                   position: 'relative',
//                   '&::before': {
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     bottom: 0,
//                     right: 0,
//                     m: '-2px',
//                     borderRadius: '50%',
//                     background:
//                       'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
//                   },
//                 }}
//               >
//                 <Avatar
//                   size="sm"
//                   src={post.avatar}
//                   sx={{ p: 0.5, border: '2px solid', borderColor: '#008080' }}
//                 />
//               </Box>
//               <Typography sx={{ fontWeight: 'lg', color: '#008080' }}>{post.user}</Typography>
//               <IconButton
//                 variant="plain"
//                 color="neutral"
//                 size="sm"
//                 sx={{ ml: 'auto', color: '#008080' }}
//               >
//                 <MoreHoriz />
//               </IconButton>
//             </CardContent>
//             <CardOverflow>
//               <AspectRatio>
//                 <img src={post.image} alt="Post image" loading="lazy" />
//               </AspectRatio>
//             </CardOverflow>
//             <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
//               <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
//                 <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#008080' }}>
//                   <FavoriteBorder />
//                 </IconButton>
//                 <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#008080' }}>
//                   <ModeCommentOutlined />
//                 </IconButton>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
//                 {[...Array(5)].map((_, index) => (
//                   <Box
//                     key={index}
//                     sx={[
//                       {
//                         borderRadius: '50%',
//                         width: `max(${6 - index}px, 3px)`,
//                         height: `max(${6 - index}px, 3px)`,
//                       },
//                       index === 0
//                         ? { bgcolor: 'primary.solidBg' }
//                         : { bgcolor: 'background.level3' },
//                     ]}
//                   />
//                 ))}
//               </Box>
//             </CardContent>
//             <CardContent>
//               <Link
//                 component="button"
//                 underline="none"
//                 textColor="#008080"
//                 sx={{ fontSize: 'sm', fontWeight: 'lg' }}
//               >
//                 {post.likes} Likes
//               </Link>
//               <Typography sx={{ fontSize: 'sm', color: '#008080' }}>
//                 <Link
//                   component="button"
//                   color="neutral"
//                   textColor="#008080"
//                   sx={{ fontWeight: 'lg' }}
//                 >
//                   {post.user}
//                 </Link>{' '}
//                 {post.description}
//               </Typography>
//               <Link
//                 component="button"
//                 underline="none"
//                 startDecorator="…"
//                 sx={{ fontSize: 'sm', color: '#008080' }}
//               >
//                 more
//               </Link>
//               <Link
//                 component="button"
//                 underline="none"
//                 sx={{ fontSize: '10px', color: '#008080', my: 0.5 }}
//               >
//                 {post.time}
//               </Link>
//             </CardContent>
//             <CardContent orientation="horizontal" sx={{ gap: 1 }}>
//               <IconButton
//                 size="sm"
//                 variant="plain"
//                 color="neutral"
//                 sx={{ ml: -1, color: '#008080' }}
//               >
//                 <Face />
//               </IconButton>
//               <Input
//                 variant="plain"
//                 size="sm"
//                 placeholder="Add a comment…"
//                 sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px', color: '#008080' }}
//               />
//               <Link disabled underline="none" role="button" sx={{ color: '#008080' }}>
//                 Post
//               </Link>
//             </CardContent>
//           </Card>
//         </Box>
//       ))}
//     </Box>
//   );
// }




import * as React from 'react';
import axios from 'axios';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import Face from '@mui/icons-material/Face';

const InstagramPosts = () => {
  const [posts, setPosts] = React.useState([]);

  // Fetch posts from the backend API
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // UseEffect to fetch posts when the component mounts
  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        overflowY: 'auto',
        p: 2,
      }}
    >
      {posts.map((post) => (
        <Box key={post._id} sx={{ width: '100%', maxWidth: 600, mb: 2 }}>
          <Card
            variant="outlined"
            sx={{
              '--Card-radius': (theme) => theme.vars.radius.xs,
              borderColor: '#008080',
            }}
          >
            <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    m: '-2px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                  },
                }}
              >
                <Avatar
                  size="sm"
                  src={post.userAvatar || '/static/logo.png'} // Default avatar if not available
                  sx={{ p: 0.5, border: '2px solid', borderColor: '#008080' }}
                />
              </Box>
              <Typography sx={{ fontWeight: 'lg', color: '#008080' }}>{post.user}</Typography>
              <IconButton
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ ml: 'auto', color: '#008080' }}
              >
                <MoreHoriz />
              </IconButton>
            </CardContent>
            <CardOverflow>
              <AspectRatio>
                {post.mediaType === 'image' ? (
                  <img src={post.mediaUrl} alt="Post" loading="lazy" />
                ) : (
                  <video src={post.mediaUrl} controls loading="lazy" />
                )}
              </AspectRatio>
            </CardOverflow>
            <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
              <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#008080' }}>
                  <FavoriteBorder />
                </IconButton>
                <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#008080' }}>
                  <ModeCommentOutlined />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                {[...Array(5)].map((_, index) => (
                  <Box
                    key={index}
                    sx={[
                      {
                        borderRadius: '50%',
                        width: `max(${6 - index}px, 3px)`,
                        height: `max(${6 - index}px, 3px)`,
                      },
                      index === 0
                        ? { bgcolor: 'primary.solidBg' }
                        : { bgcolor: 'background.level3' },
                    ]}
                  />
                ))}
              </Box>
            </CardContent>
            <CardContent>
              <Link
                component="button"
                underline="none"
                textColor="#008080"
                sx={{ fontSize: 'sm', fontWeight: 'lg' }}
              >
                {post.likes} Likes
              </Link>
              <Typography sx={{ fontSize: 'sm', color: '#008080' }}>
                <Link
                  component="button"
                  color="neutral"
                  textColor="#008080"
                  sx={{ fontWeight: 'lg' }}
                >
                  {post.user}
                </Link>{' '}
                {post.description}
              </Typography>
              <Link
                component="button"
                underline="none"
                startDecorator="…"
                sx={{ fontSize: 'sm', color: '#008080' }}
              >
                more
              </Link>
              <Link
                component="button"
                underline="none"
                sx={{ fontSize: '10px', color: '#008080', my: 0.5 }}
              >
                {post.time}
              </Link>
            </CardContent>
            <CardContent orientation="horizontal" sx={{ gap: 1 }}>
              <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                sx={{ ml: -1, color: '#008080' }}
              >
                <Face />
              </IconButton>
              <Input
                variant="plain"
                size="sm"
                placeholder="Add a comment…"
                sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px', color: '#008080' }}
              />
              <Link disabled underline="none" role="button" sx={{ color: '#008080' }}>
                Post
              </Link>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default InstagramPosts;
