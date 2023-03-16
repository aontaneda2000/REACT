/* Tener instalado react-hook-form */
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValue = {
  name: "",
  genre: "",
  duration: "",
  release_date: "",
};

/* Recibir getMovies para ejecutar en create movie y recibir state updateInfo para capturar inf en form */

/* setUpdateInfo sirve para cambiar la inf cuando se actualice a create */
const Form = ({ getMovies, updateInfo, setUpdateInfo, handleCloseForm }) => {
  /* Comprobar si trae la inf */
  console.log(updateInfo);

  /* useEffect Que se renderize Cuando cambie updateInf */
  useEffect(() => {
    /* Algun momento updateInf es undefined */
    if (updateInfo) {
      /* Tambien sirve para llenar inf  */
      reset(updateInfo);
    }

    /* Cada vez que cambie necesito que haga una carga deinf */
  }, [updateInfo]);

  /* Recibe como parametro data que recibe el objeto del bdd */
  const createMovie = (data) => {
    const URL = "https://movies-crud-academlo.herokuapp.com/movies/";

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        /* Peticion de nuevo y se recargue la pagina */
        getMovies();
      })
      .catch((err) => console.log(err));
  };

  /* Data recibe como parametro la inf */
  const updateMovie = (data) => {
    const URL = `https://movies-crud-academlo.herokuapp.com/movies/${updateInfo.id}/`;

    /*  */
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getMovies();
      })
      .catch((err) => console.log(err));
  };

  const { register, handleSubmit, reset } = useForm();

  /* data: captura la informacion del formulario (register) y necesitamos enviarla */
  const submit = (data) => {
    /* Si existe hago un update */
    if (updateInfo) {
      //UPDATE movie=> data de mi card
      updateMovie(data);
      /* recibe como props */
      setUpdateInfo();
    } else {
      /* Ejecutar funcion createMovie para crear */
      createMovie(data);
    }
    /* Si es update o create que resete la inf */
    reset(defaultValue);
    /* Ejecuta funcion cerrar modal */
    handleCloseForm();
  };

  /* Si existe update infque muestre update  */
  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <div onClick={handleCloseForm} className="form__equis">
        x
      </div>
      <h2 className="form__title">
        {updateInfo ? "Update Movie Info" : "Create New movie"}
      </h2>
      <ul className="form__list">
        <li className="form__item">
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" id="name" />
        </li>
        <li className="form__item">
          <label htmlFor="genre">Genre</label>
          <input {...register("genre")} type="text" id="genre" />
        </li>
        <li className="form__item">
          <label htmlFor="duration">Duration</label>
          <input {...register("duration")} type="text" id="duration" />
        </li>
        <li className="form__item">
          <label htmlFor="release-date">Release Date</label>
          <input {...register("release_date")} type="date" id="release-date" />
        </li>
      </ul>
      <button className="form__btn">{updateInfo ? "Update" : "Create "}</button>
    </form>
  );
};

export default Form;
