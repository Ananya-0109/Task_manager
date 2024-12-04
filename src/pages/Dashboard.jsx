import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const tasks = [
    { id: 1, title: "Finish project", status: "completed" },
    { id: 2, title: "Meeting with client", status: "pending" },
    { id: 3, title: "Write documentation", status: "completed" },
    { id: 4, title: "Fix bugs in code", status: "pending" },
    // Add more tasks here...
  ];

  // Filter tasks by search term and status filter
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by task title using searchTerm
    )
    .filter((task) => {
      if (filter === "all") return true;
      return task.status === filter; // Filter by task status
    });

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar toggleSidebar={() => {}} setSearchTerm={setSearchTerm} /> {/* Pass setSearchTerm to Navbar */}

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between mt-12">
          <h1 className="text-3xl font-bold text-white">Task Dashboard</h1>
        </header>

        {/* Widgets */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget: Website Analytics */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Website Analytics</h3>
            <div className="flex justify-between">
              <p>Total Conversion Rate</p>
              <span className="text-indigo-400 font-semibold">28.5%</span>
            </div>
          </div>

          {/* Widget: Average Daily Sales */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Average Daily Sales</h3>
            <div className="text-2xl font-bold">$28,450</div>
          </div>

          {/* Widget: Support Tracker */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Support Tracker</h3>
            <div className="flex items-center justify-between">
              <div>
                <p>Tickets</p>
                <span className="text-2xl font-bold">164</span>
              </div>
              <div>
                <p className="text-indigo-400">Completed Tasks</p>
                <span className="text-2xl font-bold">85%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="flex justify-center">
          <FilterBar setFilter={setFilter} />
        </div>

        {/* Add Task Button */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {showForm ? "Close Task Form" : "Add Task"}
          </button>
        </div>

        {/* Task Form */}
        {showForm && (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <TaskForm
              closeForm={() => setShowForm(false)}
              taskToEdit={taskToEdit}
            />
          </div>
        )}

        {/* Task List */}
        <div>
          <TaskList
            filter={filter}
            setShowForm={setShowForm}
            setTaskToEdit={setTaskToEdit}
            tasks={filteredTasks} // Pass filtered tasks to TaskList
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
