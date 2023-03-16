import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Error404 from "./components/Error404";
import CharacterId from "./components/CharacterId";
import ParentRoute from "./components/ParentRoute";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Go to home</Link>
            </li>
            <li>
              <Link to="/aboutme">Go to aboutme</Link>
            </li>
            <li>
              <Link to="/contact">Go to contact</Link>
            </li>
            <li>
              <Link to="/project">Go to project</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* ruta home p principal sin ningun path o "localhost" / y element y recibe como valor es jsx*/}
      <Routes>
        <Route element={<ParentRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/character/:id" element={<CharacterId />} />
          <Route
            path="/character/saludar"
            element={<h1>Saludando desde character</h1>}
          />
        </Route>
      </Routes>
      <footer>
        <h2>Soy un footer</h2>
      </footer>
    </div>
  );
}

export default App;
