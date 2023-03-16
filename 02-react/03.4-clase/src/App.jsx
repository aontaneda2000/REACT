import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import FormSubmit from "./components/FormSubmit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Clase 3.4</h1>
      <Form />
      <hr />
      <FormSubmit />
    </div>
  );
}

export default App;
