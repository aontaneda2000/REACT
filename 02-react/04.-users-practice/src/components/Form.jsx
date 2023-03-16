import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ getAllUsers }) => {
  const { handleSubmit, reset, register } = useForm();

  /* Funcion crear usuario */

  const CreateUser = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const submit = (data) => {
    CreateUser(data);
  };

  return (
    <form onClick={handleSubmit(submit)} className="form">
      <input {...register("first_name")} type="text" placeholder="First name" />
      <input {...register("last_name")} type="text" placeholder="Last name" />
      <input {...register("email")} type="email" placeholder="email" />
      <input {...register("birthday")} type="date" placeholder="Birthday" />
      <input {...register("password")} type="password" placeholder="Password" />
      <br />
      <button className="card__btn">Create</button>
    </form>
  );
};

export default Form;
