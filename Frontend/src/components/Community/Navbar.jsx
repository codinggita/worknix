// import { Link, useLocation } from 'react-router-dom';
// import { UserGroupIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

// function Navbar() {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-primary text-white p-4 shadow-lg">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-8">
//           <h1 className="text-2xl font-bold">EMS Portal</h1>
          
//           <div className="flex items-center space-x-4">
//             {/* Communities Link */}
//             <Link
//               to="/community"
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
//                 isActive('/community') ? 'bg-secondary' : 'hover:bg-secondary'
//               }`}
//             >
//               <UserGroupIcon className="w-5 h-5" />
//               <span>Communities</span>
//             </Link>
            
//             {/* My Communities Link */}
//             <Link
//               to="/community/my-communities"
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
//                 isActive('/community/my-communities') ? 'bg-secondary' : 'hover:bg-secondary'
//               }`}
//             >
//               <UserGroupIcon className="w-5 h-5" />
//               <span>My Communities</span>
//             </Link>
            
//             {/* Create Community Link */}
//             <Link
//               to="/community/create-community"
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
//                 isActive('/community/create-community') ? 'bg-secondary' : 'hover:bg-secondary'
//               }`}
//             >
//               <PlusCircleIcon className="w-5 h-5" />
//               <span>Create Community</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link } from "react-router-dom";
// import { HomeIcon, UserGroupIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

// const NavigationBar = () => {
//   return (
//     <div className="w-56 bg-primary text-white min-h-screen fixed top-0 left-0 p-6">
//       <div className="space-y-8">
//         <h1 className="text-2xl font-bold">EMS Portal</h1>

//         <div className="space-y-4">
//           <Link
//             to="/community"
//             className="flex items-center space-x-2 hover:bg-secondary p-2 rounded-lg"
//           >
//             <HomeIcon className="w-5 h-5" />
//             <span>Communities</span>
//           </Link>

//           <Link
//             to="/community/my-communities"
//             className="flex items-center space-x-2 hover:bg-secondary p-2 rounded-lg"
//           >
//             <UserGroupIcon className="w-5 h-5" />
//             <span>My Communities</span>
//           </Link>

//           <Link
//             to="/community/create-community"
//             className="flex items-center space-x-2 hover:bg-secondary p-2 rounded-lg"
//           >
//             <PlusCircleIcon className="w-5 h-5" />
//             <span>Create Community</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationBar;

// import { Link, useLocation } from 'react-router-dom';
// import { UserGroupIcon, PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { useState } from 'react';
// import NavigationBar from '../Common/NavigationBar'; // Left Sidebar

// function Navbar() {
//   const location = useLocation();
//   const [searchTerm, setSearchTerm] = useState('');
//   const isActive = (path) => location.pathname === path;

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search functionality
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Sidebar */}
//       <NavigationBar className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40" />

//       {/* Main Content Area */}
//       <div className="flex-1 ml-56"> {/* ml-56 to make space for the sidebar */}
//         <nav className="bg-[#008080] text-white p-4 shadow-lg">
//           <div className="max-w-7xl mx-auto flex items-center justify-between">
//             <div className="flex items-center space-x-8">
//               <h1 className="text-2xl font-bold">EMS Portal</h1>
//               <div className="flex items-center space-x-4">
//                 {/* Communities Link */}
//                 <Link
//                   to="/community"
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
//                     isActive('/community') ? 'bg-secondary' : 'hover:bg-secondary'
//                   }`}
//                 >
//                   <UserGroupIcon className="w-5 h-5" />
//                   <span>Communities</span>
//                 </Link>

//                 {/* My Communities Link */}
//                 <Link
//                   to="/community/my-communities"
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
//                     isActive('/community/my-communities') ? 'bg-secondary' : 'hover:bg-secondary'
//                   }`}
//                 >
//                   <UserGroupIcon className="w-5 h-5" />
//                   <span>My Communities</span>
//                 </Link>

//                 {/* Create Community Link */}
//                 <Link
//                   to="/community/create-community"
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
//                     isActive('/community/create-community') ? 'bg-secondary' : 'hover:bg-secondary'
//                   }`}
//                 >
//                   <PlusCircleIcon className="w-5 h-5" />
//                   <span>Create Community</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Search Bar */}
//             <form onSubmit={handleSearch} className="relative flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary w-64 bg-[#F5FAFF]"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#F5FAFF] px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
//               >
//                 <MagnifyingGlassIcon className="w-5 h-5 text-[#008080]" />
//               </button>
//             </form>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import { Link, useLocation } from 'react-router-dom';
import { UserGroupIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import NavigationBar from '../Common/NavigationBar'; // Left Sidebar

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <NavigationBar className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40" />

      {/* Main Content Area */}
      <div className="flex-1 ml-56"> {/* Add left margin to accommodate sidebar width */}
        <nav className="bg-[#008080] text-white p-4 shadow-lg fixed top-0 left-20 right-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                {/* Communities Link */}
                <Link
                  to="/community"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                    isActive('/community') ? 'bg-secondary' : 'hover:bg-secondary'
                  }`}
                >
                  <UserGroupIcon className="w-5 h-5" />
                  <span>Communities</span>
                </Link>

                {/* My Communities Link */}
                <Link
                  to="/community/my-communities"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                    isActive('/community/my-communities') ? 'bg-secondary' : 'hover:bg-secondary'
                  }`}
                >
                  <UserGroupIcon className="w-5 h-5" />
                  <span>My Communities</span>
                </Link>

                {/* Create Community Link */}
                <Link
                  to="/community/create-community"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                    isActive('/community/create-community') ? 'bg-secondary' : 'hover:bg-secondary'
                  }`}
                >
                  <PlusCircleIcon className="w-5 h-5" />
                  <span>Create Community</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
  