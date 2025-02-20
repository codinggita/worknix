// src/components/Workflow/CreateTask.jsx
import React, { useState } from "react";

const CreateTask = ({ assignTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    assignee: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    assignTask(formData);
    setFormData({ title: "", description: "", date: "", assignee: "", category: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block font-medium mb-1">Task Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-2 border rounded"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-3">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full p-2 border rounded"
            placeholder="Task description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="block font-medium mb-1">Due Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block font-medium mb-1">Assign To</label>
          <input
            type="text"
            value={formData.assignee}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, assignee: e.target.value }))
            }
            className="w-full p-2 border rounded"
            placeholder="Employee name"
          />
        </div>
        <div className="mb-3">
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            className="w-full p-2 border rounded"
            placeholder="E.g., Development, Design"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
