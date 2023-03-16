import React from "react";
import { useState } from "react";

const Ejercicio1 = () => {
  const [count, setCount] = useState(true);

  const handleClick = () => {
    setCount(!count);
  };
  return (
    <div>
      <h1>Ejercicio 1- uso basico</h1>
      <p>{count ? "Estado actual " : "Cambio el estado "} </p>
      <button onClick={handleClick}>Cambiar mensaje</button>
    </div>
  );
};

export default Ejercicio1;
