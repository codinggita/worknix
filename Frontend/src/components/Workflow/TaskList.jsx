import React from 'react';

const TaskList = ({ tasks = [] }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-800">Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

