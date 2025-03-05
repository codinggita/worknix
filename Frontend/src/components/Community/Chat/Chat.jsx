import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = ({ activeCommunity, currentUser }) => {
  // State
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [voiceNote, setVoiceNote] = useState(null);

  // Refs
  const fileInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  // Load messages when community changes
  useEffect(() => {
    if (activeCommunity) {
      const mockMessages = [
        {
          id: '1',
          sender: 'Sarah Miller',
          content: 'Hey everyone! Just joined this community. Excited to connect with you all!',
          timestamp: new Date(Date.now() - 3600000 * 2)
        },
        {
          id: '2',
          sender: 'David Chen',
          content: 'Welcome Sarah! Glad to have you here.',
          timestamp: new Date(Date.now() - 3600000)
        },
        {
          id: '3',
          sender: 'Emma Wilson',
          content: 'Check out this cool design I just finished!',
          timestamp: new Date(Date.now() - 1800000),
          attachments: [
            {
              id: 'att1',
              type: 'image',
              url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              name: 'design-mockup.jpg'
            }
          ]
        },
        {
          id: '4',
          sender: 'Michael Brown',
          content: '',
          timestamp: new Date(Date.now() - 900000),
          voiceNote: {
            id: 'voice1',
            url: 'https://example.com/voice-note.mp3', // This would be a real URL in production
            duration: 12
          }
        }
      ];
      setMessages(mockMessages);
    } else {
      setMessages([]);
    }
  }, [activeCommunity]);

  // Recording timer
  useEffect(() => {
    if (isRecording) {
      setRecordingTime(0);
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRecording]);

  // Utility functions
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handlers
  const handleSendMessage = () => {
    if (newMessage.trim() === '' && attachments.length === 0 && !voiceNote) return;

    const newMsg = {
      id: Date.now().toString(),
      sender: currentUser.name,
      content: newMessage,
      timestamp: new Date(),
      attachments: attachments.length > 0 ? [...attachments] : undefined,
      voiceNote: voiceNote || undefined
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
    setAttachments([]);
    setVoiceNote(null);
    setShowAttachmentOptions(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAttachmentClick = (type) => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('data-type', type);
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (files, type) => {
    // In a real app, you would upload the file to a server and get a URL back
    // For this demo, we'll create object URLs for local files
    Array.from(files).forEach(file => {
      const attachment = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        type: type,
        url: URL.createObjectURL(file),
        name: file.name
      };
      setAttachments(prev => [...prev, attachment]);
    });
  };

  const removeAttachment = (id) => {
    setAttachments(attachments.filter(att => att.id !== id));
  };

  // Voice recording functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        setVoiceNote({
          id: Date.now().toString(),
          url: audioUrl,
          duration: recordingTime
        });

        // Stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access your microphone. Please check your browser permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setVoiceNote(null);
      audioChunksRef.current = [];
    }
  };

  const removeVoiceNote = () => {
    setVoiceNote(null);
  };

  if (!activeCommunity) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
        <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Select a Community</h2>
        <p className="text-gray-500 text-center max-w-md">
          Choose a community from the sidebar to start chatting with other members.
        </p>
      </div>
    );
  }

  return (
    <>
      <ChatHeader community={activeCommunity} />
      
      <MessageList 
        messages={messages} 
        currentUser={currentUser} 
        formatTime={formatTime} 
        formatDuration={formatDuration} 
      />
      
      <MessageInput 
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
        attachments={attachments}
        removeAttachment={removeAttachment}
        voiceNote={voiceNote}
        removeVoiceNote={removeVoiceNote}
        isRecording={isRecording}
        recordingTime={recordingTime}
        startRecording={startRecording}
        stopRecording={stopRecording}
        cancelRecording={cancelRecording}
        showAttachmentOptions={showAttachmentOptions}
        setShowAttachmentOptions={setShowAttachmentOptions}
        handleAttachmentClick={handleAttachmentClick}
        formatDuration={formatDuration}
      />
    </>
  );
};

export default Chat;