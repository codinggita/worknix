import React, { useState } from 'react';
import { Plus, Calendar, Clock, X } from 'lucide-react';

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      title: 'Design System Updates',
      description: 'Update the design system documentation with new components',
      assignee: 'John Doe',
      priority: 'High',
      dueDate: '2024-03-20',
      status: 'In Progress'
    },
    {
      title: 'Bug Fixes for Release',
      description: 'Address critical bugs reported in the latest release',
      assignee: 'Sarah Smith',
      priority: 'Urgent',
      dueDate: '2024-03-18',
      status: 'Review'
    },
    {
      title: 'Feature Implementation',
      description: 'Implement new user dashboard features',
      assignee: 'Mike Johnson',
      priority: 'Medium',
      dueDate: '2024-03-25',
      status: 'Todo'
    }
  ]);

  const [showCreateTask, setShowCreateTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'Medium',
    dueDate: '',
    status: 'Todo'
  });

  const priorities = ['Low', 'Medium', 'High', 'Urgent'];
  const statuses = ['Todo', 'In Progress', 'Review', 'Completed'];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'bg-teal-100 text-teal-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setShowCreateTask(false);
    setNewTask({
      title: '',
      description: '',
      assignee: '',
      priority: 'Medium',
      dueDate: '',
      status: 'Todo'
    });
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-7 ml-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
        <button
          onClick={() => setShowCreateTask(true)}
          className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Task
        </button>
      </div>

      <div className="space-y-4 mt-7">
        {tasks.map((task, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
                <p className="text-gray-600 mt-1">{task.description}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-7">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                    <span className="text-sm font-medium text-teal-800">
                      {task.assignee.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{task.assignee}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{task.dueDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">2 days left</span>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;