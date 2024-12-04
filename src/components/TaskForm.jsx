import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/taskSlice";

const TaskForm = ({ existingTask, closeForm }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
    ...existingTask, // Pre-fill the form if editing an existing task
  });

  const dispatch = useDispatch();

  // Populate the form fields with existing task data (if provided)
  useEffect(() => {
    if (existingTask) {
      setTask(existingTask);
    }
  }, [existingTask]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      // If editing, dispatch the editTask action with the updated task data
      dispatch(editTask({ id: task.id, updates: task }));
    } else {
      // If adding a new task, dispatch addTask
      dispatch(addTask({ ...task, id: Date.now() }));
    }

    // Close the form after submission
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
        className="w-full p-3 border text-black border-gray-300 rounded-lg"
      />
      
      {/* Description */}
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="w-full p-3 border text-black border-gray-300 rounded-lg"
      />
      
      {/* Due Date */}
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full p-3 border text-black border-gray-300 rounded-lg"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-indigo-500 text-black px-6 py-2 rounded hover:bg-indigo-600 transition duration-200"
      >
        {task.id ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
