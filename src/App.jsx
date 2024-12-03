// Correct: Do NOT include another <BrowserRouter>
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/task/:id" element={<TaskDetails />} />
    </Routes>
  );
};

export default App;
