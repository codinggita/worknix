import React from 'react';
import CommunityUI from './CommunityUI';
import NavigationBar from '../Common/NavigationBar';
import Searchbar from '../Common/Searchbar';

const Community = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#F5FAFF', // Uniform background color
      }}
    >
      {/* Left-Side Navigation Bar */}
      <div
        style={{
          left: '0px',
          width: '250px',
          position: 'fixed',
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F5FAFF', // Same background color
        }}
      >
        <NavigationBar />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          marginLeft: '80px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F5FAFF', // Same background color
        }}
      >
        {/* Top Searchbar Box */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Center search bar
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '16px', // Add space around the box
            backgroundColor: '#fff', // White box background
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add slight shadow for box
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <Searchbar />
        </div>

        {/* Community UI */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          <CommunityUI />
        </div>
      </div>
    </div>
  );
};

export default Community;