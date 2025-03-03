import React from 'react';
import { Users } from 'lucide-react';

const ChatHeader = ({ community }) => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white flex items-center">
      <img 
        src={community.avatar} 
        alt={community.name} 
        className="h-10 w-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <h2 className="font-bold text-gray-800">{community.name}</h2>
        <p className="text-sm text-gray-500">{community.description}</p>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Users className="h-4 w-4 mr-1" />
        {community.members.toLocaleString()} members
      </div>
    </div>
  );
};

export default ChatHeader;