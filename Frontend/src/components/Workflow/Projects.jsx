// // import React from 'react';
// // import { Plus, MoreVertical } from 'lucide-react';

// // function Projects() {
// //   const projects = [
// //     {
// //       name: 'Website Redesign',
// //       progress: 75,
// //       team: ['John D.', 'Sarah M.', 'Mike R.'],
// //       status: 'In Progress',
// //       deadline: '2024-03-25'
// //     },
// //     {
// //       name: 'Mobile App Development',
// //       progress: 45,
// //       team: ['Alex K.', 'Emma S.'],
// //       status: 'In Progress',
// //       deadline: '2024-04-15'
// //     },
// //     {
// //       name: 'Marketing Campaign',
// //       progress: 90,
// //       team: ['Tom B.', 'Lisa P.', 'Chris M.'],
// //       status: 'Review',
// //       deadline: '2024-03-20'
// //     }
// //   ];

// //   return (
// //     <div>
// //       <div className="flex justify-between items-center mb-8">
// //         <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
// //         <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
// //           <Plus className="w-5 h-5 mr-2" />
// //           New Project
// //         </button>
// //       </div>

// //       <div className="grid gap-6">
// //         {projects.map((project, index) => (
// //           <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
// //             <div className="flex justify-between items-start mb-4">
// //               <div>
// //                 <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
// //                 <p className="text-sm text-gray-600">Due {project.deadline}</p>
// //               </div>
// //               <button className="text-gray-400 hover:text-gray-600">
// //                 <MoreVertical className="w-5 h-5" />
// //               </button>
// //             </div>

// //             <div className="mb-4">
// //               <div className="flex justify-between mb-2">
// //                 <span className="text-sm text-gray-600">Progress</span>
// //                 <span className="text-sm font-medium">{project.progress}%</span>
// //               </div>
// //               <div className="w-full bg-gray-200 rounded-full h-2">
// //                 <div 
// //                   className="bg-teal-600 h-2 rounded-full" 
// //                   style={{ width: `${project.progress}%` }}
// //                 ></div>
// //               </div>
// //             </div>

// //             <div className="flex justify-between items-center">
// //               <div className="flex -space-x-2">
// //                 {project.team.map((member, i) => (
// //                   <div 
// //                     key={i}
// //                     className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center border-2 border-white"
// //                   >
// //                     <span className="text-xs font-medium text-teal-800">
// //                       {member.split(' ')[0][0]}{member.split(' ')[1][0]}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //               <span className={`px-3 py-1 text-sm rounded-full ${
// //                 project.status === 'Review' 
// //                   ? 'bg-yellow-100 text-yellow-800' 
// //                   : 'bg-teal-100 text-teal-800'
// //               }`}>
// //                 {project.status}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Projects;
// import React, { useEffect, useState } from 'react';
// import { Plus, MoreVertical } from 'lucide-react';

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://worknix-ch5r.onrender.com/api/projects")
//       .then((response) => response.json())
//       .then((data) => {
//         setProjects(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects");
//         setLoading(false);
//       });
//   }, []);

//   const handleAddProject = async () => {
//     const newProject = {
//       name: "New Project",
//       description: "Description here",
//       status: "In Progress",
//       timeline: ["2025-02-25", "2025-03-10"],
//     };

//     try {
//       const response = await fetch("https://worknix-ch5r.onrender.com/api/projects", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newProject),
//       });
//       const data = await response.json();
//       setProjects([...projects, data.project]);
//     } catch (error) {
//       console.error("Error adding project:", error);
//     }
//   };

//   if (loading) return <p>Loading projects...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
//         <button 
//           onClick={handleAddProject}
//           className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
//         >
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
//                 <p className="text-sm text-gray-600">Due {project.timeline[1]}</p>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <MoreVertical className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="mb-4">
//               <div className="flex justify-between mb-2">
//                 <span className="text-sm text-gray-600">Progress</span>
//                 <span className="text-sm font-medium">{project.progress || 0}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="bg-teal-600 h-2 rounded-full" 
//                   style={{ width: `${project.progress || 0}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
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
import { Plus, MoreVertical, X, Edit2, UserPlus, Trash2 } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, onSubmit, editingProject }) => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    status: 'In Progress',
    timeline: ['', ''],
    progress: 0,
    members: []
  });
  const [newMember, setNewMember] = useState('');

  useEffect(() => {
    if (editingProject) {
      setProject({
        ...editingProject,
        members: editingProject.members || [] // Ensure members is always an array
      });
    } else {
      setProject({
        name: '',
        description: '',
        status: 'In Progress',
        timeline: ['', ''],
        progress: 0,
        members: []
      });
    }
  }, [editingProject]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...project,
      members: project.members || [] // Ensure members is always an array when submitting
    });
  };

  const addMember = () => {
    if (newMember.trim()) {
      setProject(prev => ({
        ...prev,
        members: [...(prev.members || []), newMember.trim()]
      }));
      setNewMember('');
    }
  };

  const removeMember = (index) => {
    setProject(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }));
  };

  const handleProgressChange = (value) => {
    const progress = Math.min(Math.max(0, value), 100);
    setProject(prev => ({
      ...prev,
      progress,
      status: progress === 100 ? 'Completed' : prev.status
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{editingProject ? 'Edit Project' : 'New Project'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                value={project.name}
                onChange={e => setProject({ ...project, name: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={e => setProject({ ...project, description: e.target.value })}
                className="w-full p-2 border rounded-lg"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={project.status}
                  onChange={e => setProject({ ...project, status: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                >
                  <option>Not Started</option>
                  <option>In Progress</option>
                  <option>Review</option>
                  <option>Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Progress ({project.progress}%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={project.progress}
                  onChange={e => handleProgressChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  value={project.timeline[0]}
                  onChange={e => setProject({ ...project, timeline: [e.target.value, project.timeline[1]] })}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="date"
                  value={project.timeline[1]}
                  onChange={e => setProject({ ...project, timeline: [project.timeline[0], e.target.value] })}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Team Members</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="email"
                  value={newMember}
                  onChange={e => setNewMember(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 p-2 border rounded-lg"
                  onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addMember())}
                />
                <button
                  type="button"
                  onClick={addMember}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 flex items-center"
                >
                  <UserPlus className="w-4 h-4 mr-1" />
                  Add
                </button>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {(project.members || []).map((member, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg group">
                    <span>{member}</span>
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              {editingProject ? 'Save Changes' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://worknix-ch5r.onrender.com/api/projects");
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectSubmit = async (projectData) => {
    try {
      const method = editingProject ? "PUT" : "POST";
      const url = editingProject 
        ? `https://worknix-ch5r.onrender.com/api/projects/${editingProject.id}`
        : "https://worknix-ch5r.onrender.com/api/projects";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save project');
      }

      const data = await response.json();

      if (editingProject) {
        setProjects(projects.map(p => p.id === editingProject.id ? data.project : p));
      } else {
        setProjects([...projects, data.project]);
      }

      setIsModalOpen(false);
      setEditingProject(null);
      fetchProjects(); // Refresh the projects list
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Please try again.");
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        <button 
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                <p className="text-sm text-gray-600">Due {project.timeline[1]}</p>
              </div>
              <button 
                onClick={() => handleEditProject(project)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Edit2 className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 text-sm rounded-full ${
                project.status === 'Review' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : project.status === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-teal-100 text-teal-800'
              }`}>
                {project.status}
              </span>
              
              <div className="flex items-center gap-2">
                {project.members && project.members.length > 0 && (
                  <div className="flex -space-x-2">
                    {project.members.map((member, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium border-2 border-white"
                        title={member}
                      >
                        {member[0].toUpperCase()}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProject(null);
        }}
        onSubmit={handleProjectSubmit}
        editingProject={editingProject}
      />
    </div>
  );
}

export default Projects;