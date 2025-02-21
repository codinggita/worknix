import Navbar from "./Navbar";
import NavigationBar from "../Common/NavigationBar"; // Left sidebar navigation
import Communities from "./Communities";

const Community = () => {
  return (
    <div className="community-page min-h-screen bg-gray-100 flex">
      {/* Left Navigation Sidebar (No extra space on the left) */}
      <NavigationBar className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40" />

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Navigation (Starts exactly from left sidebar) */}
        <Navbar className="fixed top-0 left-56 w-[calc(100%-14rem)] z-50" />

        {/* Content */}
        <div className="pt-20 p-6">
          {/* Left Section (Community List) */}
          <Communities />
        </div>
      </div>
    </div>
  );
};

export default Community;

