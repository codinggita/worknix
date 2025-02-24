// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";  // Top navbar
// import NavigationBar from "../Common/NavigationBar";  // Left sidebar navigation
// import Dashboard from "./Dashboard";
// import Projects from "./Projects";
// import Teams from "./Teams";
// import Tasks from "./Tasks";

// const Workflow = () => {
//   return (
//     <div className="workflow-page min-h-screen bg-gray-100 flex">
//       {/* Left Navigation Sidebar */}
//       <NavigationBar className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40" />

//       {/* Main Content Area */}
//       <div className="flex-1 ml-6"> {/* Content starts after sidebar */}
        
//         {/* Top Navigation (Fixed at the top of the page, horizontally across) */}
//         <div className="fixed top-0 left-20 right-0 bg-teal-600 text-white z-0">
//           <Navbar />
//         </div>

//         {/* Content Section */}
//         <div className="pt-20 p-6">
//           {/* Routing for Dashboard, Projects, Teams, Tasks */}
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/teams" element={<Teams />} />
//             <Route path="/tasks" element={<Tasks />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;






// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar"; // Top navbar
// import NavigationBar from "../Common/NavigationBar"; // Left sidebar navigation
// import Dashboard from "./Dashboard";
// import Projects from "./Projects";
// import Teams from "./Teams";
// import Tasks from "./Tasks";

// const Workflow = () => {
//   return (
//     <div className="workflow-page min-h-screen bg-gray-100 flex">
//       {/* Left Navigation Sidebar */}
//       <NavigationBar className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40" />

//       {/* Main Content Area */}
//       <div className="flex-1 ml-6"> {/* Adjusted to match sidebar width */}
        
//         {/* Top Navigation (Fixed at the top of the page) */}
//         <div className="fixed top-0 left-20 right-0 bg-teal-600 text-white z-10">
//           <Navbar />
//         </div>

//         {/* Content Section */}
//         <div className="pt-20 p-6">
//           {/* Routing for Dashboard, Projects, Teams, Tasks */}
//           <Routes>
//             <Route index element={<Dashboard />} />  {/* Default route for /workflow */}
//             <Route path="projects" element={<Projects />} />
//             <Route path="teams" element={<Teams />} />
//             <Route path="tasks" element={<Tasks />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;


import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Top navbar
import NavigationBar from "../Common/NavigationBar"; // Left sidebar navigation
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Teams from "./Teams";
import Tasks from "./Tasks";

const Workflow = () => {
  return (
    <div className="workflow-page min-h-screen bg-gray-100 flex">
      {/* Left Navigation Sidebar (Locked while scrolling) */}
      <div className="fixed top-0 left-0 h-screen w-56  z-20 overflow-y-auto">
        <NavigationBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-20"> {/* Adjusted to match sidebar width */}
        
        {/* Top Navigation (Fixed at the top of the page) */}
        <div className="fixed top-0 left-20 right-0 bg-teal-600 text-white z-10">
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="pt-20 p-6">
          {/* Routing for Dashboard, Projects, Teams, Tasks */}
          <Routes>
            <Route index element={<Dashboard />} />  {/* Default route for /workflow */}
            <Route path="projects" element={<Projects />} />
            <Route path="teams" element={<Teams />} />
            <Route path="tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
