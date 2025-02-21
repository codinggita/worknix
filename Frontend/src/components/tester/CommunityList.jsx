// src/components/Community/CommunityList.jsx
import React from "react";
import "./styles/CommunityList.css";

const communities = [
  {
    id: 1,
    name: "Tech Enthusiasts",
    description: "A community for people who love technology.",
    members: 120,
  },
  {
    id: 2,
    name: "Fitness Freaks",
    description: "For those who love staying fit and healthy.",
    members: 85,
  },
  {
    id: 3,
    name: "Book Lovers",
    description: "A space for people who enjoy reading books.",
    members: 64,
  },
];

const CommunityList = ({ onSelectCommunity }) => {
  return (
    <div className="community-list">
      <h2>All Communities</h2>
      <ul>
        {communities.map((community) => (
          <li
            key={community.id}
            className="community-item"
            onClick={() => onSelectCommunity(community)}
          >
            <h3>{community.name}</h3>
            <p>{community.description}</p>
            <span>{community.members} members</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
