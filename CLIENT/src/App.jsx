
import { Routes, Route } from "react-router-dom";
import Logging from "./Components/Logging/Logging.jsx"
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

import './App.css'

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Logging />} />
          <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
  );
};

export default App;