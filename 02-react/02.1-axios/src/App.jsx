import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    /* Guardar url en una variable */
    const URL = "https://randomuser.me/api/";
    /* Peticion asincrona */
    axios
      .get(URL)
      /* Metodos de promesas: recibida y rechazo */
      /* then: Se queda esperando y se ejecuta cuanndo llega la respuesta */
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err.data));
  }, []);

  /* Encadenamiento opcional */
  console.log(user);
  return (
    <div className="App">
      <img src={user?.picture.medium} alt="" />
      <h1>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h1>
      <p>{`${user?.email}`}</p>
      <p>{`${user?.location.city}`}</p>
      <p>{`${user?.location.country}`}</p>
      <p>{`${user?.location.gender}`}</p>
    </div>
  );
}

export default App;
