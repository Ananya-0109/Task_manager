import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); // State to store task being edited

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <div className="flex">
        

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Task Management Dashboard
          </h1>

          {/* Filter Bar */}
          <FilterBar setFilter={setFilter} />

          {/* Add Task Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              {showForm ? "Close Task Form" : "Add Task"}
            </button>
          </div>

          {/* Task Form */}
          {showForm && (
            <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
              <TaskForm
                closeForm={() => setShowForm(false)}
                taskToEdit={taskToEdit} // Pass the task to edit
              />
            </div>
          )}

          {/* Task List */}
          <div className="mt-6">
            <TaskList
              filter={filter}
              setShowForm={setShowForm}
              setTaskToEdit={setTaskToEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
