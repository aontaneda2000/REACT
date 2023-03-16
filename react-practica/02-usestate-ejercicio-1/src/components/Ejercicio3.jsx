import React from "react";
import { useState } from "react";

const Ejercicio3 = ({ isOn, handleClick }) => {
  return (
    <div>
      <h2>Ejercicio 2 - uso bombillo</h2>
      <div className={isOn ? "on" : "off"}></div>
      <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>
    </div>
  );
};

export default Ejercicio3;
