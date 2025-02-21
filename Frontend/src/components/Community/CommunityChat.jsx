import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PaperAirplaneIcon, ChartBarIcon } from '@heroicons/react/24/solid';

function CommunityChat() {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [showPollCreator, setShowPollCreator] = useState(false);
  const [pollQuestion, setPollQuestion] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);

  const messages = [
    {
      id: 1,
      user: 'John Doe',
      message: 'Hello everyone! How are you doing today?',
      timestamp: '10:30 AM',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      user: 'Jane Smith',
      message: 'Hi John! Everything is going great. Working on the new project.',
      timestamp: '10:32 AM',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 3,
      type: 'poll',
      user: 'Mike Johnson',
      question: 'When should we schedule the next team meeting?',
      options: [
        { text: 'Monday 10 AM', votes: 3 },
        { text: 'Tuesday 2 PM', votes: 5 },
        { text: 'Wednesday 11 AM', votes: 2 }
      ],
      timestamp: '10:35 AM',
      avatar: 'https://via.placeholder.com/40'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message sending logic here
      setMessage('');
    }
  };

  const handleCreatePoll = (e) => {
    e.preventDefault();
    if (pollQuestion && pollOptions.filter(opt => opt.trim()).length >= 2) {
      // Add poll creation logic here
      setShowPollCreator(false);
      setPollQuestion('');
      setPollOptions(['', '']);
    }
  };

  const handleVote = (messageId, optionIndex) => {
    // Handle voting logic here
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white shadow-sm p-4 flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Community"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Community Chat</h2>
          <p className="text-sm text-gray-500">25 members online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-3">
            <img
              src={msg.avatar}
              alt={msg.user}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-gray-800">{msg.user}</span>
                <span className="text-xs text-gray-500">{msg.timestamp}</span>
              </div>
              {msg.type === 'poll' ? (
                <div className="bg-white rounded-lg p-4 mt-2 shadow-sm">
                  <p className="font-medium mb-3">{msg.question}</p>
                  <div className="space-y-2">
                    {msg.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleVote(msg.id, index)}
                        className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span>{option.text}</span>
                          <span className="text-sm text-gray-500">{option.votes} votes</span>
                        </div>
                        <div className="h-1 bg-gray-200 rounded-full mt-2">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{
                              width: `${(option.votes / msg.options.reduce((acc, curr) => acc + curr.votes, 0)) * 100}%`
                            }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 mt-1">{msg.message}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {showPollCreator && (
        <div className="p-4 bg-white border-t">
          <form onSubmit={handleCreatePoll} className="space-y-4">
            <input
              type="text"
              value={pollQuestion}
              onChange={(e) => setPollQuestion(e.target.value)}
              placeholder="Enter your poll question..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {pollOptions.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...pollOptions];
                  newOptions[index] = e.target.value;
                  setPollOptions(newOptions);
                }}
                placeholder={`Option ${index + 1}`}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ))}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setPollOptions([...pollOptions, ''])}
                className="text-primary hover:text-secondary transition-colors"
              >
                + Add Option
              </button>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={() => setShowPollCreator(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-secondary transition-colors"
                >
                  Create Poll
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setShowPollCreator(!showPollCreator)}
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ChartBarIcon className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-all transform hover:scale-105"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommunityChat