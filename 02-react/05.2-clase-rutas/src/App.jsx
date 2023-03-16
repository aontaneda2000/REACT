import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const [first, setfirst] = useState(second);

  return (
    <div className="App">
      {/* Se utiliza por que en netlife daria error porque nuesta app es SPA es decir de una sola pagina donde esta tod laf */}
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About me</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Route>

          <Route path="/projects" element={<h1>Projects</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
