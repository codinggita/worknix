import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HomeIcon, UserGroupIcon, PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <nav className="bg-teal-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">EMS Portal</h1>

          <div className="flex items-center space-x-4">
            <Link
              to="/community"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                isActive('/community') ? 'bg-teal-700' : 'hover:bg-teal-500'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Communities</span>
            </Link>

            <Link
              to="/community/my-communities"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                isActive('/community/my-communities') ? 'bg-teal-700' : 'hover:bg-teal-500'
              }`}
            >
              <UserGroupIcon className="w-5 h-5" />
              <span>My Communities</span>
            </Link>

            <Link
              to="/community/create-community"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                isActive('/community/create-community') ? 'bg-teal-700' : 'hover:bg-teal-500'
              }`}
            >
              <PlusCircleIcon className="w-5 h-5" />
              <span>Create Community</span>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-l-lg text-gray-800 bg-[#F5FAFF] focus:outline-none focus:ring-2 focus:ring-teal-400 w-64"
            />
            <button
              type="submit"
              className="bg-teal-700 px-4 py-2 rounded-r-lg hover:bg-teal-500 transition-colors"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

