import axios from "axios";
import React from "react";

const CardCars = ({ car, getAllCars, setUpdateInfo }) => {
  const deletCardById = (id) => {
    const URL = `https://cars-crud.herokuapp.com/cars/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllCars();
      })
      .catch((err) => console.log(err));
  };

  const getInfoUpdate = () => {
    setUpdateInfo(car);
  };

  return (
    <article className="card">
      <p>{`${car.id}  ${car.color} `}</p>
      <p>{`${car.price}  `}</p>
      <button onClick={() => deletCardById(car.id)} className="btn-delete">
        Delete this card
      </button>
      <button className="btn-update" onClick={getInfoUpdate}>
        Update info
      </button>
    </article>
  );
};

export default CardCars;
