import React, { useRef } from 'react';
import { Plus, Send, Mic } from 'lucide-react';
import AttachmentOptions from './AttachmentOptions';
import AttachmentPreview from './AttachmentPreview';
import RecordingIndicator from './RecordingIndicator';

const MessageInput = ({
  newMessage,
  setNewMessage,
  handleSendMessage,
  handleKeyPress,
  attachments,
  removeAttachment,
  voiceNote,
  removeVoiceNote,
  isRecording,
  recordingTime,
  startRecording,
  stopRecording,
  cancelRecording,
  showAttachmentOptions,
  setShowAttachmentOptions,
  handleAttachmentClick,
  formatDuration
}) => {
  const fileInputRef = useRef(null);

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <AttachmentPreview 
        attachments={attachments} 
        voiceNote={voiceNote} 
        removeAttachment={removeAttachment} 
        removeVoiceNote={removeVoiceNote} 
        formatDuration={formatDuration} 
      />
      
      <RecordingIndicator 
        isRecording={isRecording} 
        recordingTime={recordingTime} 
        stopRecording={stopRecording} 
        cancelRecording={cancelRecording} 
        formatDuration={formatDuration} 
      />
      
      <div className="flex items-end">
        <div className="relative mr-2">
          <button 
            onClick={() => setShowAttachmentOptions(!showAttachmentOptions)}
            className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <Plus className="h-5 w-5 text-gray-600" />
          </button>
          
          <AttachmentOptions 
            show={showAttachmentOptions} 
            handleAttachmentClick={handleAttachmentClick} 
          />
        </div>
        
        {/* Microphone button */}
        {!isRecording && (
          <button 
            onClick={startRecording}
            className="h-10 w-10 mr-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            title="Record voice message"
          >
            <Mic className="h-5 w-5 text-gray-600" />
          </button>
        )}
        
        <div className="flex-1 relative">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            rows={1}
            disabled={isRecording}
          />
        </div>
        
        <button 
          onClick={handleSendMessage}
          className="ml-2 h-10 w-10 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transition-colors"
          disabled={isRecording}
        >
          <Send className="h-5 w-5 text-white" />
        </button>
      </div>
      
      {/* Hidden file input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={(e) => {
          const files = e.target.files;
          if (!files || files.length === 0) return;
          
          const type = e.target.getAttribute('data-type');
          handleFileChange(files, type);
        }} 
        className="hidden" 
      />
    </div>
  );
};

export default MessageInput;