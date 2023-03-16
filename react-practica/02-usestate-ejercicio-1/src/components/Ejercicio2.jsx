import React from "react";
import "./styles/ejercicio2.css";
import { useState } from "react";
import Ejercicio3 from "./Ejercicio3";

const Ejercicio2 = () => {
  const [isOn, setIsOff] = useState(true);

  const handleClick = () => {
    setIsOff(!isOn);
  };

  return (
    <div>
      <Ejercicio3 isOn={isOn} handleClick={handleClick} />
      <Ejercicio3 isOn={isOn} handleClick={handleClick} />
    </div>
  );
};

export default Ejercicio2;
