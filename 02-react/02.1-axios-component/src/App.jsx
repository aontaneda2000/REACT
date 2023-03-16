import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import User from "./components/User.jsx";

function App() {
  return (
    <div className="App">
      <User />
      <User />
    </div>
  );
}

export default App;
