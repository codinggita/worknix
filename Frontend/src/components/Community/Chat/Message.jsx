import React from 'react';
import { User, FileText } from 'lucide-react';

const Message = ({ message, currentUser, formatTime, formatDuration }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {message.sender === currentUser.name ? (
            <img 
              src={currentUser.avatar} 
              alt={message.sender} 
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-6 w-6 text-indigo-600" />
            </div>
          )}
        </div>
        <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center mb-1">
            <span className="font-medium text-gray-900">{message.sender}</span>
            <span className="ml-2 text-xs text-gray-500">{formatTime(message.timestamp)}</span>
          </div>
          
          {message.content && (
            <p className="text-gray-800 whitespace-pre-wrap">{message.content}</p>
          )}
          
          {/* Voice Note */}
          {message.voiceNote && (
            <div className="mt-2 bg-gray-50 rounded-lg p-2 flex items-center">
              <audio src={message.voiceNote.url} controls className="w-full h-8" />
              <span className="ml-2 text-xs text-gray-500">
                {formatDuration(message.voiceNote.duration)}
              </span>
            </div>
          )}
          
          {/* Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 space-y-2">
              {message.attachments.map(attachment => (
                <div key={attachment.id} className="rounded-lg overflow-hidden border border-gray-200">
                  {attachment.type === 'image' && (
                    <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={attachment.url} 
                        alt={attachment.name} 
                        className="max-h-60 w-auto object-contain"
                      />
                    </a>
                  )}
                  {attachment.type === 'video' && (
                    <video 
                      src={attachment.url} 
                      controls 
                      className="max-h-60 w-auto"
                    />
                  )}
                  {attachment.type === 'pdf' && (
                    <a 
                      href={attachment.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <FileText className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">{attachment.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;