import InstagramPosts from './InstagramPost';
import NavigationBar from '../Common/NavigationBar';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* Fixed Navigation Bar */}
      <Box
        sx={{
          width: '250px',
          height: 'calc(100vh + 30px)',
          position: 'fixed',
          left: 0,
          top: -30,
          bgcolor: '#f0f0f0',
          borderRight: '1px solid #ddd',
          p: 2,
        }}
      >
        <NavigationBar />
      </Box>

      {/* Scrollable Instagram Posts */}
      <Box
        sx={{
          marginLeft: '250px',
          flex: 1,
          overflowY: 'auto',
          height: '100vh',
          p: 2,
        }}
      >
        <InstagramPosts />
      </Box>
    </Box>
  );
};

export default Home;
