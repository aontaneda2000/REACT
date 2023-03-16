import React from "react";
import { useState } from "react";

/* Input no controlados */
const FormSubmit = () => {
  const [formInfo, setFormInfo] = useState();

  const handdleSubmit = (e) => {
    /* Sirve para no recargar la pagina y no borre la informacion del formulario */
    e.preventDefault();
    /* Manejo del DOM */
    /* Pinta en consola el input .name */
    /* console.log(e.target.name); */
    const obj = {};

    /* target es el formulario */
    /* hijo es el name y value es el valor que estan de lo que se escribe  */
    obj.name = e.target.name.value;
    obj.lastname = e.target.lastname.value;
    obj.email = e.target.email.value;
    setFormInfo(obj);
  };

  console.log(formInfo);

  return (
    <form onSubmit={handdleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="" id="name" placeholder="name" />
      <label htmlFor="lastname">Apellido:</label>
      <input type="text" name="" id="lastname" placeholder="lastname" />

      <label htmlFor="email">Email</label>
      <input type="email" name="" id="email" placeholder="email" />
      <button>Submit</button>
    </form>
  );
};

export default FormSubmit;
