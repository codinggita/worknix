// src/components/Community/CreateCommunity.jsx
import React, { useState } from "react";
import "./styles/CreateCommunity.css";

const CreateCommunity = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static community creation logic for now
    const newCommunity = {
      id: Date.now(), // Generate a temporary unique ID
      name,
      description,
      isPrivate,
      members: 1, // Assume creator is the first member
    };

    onCreate(newCommunity); // Call the parent function to add the new community
    setName(""); // Reset form fields
    setDescription("");
    setIsPrivate(false);
  };

  return (
    <div className="create-community">
      <h2>Create a New Community</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Community Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter community name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter community description"
            required
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="isPrivate"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
          />
          <label htmlFor="isPrivate">Make this community private</label>
        </div>
        <button type="submit" className="create-btn">
          Create Community
        </button>
      </form>
    </div>
  );
};

export default CreateCommunity;
