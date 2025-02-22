// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   FolderKanban, 
//   CheckSquare, 
//   Users
// } from 'lucide-react';

// function Navbar() {
//   const navItems = [
//     { icon: LayoutDashboard, text: 'Dashboard', path: '/' },
//     { icon: FolderKanban, text: 'Projects', path: '/projects' },
//     { icon: CheckSquare, text: 'Tasks', path: '/tasks' },
//     { icon: Users, text: 'Teams', path: '/teams' },
//   ];

//   return (
//     <nav className="bg-teal-600 text-white px-6 py-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold mr-8">WorkFlow</h1>
//           <div className="flex space-x-6">
//             {navItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors ${
//                     isActive ? 'bg-teal-700' : ''
//                   }`
//                 }
//               >
//                 <item.icon className="w-5 h-5 mr-2" />
//                 <span>{item.text}</span>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, FolderKanban, CheckSquare, Users } from "lucide-react";

function Navbar() {
  const navItems = [
    { icon: LayoutDashboard, text: "Dashboard", path: "/workflow" },
    { icon: FolderKanban, text: "Projects", path: "/workflow/projects" },
    { icon: CheckSquare, text: "Tasks", path: "/workflow/tasks" },
    { icon: Users, text: "Teams", path: "/workflow/teams" },
  ];

  return (
    <nav className="bg-teal-600 text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-8">WorkFlow</h1>
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors ${
                    isActive ? "bg-teal-700" : ""
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
