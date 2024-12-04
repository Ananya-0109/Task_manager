import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/taskSlice";
import TaskForm from "./TaskForm";
import ConfirmationModal from "./ConfirmationModal";

const TaskList = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue") return new Date(task.dueDate) < new Date();
    return true;
  });

  const handleDelete = (task) => {
    setTaskToDelete(task);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      dispatch(deleteTask(taskToDelete.id));
    }
    setShowConfirmModal(false);
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const closeForm = () => {
    setEditingTask(null);
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
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleToggleComplete(task.id)}
                className={`px-4 py-2 rounded-lg ${
                  task.completed
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {task.completed ? "Completed" : "Mark as Complete"}
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(task)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No tasks available</p>
      )}
      {editingTask && (
        <TaskForm existingTask={editingTask} closeForm={closeForm} />
      )}
      {showConfirmModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default TaskList;
