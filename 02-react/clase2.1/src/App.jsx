import { useState } from "react";
import "./App.css";
import colors from "./utils/colors.js";

function App() {
  const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.lenth);
    return arr[randomIndex];
  };

  const [typeInput, setTypeInput] = useState("password");

  const [count, setCount] = useState(0);

  const [color, setColor] = useState();

  const handleTypeInput = () => {
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  };

  const [show, setShow] = useState(true);

  const change = () => {
    setShow(!show);
  };

  useEffect(() => {
    const randomColor = getRandomElement(colors);
    setColor(randomColor);
  }, []);

  return (
    <div className="App">
      <label htmlFor="">Contraseña</label>
      <input type={typeInput} />

      <button onClick={handleTypeInput}>Show/hide</button>

      <hr />
      <div>
        <h1>{count}</h1>
        <button></button>
      </div>
    </div>
  );
}

export default App;
