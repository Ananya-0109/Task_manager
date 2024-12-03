import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/taskSlice";
import TaskForm from "./TaskForm";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal

const TaskList = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access tasks from Redux state
  const [editingTask, setEditingTask] = useState(null); // Keep track of the task being edited
  const [showConfirmModal, setShowConfirmModal] = useState(false); // State to show/hide the confirmation modal
  const [taskToDelete, setTaskToDelete] = useState(null); // Keep track of the task to be deleted
  const dispatch = useDispatch();

  // Filter tasks based on the selected filter type (all, completed, pending, overdue)
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue") return new Date(task.dueDate) < new Date();
    return true;
  });

  // Handle task deletion with confirmation
  const handleDelete = (task) => {
    setTaskToDelete(task); // Set the task to be deleted
    setShowConfirmModal(true); // Show the confirmation modal
  };

  // Confirm the deletion
  const confirmDelete = () => {
    if (taskToDelete) {
      dispatch(deleteTask(taskToDelete.id));
    }
    setShowConfirmModal(false); // Close the modal after confirming
  };

  // Cancel the deletion
  const cancelDelete = () => {
    setShowConfirmModal(false); // Just close the modal if canceled
  };

  // Handle toggle of task completion status (mark as completed or pending)
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  // Handle editing task
  const handleEdit = (task) => {
    setEditingTask(task); // Set the task being edited
  };

  // Close the edit form
  const closeForm = () => {
    setEditingTask(null); // Close the form
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Task List</h2>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-500">{task.title}</h3>
            <p className="text-gray-300">{task.description}</p>
            <p className="text-sm text-gray-400">
              Due Date: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleToggleComplete(task.id)}
                className={`${
                  task.completed
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                } text-white px-4 py-2 rounded`}
              >
                {task.completed ? "Mark as Pending" : "Mark as Completed"}
              </button>
              <button
                onClick={() => handleEdit(task)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task)} // Show the confirmation modal when delete is clicked
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No tasks available for this filter.</p>
      )}

      {/* Show TaskForm when editing a task */}
      {editingTask && (
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <TaskForm existingTask={editingTask} closeForm={closeForm} />
        </div>
      )}

      {/* Show Confirmation Modal for Delete */}
      {showConfirmModal && (
        <ConfirmationModal
          message="Delete this task?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default TaskList;
