/* Reutilizar y so instancias completamente distintas  */
import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  /* Contador inicializa en 10 */
  const { reset, increment, counter, decrement } = useCounter(10);

  return (
    <div>
      <h2>Counter Counter</h2>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
