import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./views/Add";
import Cars from "./views/Cars";
import Update from "./views/Update";
import Login from "./views/Login"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;