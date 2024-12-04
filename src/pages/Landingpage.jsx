import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <></>
  // <div
  //   className={`fixed inset-y-0 left-0 bg-gray-800 text-gray-300 w-48 lg:w-64 transform ${
  //     isOpen ? "translate-x-0" : "-translate-x-full"
  //   } transition-transform duration-300 lg:translate-x-0 z-20`}
  // >
  //   <div className="p-4 z-30">
  //     <h2 className="text-xl font-bold mb-4">TaskPro</h2>
  //     <ul className="space-y-3">
  //       <li className="hover:bg-indigo-700">
  //         <a href="/dashboard" className="flex items-center space-x-2">
  //           <span>🏠</span>
  //           <span>Dashboards</span>
  //         </a>
  //       </li>
  //       <li className="hover:bg-indigo-700">
  //         <a href="#" className="flex items-center space-x-2">
  //           <span>📊</span>
  //           <span>Analytics</span>
  //         </a>
  //       </li>
  //       <li className="hover:bg-indigo-700">
  //         <a href="#" className="flex items-center space-x-2">
  //           <span>🛒</span>
  //           <span>eCommerce</span>
  //         </a>
  //       </li>
  //       <li className="hover:bg-indigo-700">
  //         <a href="#" className="flex items-center space-x-2">
  //           <span>📦</span>
  //           <span>Logistics</span>
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
);

const Navbar = ({ toggleSidebar }) => (
  <nav className="bg-gray-900 text-white p-4 shadow-md z-10">
    <div className="container mx-auto flex justify-between items-center">
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-white focus:outline-none"
      >
        ☰
      </button>
      <h1 className="text-xl font-bold">TaskPro</h1>
      <ul className="hidden lg:flex space-x-6">
        <li>
          <a href="/dashboard" className="hover:text-indigo-400 transition">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/task" className="hover:text-indigo-400 transition">
            Task Details
          </a>
        </li>
        <li>
          <a href="#footer" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white p-6">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} TaskPro. All rights reserved.</p>
    </div>
  </footer>
);

const LandingPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Section */}
      <main
        className={`flex-1 container mx-auto px-6 py-16 transition-all duration-300 ${
          isSidebarOpen && "lg:pl-64"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Description */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">
              Welcome to TaskPro Dashboard
            </h1>
            <p className="text-gray-300 mb-4">
              Streamline your productivity with TaskPro, a user-friendly task
              management dashboard designed to keep you organized. Manage your
              tasks effortlessly, filter based on status, and never miss a
              deadline.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>✔️ Add, edit, delete, and complete tasks easily.</li>
              <li>✔️ Filter tasks by completion, pending, and overdue.</li>
              <li>✔️ Intuitive, modern, and responsive design.</li>
            </ul>
            <ul>
              <li>
                {/* Link to Dashboard */}
                <Link to="/dashboard">
                  <button className="mt-6 bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
