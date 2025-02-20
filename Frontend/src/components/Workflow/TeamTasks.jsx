// src/components/Workflow/TeamTasks.jsx
import React from "react";

const TeamTasks = ({ teamData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Team Task Overview
      </h2>
      <div className="space-y-2">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 border-b border-gray-300"
          >
            <span className="font-medium">{member.name}</span>
            <span>New: {member.taskCounts.newTask}</span>
            <span>Active: {member.taskCounts.active}</span>
            <span>Completed: {member.taskCounts.completed}</span>
            <span>Failed: {member.taskCounts.failed}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTasks;
