import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === parseInt(id))
  );

  if (!task) {
    return (
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold text-red-500">Task Not Found</h1>
        <button
          onClick={() => navigate("/tasks")}
          className="mt-4 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition duration-200"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span> {task.description}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Due Date:</span>{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>
      <p className="text-gray-700 mb-6">
        <span className="font-semibold">Status:</span>{" "}
        {task.completed ? "Completed" : "Pending"}
      </p>
      <button
        onClick={() => navigate("/tasks")}
        className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition duration-200"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default TaskDetails;
