// src/components/Community/Community.jsx
import React, { useState } from "react";
import "./styles/Community.css";
import CommunityList from "./CommunityList";
import CommunityDetails from "./CommunityDetails";

const Community = () => {
  // Static data for communities
  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: "Tech Enthusiasts",
      description: "A community for tech lovers.",
      isPrivate: false,
      members: 120,
      messages: [
        { id: 1, user: "Alice", content: "Welcome to Tech Enthusiasts!", timestamp: "2025-02-20 10:30 AM" },
      ],
    },
    {
      id: 2,
      name: "Fitness Freaks",
      description: "Share and learn fitness tips.",
      isPrivate: true,
      members: 75,
      messages: [],
    },
    {
      id: 3,
      name: "Photography Hub",
      description: "A place to share and discuss photography.",
      isPrivate: false,
      members: 90,
      messages: [
        { id: 1, user: "John", content: "Any tips for low-light photography?", timestamp: "2025-02-19 9:45 PM" },
      ],
    },
  ]);

  const [selectedCommunity, setSelectedCommunity] = useState(null);

  // Handle selecting a community to view its details
  const handleCommunityClick = (communityId) => {
    const community = communities.find((c) => c.id === communityId);
    setSelectedCommunity(community);
  };

  // Handle going back to the community list
  const handleBack = () => {
    setSelectedCommunity(null);
  };

  // Handle adding a new message to a community
  const handleAddMessage = (communityId, message) => {
    setCommunities((prevCommunities) =>
      prevCommunities.map((c) =>
        c.id === communityId ? { ...c, messages: [...c.messages, message] } : c
      )
    );
  };

  return (
    <div className="community-container">
      {selectedCommunity ? (
        <CommunityDetails
          community={selectedCommunity}
          onBack={handleBack}
          onAddMessage={handleAddMessage}
        />
      ) : (
        <CommunityList
          communities={communities}
          onCommunityClick={handleCommunityClick}
        />
      )}
    </div>
  );
};

export default Community;
