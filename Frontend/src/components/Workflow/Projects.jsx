// import React from 'react';
// import { Plus, MoreVertical } from 'lucide-react';

// function Projects() {
//   const projects = [
//     {
//       name: 'Website Redesign',
//       progress: 75,
//       team: ['John D.', 'Sarah M.', 'Mike R.'],
//       status: 'In Progress',
//       deadline: '2024-03-25'
//     },
//     {
//       name: 'Mobile App Development',
//       progress: 45,
//       team: ['Alex K.', 'Emma S.'],
//       status: 'In Progress',
//       deadline: '2024-04-15'
//     },
//     {
//       name: 'Marketing Campaign',
//       progress: 90,
//       team: ['Tom B.', 'Lisa P.', 'Chris M.'],
//       status: 'Review',
//       deadline: '2024-03-20'
//     }
//   ];

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
//         <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
//           <Plus className="w-5 h-5 mr-2" />
//           New Project
//         </button>
//       </div>

//       <div className="grid gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
//                 <p className="text-sm text-gray-600">Due {project.deadline}</p>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MoreVertical className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="mb-4">
//               <div className="flex justify-between mb-2">
//                 <span className="text-sm text-gray-600">Progress</span>
//                 <span className="text-sm font-medium">{project.progress}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="bg-teal-600 h-2 rounded-full" 
//                   style={{ width: `${project.progress}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="flex -space-x-2">
//                 {project.team.map((member, i) => (
//                   <div 
//                     key={i}
//                     className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center border-2 border-white"
//                   >
//                     <span className="text-xs font-medium text-teal-800">
//                       {member.split(' ')[0][0]}{member.split(' ')[1][0]}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <span className={`px-3 py-1 text-sm rounded-full ${
//                 project.status === 'Review' 
//                   ? 'bg-yellow-100 text-yellow-800' 
//                   : 'bg-teal-100 text-teal-800'
//               }`}>
//                 {project.status}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
import React, { useEffect, useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://worknix-ch5r.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  const handleAddProject = async () => {
    const newProject = {
      name: "New Project",
      description: "Description here",
      status: "In Progress",
      timeline: ["2025-02-25", "2025-03-10"],
    };

    try {
      const response = await fetch("https://worknix-ch5r.onrender.com/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      const data = await response.json();
      setProjects([...projects, data.project]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        <button 
          onClick={handleAddProject}
          className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                <p className="text-sm text-gray-600">Due {project.timeline[1]}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{project.progress || 0}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full" 
                  style={{ width: `${project.progress || 0}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 text-sm rounded-full ${
                project.status === 'Review' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-teal-100 text-teal-800'
              }`}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;