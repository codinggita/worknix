import React from 'react';
import { StopCircle, X } from 'lucide-react';

const RecordingIndicator = ({ isRecording, recordingTime, stopRecording, cancelRecording, formatDuration }) => {
  if (!isRecording) return null;
  
  return (
    <div className="mb-3 flex items-center p-2 bg-red-50 rounded-md border border-red-200 text-red-600">
      <div className="h-3 w-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
      <span className="text-sm font-medium">Recording... {formatDuration(recordingTime)}</span>
      <div className="ml-auto flex space-x-2">
        <button 
          onClick={stopRecording}
          className="p-1 bg-white rounded-full border border-gray-300 hover:bg-gray-50"
        >
          <StopCircle className="h-5 w-5 text-red-500" />
        </button>
        <button 
          onClick={cancelRecording}
          className="p-1 bg-white rounded-full border border-gray-300 hover:bg-gray-50"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default RecordingIndicator;