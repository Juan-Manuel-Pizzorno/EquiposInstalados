
import { Routes, Route } from "react-router-dom";
import Logging from "./Components/Logging/Logging.jsx"

import './App.css'

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Logging />} />
      </Routes>
  );
};

export default App;