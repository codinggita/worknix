import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Communities() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const communities = [
    {
      id: 1,
      name: 'HR Community',
      description: 'A space for HR professionals to connect and share insights',
      members: 150,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Tech Hub',
      description: 'Discussion forum for technical teams and innovations',
      members: 200,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 3,
      name: 'Leadership Circle',
      description: 'Community for team leaders and managers',
      members: 75,
      image: 'https://via.placeholder.com/50'
    }
  ];

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Communities To Join</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search communities..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <div
            key={community.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/my-communities')}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={community.image}
                alt={community.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
                <p className="text-sm text-gray-500">{community.members} members</p>
              </div>
            </div>
            <p className="text-gray-600">{community.description}</p>
            <button
              className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                // Add join logic here
              }}
            >
              Join Community
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Communities;