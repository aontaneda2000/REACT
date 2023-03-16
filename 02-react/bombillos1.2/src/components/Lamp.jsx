import React, { useState } from "react";

const Lamp = () => {
  const [onOff, setOnOff] = useState("off");

  const toggleOnOff = () => {
    if (onOff === "off") {
      setOnOff("on");
    } else {
      setOnOff("off");
    }
  };
  return (
    <div className="lamp-container">
      <div className={`circle ${onOff}`}></div>
      <button onClick={toggleOnOff} className="btn">
        {onOff}
      </button>
    </div>
  );
};

export default Lamp;
