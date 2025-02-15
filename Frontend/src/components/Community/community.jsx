import React from 'react';
import CommunityUI from './CommunityUI/CommunityUI';
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
          marginLeft: '250px', // Adjust to match the NavigationBar width
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F5FAFF', // Same background color
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
        }}
      >
        {/* Top Searchbar Box */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px', // Restrict max width for the search bar
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginBottom: '24px', // Space between search bar and main content
            backgroundColor: '#fff', // White box background
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add slight shadow for box
            position: 'sticky',
            top: '16px', // Stick to the top when scrolling
            zIndex: 10,
          }}
        >
          <Searchbar />
        </div>

        {/* Community UI */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px', // Restrict max width for main content
            padding: '24px',
            backgroundColor: '#fff', // Add white background for contrast
            borderRadius: '16px', // Rounded corners for CommunityUI
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow for better appearance
            overflowY: 'auto', // Enable scrolling for long content
          }}
        >
          <CommunityUI />
        </div>
      </div>
    </div>
  );
};

export default Community;

