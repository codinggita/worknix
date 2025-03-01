import { useNavigate } from 'react-router-dom';

function MyCommunities() {
  const navigate = useNavigate();

  const myCommunities = [
    {
      id: 1,
      name: 'HR Community',
      lastActivity: '5 minutes ago',
      unreadMessages: 3,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Tech Hub',
      lastActivity: '1 hour ago',
      unreadMessages: 0,
      image: 'https://via.placeholder.com/50'
    }
  ];

  return (
<div className="p-7 max-w-7xl w-full">
<h1 className="text-3xl font-bold text-gray-800  mb-7">My Communities</h1>
      
      <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCommunities.map((community) => (
          <div
            key={community.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
                  <p className="text-sm text-gray-500">Last active: {community.lastActivity}</p>
                </div>
              </div>
              {community.unreadMessages > 0 && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  {community.unreadMessages}
                </span>
              )}
            </div>
            <button
              onClick={() => navigate(`/chat/${community.id}`)}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center space-x-2"
            >
              <span>Open Chat</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCommunities;