import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import LandingPage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails"

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/task" element={<TaskDetails />} />
    {/* More routes can be added here */}
  </Routes>
);

export default App;
