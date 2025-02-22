// src/components/Workflow/MyTasks.jsx
import React from "react";
 import TaskList from "./TaskList"; // Reuse TaskList logic

const MyTasks = ({ tasks }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">My Tasks</h2>
      <TaskList data={tasks} />
    </div>
  );
};

export default MyTasks;
