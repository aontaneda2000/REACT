import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";
import Counter from "./components/Counter";

function App() {
  /* Nombres del archivo useCounter */
  /* No es necesario llamar a todos los elementos  */
  const { counter, increment, reset, decrement } = useCounter(0, 5, -10, 8);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
      <Counter />
    </div>
  );
}

export default App;
