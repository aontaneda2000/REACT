import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Image from "./components/Image.jsx";

function App() {
  /* Count= valor setCount = Modifica a count */
  const [count, setCount] = useState(false);

  console.log(count);

  const change = () => setCount(!count);

  return (
    <div className="App">
      {count ? <Image /> : <h1>Elemento oculto</h1>}
      <button onClick={change}>Cambia el vvalor</button>
    </div>
  );
}

export default App;
