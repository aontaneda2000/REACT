import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import Car from "./components/Car";

function App() {
  const [cars, setCars] = useState();

  useEffect(() => {
    const URL = "https://cars-crud.herokuapp.com/cars/";

    axios
      .get(URL)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const createNewCar = () => {
    const URL = "https://cars-crud.herokuapp.com/cars/";

    const data = {
      brand: "Toyasaota",
      model: "21S12",
      color: "red",
      year: 2222,
      price: 222111,
    };

    axios
      .post(URL, data)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h2>Hola</h2>
      <form>
        <button onClick={createNewCar}>Enviar</button>
      </form>
      <div>
        {cars?.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
