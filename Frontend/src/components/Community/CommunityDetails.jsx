// src/components/Community/CommunityDetails.jsx
import React from "react";
import "./styles/CommunityDetails.css";
import CommunityMessage from "./CommunityMessages";

const CommunityDetails = ({ community, onBack, onAddMessage }) => {
  return (
    <div className="community-details">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h2>{community.name}</h2>
      <p>{community.description}</p>
      <div className="community-meta">
        <p>Members: {community.members}</p>
        <p>Private: {community.isPrivate ? "Yes" : "No"}</p>
      </div>
      <CommunityMessage
        messages={community.messages}
        onAddMessage={onAddMessage}
        communityId={community.id}
      />
    </div>
  );
};

export default CommunityDetails;

