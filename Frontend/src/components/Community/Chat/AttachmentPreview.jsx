import React from 'react';
import { X, Video, FileText } from 'lucide-react';

const AttachmentPreview = ({ attachments, voiceNote, removeAttachment, removeVoiceNote, formatDuration }) => {
  if (attachments.length === 0 && !voiceNote) return null;
  
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {attachments.map(att => (
        <div key={att.id} className="relative group">
          <div className="h-16 w-16 rounded-md border border-gray-200 overflow-hidden flex items-center justify-center bg-gray-50">
            {att.type === 'image' && (
              <img src={att.url} alt={att.name} className="h-full w-full object-cover" />
            )}
            {att.type === 'video' && (
              <Video className="h-8 w-8 text-indigo-500" />
            )}
            {att.type === 'pdf' && (
              <FileText className="h-8 w-8 text-red-500" />
            )}
          </div>
          <button 
            onClick={() => removeAttachment(att.id)}
            className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center shadow-sm"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
      
      {voiceNote && (
        <div className="relative flex items-center p-2 bg-gray-50 rounded-md border border-gray-200">
          <audio src={voiceNote.url} controls className="h-8 w-40" />
          <span className="mx-2 text-xs text-gray-500">
            {formatDuration(voiceNote.duration)}
          </span>
          <button 
            onClick={removeVoiceNote}
            className="ml-2 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center shadow-sm"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AttachmentPreview;