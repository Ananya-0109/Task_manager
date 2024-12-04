import React from "react";

const FilterBar = ({ setFilter }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      {["all", "completed", "pending", "overdue"].map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
