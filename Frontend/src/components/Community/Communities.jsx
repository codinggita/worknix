// // // import { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // function Communities() {
// // //   const navigate = useNavigate();
// // //   const [searchTerm, setSearchTerm] = useState('');

// // //   const communities = [
// // //     {
// // //       id: 1,
// // //       name: 'HR Community',
// // //       description: 'A space for HR professionals to connect and share insights',
// // //       members: 150,
// // //       image: 'https://via.placeholder.com/50'
// // //     },
// // //     {
// // //       id: 2,
// // //       name: 'Tech Hub',
// // //       description: 'Discussion forum for technical teams and innovations',
// // //       members: 200,
// // //       image: 'https://via.placeholder.com/50'
// // //     },
// // //     {
// // //       id: 3,
// // //       name: 'Leadership Circle',
// // //       description: 'Community for team leaders and managers',
// // //       members: 75,
// // //       image: 'https://via.placeholder.com/50'
// // //     }
// // //   ];

// // //   const filteredCommunities = communities.filter(community =>
// // //     community.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="p-6 max-w-7xl mx-auto">
// // //       <div className="flex justify-between items-center mb-8">
// // //         <h1 className="text-3xl font-bold text-gray-800">Communities To Explore</h1>
// // //         <div className="relative">
// // //           <input
// // //             type="text"
// // //             placeholder="Search communities..."
// // //             className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {filteredCommunities.map((community) => (
// // //           <div
// // //             key={community.id}
// // //             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
// // //             onClick={() => navigate('/my-communities')}
// // //           >
// // //             <div className="flex items-center space-x-4 mb-4">
// // //               <img
// // //                 src={community.image}
// // //                 alt={community.name}
// // //                 className="w-12 h-12 rounded-full"
// // //               />
// // //               <div>
// // //                 <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
// // //                 <p className="text-sm text-gray-500">{community.members} members</p>
// // //               </div>
// // //             </div>
// // //             <p className="text-gray-600">{community.description}</p>
// // //             <button
// // //               className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
// // //               onClick={(e) => {
// // //                 e.stopPropagation();
// // //                 // Add join logic here
// // //               }}
// // //             >
// // //               Join Community
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Communities;




// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Communities() {
// //   const navigate = useNavigate();
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const communities = [
// //     {
// //       id: 1,
// //       name: 'HR Community',
// //       description: 'A space for HR professionals to connect and share insights',
// //       members: 150,
// //       image: 'https://via.placeholder.com/50'
// //     },
// //     {
// //       id: 2,
// //       name: 'Tech Hub',
// //       description: 'Discussion forum for technical teams and innovations',
// //       members: 200,
// //       image: 'https://via.placeholder.com/50'
// //     },
// //     {
// //       id: 3,
// //       name: 'Leadership Circle',
// //       description: 'Community for team leaders and managers',
// //       members: 75,
// //       image: 'https://via.placeholder.com/50'
// //     },
// //     {
// //       id: 4,
// //       name: 'Marketing Mavericks',
// //       description: 'A group for marketing experts to brainstorm and innovate.',
// //       members: 110,
// //       image: 'https://via.placeholder.com/50'
// //     },
// //     {
// //       id: 5,
// //       name: 'Finance Forum',
// //       description: 'Discussions on financial trends and investment strategies.',
// //       members: 180,
// //       image: 'https://via.placeholder.com/50'
// //     },
// //     {
// //       id: 6,
// //       name: 'Design Innovators',
// //       description: 'Showcasing creative designs and UX/UI improvements.',
// //       members: 90,
// //       image: 'https://via.placeholder.com/50'
// //     },
// //   ];

// //   const filteredCommunities = communities.filter(community =>
// //     community.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       <div className="flex justify-between items-center mb-8">
// //         <h1 className="text-3xl font-bold text-gray-800">Communities To Explore</h1>
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search communities..."
// //             className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {filteredCommunities.map((community) => (
// //           <div
// //             key={community.id}
// //             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
// //             onClick={() => navigate('/my-communities')}
// //           >
// //             <div className="flex items-center space-x-4 mb-4">
// //               <img
// //                 src={community.image}
// //                 alt={community.name}
// //                 className="w-12 h-12 rounded-full"
// //               />
// //               <div>
// //                 <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
// //                 <p className="text-sm text-gray-500">{community.members} members</p>
// //               </div>
// //             </div>
// //             <p className="text-gray-600">{community.description}</p>
// //             <button
// //               className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 // Add join logic here
// //               }}
// //             >
// //               Join Community
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Communities;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Communities() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');

//   const communities = [
//     {
//       id: 1,
//       name: 'HR Community',
//       description: 'A space for HR professionals to connect and share insights',
//       members: 150,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 2,
//       name: 'Tech Hub',
//       description: 'Discussion forum for technical teams and innovations',
//       members: 200,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 3,
//       name: 'Leadership Circle',
//       description: 'Community for team leaders and managers',
//       members: 75,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 4,
//       name: 'Marketing Mavericks',
//       description: 'A group for marketing experts to brainstorm and innovate.',
//       members: 110,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 5,
//       name: 'Finance Forum',
//       description: 'Discussions on financial trends and investment strategies.',
//       members: 180,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 6,
//       name: 'Design Innovators',
//       description: 'Showcasing creative designs and UX/UI improvements.',
//       members: 90,
//       image: 'https://via.placeholder.com/50'
//     },
//   ];

//   const filteredCommunities = communities.filter(community =>
//     community.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 pl-0 w-full"> {/* Removed padding-left to align fully to the left */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Communities To Explore</h1>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search communities..."
//             className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredCommunities.map((community) => (
//           <div
//             key={community.id}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
//             onClick={() => navigate('/my-communities')}
//           >
//             <div className="flex items-center space-x-4 mb-4">
//               <img
//                 src={community.image}
//                 alt={community.name}
//                 className="w-12 h-12 rounded-full"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
//                 <p className="text-sm text-gray-500">{community.members} members</p>
//               </div>
//             </div>
//             <p className="text-gray-600">{community.description}</p>
//             <button
//               className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 // Add join logic here
//               }}
//             >
//               Join Community
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Communities;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Communities() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');

//   const communities = [
//     {
//       id: 1,
//       name: 'HR Community',
//       description: 'A space for HR professionals to connect and share insights',
//       members: 150,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 2,
//       name: 'Tech Hub',
//       description: 'Discussion forum for technical teams and innovations',
//       members: 200,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 3,
//       name: 'Leadership Circle',
//       description: 'Community for team leaders and managers',
//       members: 75,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 4,
//       name: 'Marketing Mavericks',
//       description: 'A group for marketing experts to brainstorm and innovate.',
//       members: 110,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 5,
//       name: 'Finance Forum',
//       description: 'Discussions on financial trends and investment strategies.',
//       members: 180,
//       image: 'https://via.placeholder.com/50'
//     },
//     {
//       id: 6,
//       name: 'Design Innovators',
//       description: 'Showcasing creative designs and UX/UI improvements.',
//       members: 90,
//       image: 'https://via.placeholder.com/50'
//     },
//   ];

//   const filteredCommunities = communities.filter(community =>
//     community.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-7 w-full h-screen">
      
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Communities To Explore</h1>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search communities..."
//             className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredCommunities.map((community) => (
//           <div
//             key={community.id}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
//             onClick={() => navigate('/my-communities')}
//           >
//             <div className="flex items-center space-x-4 mb-4">
//               <img
//                 src={community.image}
//                 alt={community.name}
//                 className="w-12 h-12 rounded-full"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
//                 <p className="text-sm text-gray-500">{community.members} members</p>
//               </div>
//             </div>
//             <p className="text-gray-600">{community.description}</p>
//             <button
//               className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 // Add join logic here
//               }}
//             >
//               Join Community
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Communities;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Communities() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch('https://worknix-1.onrender.com/api/community/explore');
        if (!response.ok) {
          throw new Error('Failed to fetch communities');
        }
        const data = await response.json();
        setCommunities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCommunities();
  }, []);

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-7 w-full h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Communities To Explore</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCommunities.map((community) => (
          <div
            key={community._id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/my-communities')}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={community.profilePhoto || 'https://via.placeholder.com/50'}
                alt={community.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{community.name}</h3>
                <p className="text-sm text-gray-500">{community.members?.length || 0} members</p>
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
