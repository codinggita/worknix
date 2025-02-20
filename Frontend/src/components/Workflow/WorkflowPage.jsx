// src/components/Workflow/WorkflowPage.jsx
import React, { useState } from "react";
import Header from "./Header";
import MyTasks from "./MyTasks";
import TeamTasks from "./TeamTasks";
import CreateTask from "./CreateTask";

const WorkflowPage = () => {
  const [tasks, setTasks] = useState([
    /* Pre-fill with your tasks data */
  ]);
  const [teamData, setTeamData] = useState([
    /* Pre-fill with team data */
  ]);

  const assignTask = (taskData) => {
    // Logic to assign task
    console.log("Assigning Task:", taskData);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <Header username="John Doe" />
      <div className="grid grid-cols-3 gap-5">
        <MyTasks tasks={tasks} />
        <TeamTasks teamData={teamData} />
        <CreateTask assignTask={assignTask} />
      </div>
    </div>
  );
};

export default WorkflowPage;
