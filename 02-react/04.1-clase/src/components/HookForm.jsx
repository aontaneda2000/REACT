import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

/* valores por defecto */
const defaultValue = {
  brand: "",
  model: "",
  color: "",
  year: "",

  price: "",
};

const HookForm = ({ createNewCar, updateInfo, setUpdateInfo }) => {
  /* No se necesita eventPreventDefault con react hook form */

  /* reset es una funcion() */
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    // console.log(data);
    if (updateInfo) {
      //update
      const URL = `https://cars-crud.herokuapp.com/cars/${updateInfo.id}/`;

      axios
        .patch(URL, data)
        .then((res) => {
          console.log(res.data);
          getAllCars();
        })
        .catch((err) => console.log(err));
      reset(defaultValue);
      setUpdateInfo();
    } else {
      //create
      createNewCar(data);
      reset(defaultValue);
    }
  };

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  /* Handlesubmit controla el formulario "e.target" */
  {
    /* Forma de capturar la inf de este input */
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <hr />
      <h2>{updateInfo ? "Update car" : "Creat car"}</h2>
      <div>
        <label htmlFor="brand">Brand: </label>
        <input {...register("brand")} type="text" id="brand" />
      </div>
      <div>
        <label htmlFor="model">Model: </label>
        <input {...register("model")} type="text" id="model" />
      </div>
      <div>
        <label htmlFor="color">Color: </label>
        <input {...register("color")} type="text" id="color" />
      </div>
      <div>
        <label htmlFor="year">Year: </label>
        <input {...register("year")} type="text" id="year" />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input {...register("price")} type="text" id="price" />
      </div>
      <button>{updateInfo ? "Update " : "Creat "}</button>
      <hr />
    </form>
  );
};

export default HookForm;

/* <form onSubmit={handleSubmit(submit)}>
      <hr />
      <div>
        <label htmlFor="brand">Brand: </label>
        <input {...register('brand')} type="text" id='brand' />
      </div>
      <div>
        <label htmlFor="model">Model: </label>
        <input {...register('model')} type="text" id='model' />
      </div>
      <div>
        <label htmlFor="color">Color: </label>
        <input {...register('color')} type="text" id='color' />
      </div>
      <div>
        <label htmlFor="year">Year: </label>
        <input {...register('year')} type="text" id='year' />
      </div>
      <div>
        <label htmlFor="price">Year: </label>
        <input {...register('price')} type="text" id='price' />
      </div>
      <button>Submit</button>
      <hr />
    </form>
 */
