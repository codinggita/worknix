import React, { useRef, useEffect } from 'react';
import Message from './Message';

const MessageList = ({ messages, currentUser, formatTime, formatDuration }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map(message => (
        <Message 
          key={message.id} 
          message={message} 
          currentUser={currentUser} 
          formatTime={formatTime} 
          formatDuration={formatDuration} 
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;