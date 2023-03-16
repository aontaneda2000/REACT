import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const alert = () => {
    console.log("click");
  };

  const me = {
    name: "Aaron",
    age: 22,
  };
  return (
    <div className="App" onClick={alert}>
      <article className="card">
        <h1>Sobre mi</h1>
        <ul>
          <li>Nombre: {me.name}</li>
          <li>Edad: {me.age}</li>
          <li>Pelicula favorita</li>
          <li>Musica favorita: rock</li>
        </ul>
      </article>
    </div>
  );
}

export default App;
