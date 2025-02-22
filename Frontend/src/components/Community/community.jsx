import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";  // Top navbar
import NavigationBar from "../Common/NavigationBar";  // Left sidebar navigation
import Communities from "./Communities";
import MyCommunities from "./MyCommunities"; // My Communities page
import CreateCommunity from "./CreateCommunity"; // Create Community page

const Community = () => {
  return (
    <div className="community-page min-h-screen bg-gray-100 flex">
      {/* Left Navigation Sidebar */}
      <NavigationBar className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40" />

      {/* Main Content Area */}
      <div className="flex-1 ml-56"> {/* Content starts after sidebar */}
        
        {/* Top Navigation (Fixed at the top of the page, horizontally across) */}
        <div className="fixed top-0 left-0 right-0 bg-primary text-white z-0">
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="pt-20 p-6 ">
          {/* Routing for Communities, My Communities, Create Community */}
          <Routes>
            <Route path="/" element={<Communities />} />
            <Route path="/my-communities" element={<MyCommunities />} />
            <Route path="/create-community" element={<CreateCommunity />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Community;
