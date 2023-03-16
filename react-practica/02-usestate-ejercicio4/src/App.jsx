import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import users from "./json/users.json";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card users={users} />
    </div>
  );
}

export default App;
