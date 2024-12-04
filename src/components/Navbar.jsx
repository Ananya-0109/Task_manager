import React, { useState } from "react";

const Navbar = ({ toggleSidebar, setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState(""); // Track search input state

  const handleSearch = () => {
    setSearchTerm(searchInput); // Pass the search input to parent
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Sidebar Toggle Button (Visible only on smaller screens) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>

        {/* Logo/Brand */}
        <h1 className="text-xl font-bold">TaskPro</h1>

        {/* Navigation Links (Centered for larger screens) */}
        <ul className="hidden lg:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <a
              href="/"
              className="hover:text-indigo-400 transition"
              aria-label="Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-indigo-400 transition"
              aria-label="Features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="hover:text-indigo-400 transition"
              aria-label="How It Works"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="hover:text-indigo-400 transition"
              aria-label="Contact"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)} // Handle input change
            className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSearch} // Call the search function
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
