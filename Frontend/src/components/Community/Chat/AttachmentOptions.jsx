import React from 'react';
import { Image, Video, FileText } from 'lucide-react';

const AttachmentOptions = ({ show, handleAttachmentClick }) => {
  if (!show) return null;
  
  return (
    <div className="absolute bottom-12 left-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 w-48">
      <button 
        onClick={() => handleAttachmentClick('image')}
        className="flex items-center w-full p-2 hover:bg-gray-50 rounded text-left"
      >
        <Image className="h-5 w-5 text-indigo-500 mr-2" />
        <span>Image</span>
      </button>
      <button 
        onClick={() => handleAttachmentClick('video')}
        className="flex items-center w-full p-2 hover:bg-gray-50 rounded text-left"
      >
        <Video className="h-5 w-5 text-indigo-500 mr-2" />
        <span>Video</span>
      </button>
      <button 
        onClick={() => handleAttachmentClick('pdf')}
        className="flex items-center w-full p-2 hover:bg-gray-50 rounded text-left"
      >
        <FileText className="h-5 w-5 text-red-500 mr-2" />
        <span>PDF Document</span>
      </button>
    </div>
  );
};

export default AttachmentOptions;