import axios from "axios";
import React from "react";

const CardMovies = ({ movie, getMovies, setUpdateInfo, handleOpenForm }) => {
  /* Funcion eliminar card movie: recibe el id en la URL */
  const deleteMovie = () => {
    const URL = `https://movies-crud-academlo.herokuapp.com/movies/${movie.id}/`;

    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getMovies();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateClick = () => {
    setUpdateInfo(movie);
    handleOpenForm();
  };

  return (
    <article className="card">
      <h2 className="card__title">{movie.name}</h2>
      <hr className="card__hr" />
      <ul className="card__list">
        <li className="card__item">
          Genre: <span className="card__span">{movie.genre}</span>
        </li>
        <li className="card__item">
          Duration: <span className="card__span">{movie.duration}</span>
        </li>
        <li className="card__item">
          Release Date:{" "}
          <span className="card__span">{movie["release_date"]}</span>
        </li>
      </ul>

      <footer className="card__footer">
        <button onClick={deleteMovie} className="card__btn">
          Delete
        </button>
        <button onClick={handleUpdateClick} className="card__btn">
          Update
        </button>
      </footer>
    </article>
  );
};

export default CardMovies;
