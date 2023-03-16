import React from "react";

const Car = ({ car }) => {
  return (
    <article>
      <ul>
        <li>{car.id}</li>
        <li>{car.brand}</li>
        <li>{car.model}</li>
        <li>{car.price}</li>
        <li>{car.year}</li>
      </ul>
    </article>
  );
};

export default Car;
