import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import LandingPage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* More routes can be added here */}
  </Routes>
);

export default App;
