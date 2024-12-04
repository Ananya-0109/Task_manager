import React, { useState } from "react";

const Navbar = ({ setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>

        {/* Title */}
        <h1 className="text-xl font-bold">TaskPro</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <a href="/" className="hover:text-indigo-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-indigo-400 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-indigo-400 transition">
              How It Works
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 p-4 w-64 rounded-lg shadow-lg transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-white hover:text-indigo-400">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="text-white hover:text-indigo-400">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-white hover:text-indigo-400">
                How It Works
              </a>
            </li>
            <li>
              <a href="#footer" className="text-white hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSearch}
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
