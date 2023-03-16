import React, { useState } from "react";

/* Controlar input controlado y no controlado */
/* Ejemplo de no controlado : Es cuando se realiza submit en el formulario */
const Form = () => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  /*  if (search === "gen16") {
    setSearch("Soy alumno de academlo");
  } */
  console.log(search);
  return (
    <form>
      <h2>Form</h2>
      <input type="text" name="" value={search} id="" onChange={handleInput} />
      <h1>Valor de search: {search}</h1>
    </form>
  );
};

export default Form;
