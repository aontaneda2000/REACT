import React from "react";

const Card = ({ obj }) => {
  return (
    <div className={`App list${obj[0]}`}>
      <h1>Hobbies</h1>
      <ul>
        <li>{obj[0]}</li>
        <li>{obj[1]}</li>
      </ul>
    </div>
  );
};

export default Card;
