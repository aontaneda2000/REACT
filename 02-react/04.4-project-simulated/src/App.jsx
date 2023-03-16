import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import CardMovies from "./components/CardMovies";
import Form from "./components/Form";

function App() {
  const [movies, setMovies] = useState();
  /* Estado envia inf al form */
  const [updateInfo, setUpdateInfo] = useState();
  /* modal */
  const [isFormOpen, setIsFormOpen] = useState(false);

  const getMovies = () => {
    const URL = "https://movies-crud-academlo.herokuapp.com/movies/";

    axios
      .get(URL)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  /* Funcion que cierra modal */
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="App">
      <h1>Movies CRUD</h1>
      <button onClick={handleOpenForm}>Open Form</button>
      <div className={isFormOpen ? "form-container" : "form-none"}>
        <Form
          getMovies={getMovies}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      </div>
      <div className="card-container">
        {movies?.map((movie) => (
          <CardMovies
            key={movie.id}
            movie={movie}
            getMovies={getMovies}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
