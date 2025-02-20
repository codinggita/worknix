// src/components/Workflow/Header.jsx
import React from "react";

const Header = ({ username }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-3xl font-semibold text-gray-800">
        Welcome, {username} 👋
      </h1>
    </div>
  );
};

export default Header;
