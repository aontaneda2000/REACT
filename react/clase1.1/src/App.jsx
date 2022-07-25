import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const person = {
    name: "Benjamin",
    age: 30,
    favoriteMovie: "Forest Gump",
    favoriteMusic: "Blues",
  };

  const { name, age, favoriteMovie, favoriteMusic } = person;

  const hobbies = [3, "Musica", "Travel", "Play the video games", "Movies"];

  const stackTech = {
    name: "Stack tech",
    stack: ["html", "css", "js"],
  };

  return (
    <>
      {/*destructuring  */}
      <div className="App purple">
        <ul className="ul">
          <li>
            <p>
              <b>Nombre:</b>
              {name}
            </p>
          </li>
          <li>
            <p>
              <b>Edad:</b>
              {age} años
            </p>
          </li>
          <li>
            <p>
              <b>Pelicula favorita:</b>
              {favoriteMovie}
            </p>
          </li>
          <li>
            <p>
              <b>Musica favorita:</b>
              {favoriteMusic}
            </p>
          </li>
        </ul>
      </div>
      {/* Elemento- props */}
      <Card obj={hobbies} />
      <div className="App purple">
        <ul className="ul">
          <li>
            <p>
              <b>Nombre:</b>
              {name}
            </p>
          </li>
          <li>
            <p>
              <b>Edad:</b>
              {age} años
            </p>
          </li>
          <li>
            <p>
              <b>Pelicula favorita:</b>
              {favoriteMovie}
            </p>
          </li>
          <li>
            <p>
              <b>Musica favorita:</b>
              {favoriteMusic}
            </p>
          </li>
        </ul>
      </div>
      <div className="App purple">
        <ul className="ul">
          <li>
            <p>
              <b>Nombre:</b>
              {name}
            </p>
          </li>
          <li>
            <p>
              <b>Edad:</b>
              {age} años
            </p>
          </li>
          <li>
            <p>
              <b>Pelicula favorita:</b>
              {favoriteMovie}
            </p>
          </li>
          <li>
            <p>
              <b>Musica favorita:</b>
              {favoriteMusic}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
