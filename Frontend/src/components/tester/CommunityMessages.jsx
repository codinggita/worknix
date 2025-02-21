// src/components/Community/CommunityMessage.jsx
import React, { useState } from "react";
import "./styles/CommunityMessage.css";



const CommunityMessage = ({ messages, onAddMessage, communityId }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      user: "Current User", // Replace with dynamic user later when backend is integrated
      content: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    onAddMessage(communityId, message); // Call parent handler to update the message list
    setNewMessage(""); // Clear the input field
  };

  return (
    <div className="community-message">
      <div className="messages-container">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="message">
              <span className="message-user">{msg.user}:</span>
              <span className="message-content">{msg.content}</span>
              <span className="message-timestamp">{msg.timestamp}</span>
            </div>
          ))
        ) : (
          <p className="no-messages">No messages yet. Start the conversation!</p>
        )}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default CommunityMessage;
