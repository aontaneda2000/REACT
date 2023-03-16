import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import CardCars from "./components/CardCars";

function App() {
  const [cars, setCars] = useState();

  useEffect(() => {
    const URL = "https://cars-crud.herokuapp.com/cars/";
    axios
      .get(URL)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(cars);

  /* getAllCars trae esa nueva informacion */
  const getAllCars = () => {
    const URL = "https://cars-crud.herokuapp.com/cars/";

    axios
      .get(URL)
      /* se muestra en consola y tambien se guarda en la funcion setCars para luego mostrar de la card  */
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  };

  /* Funcion onclick para agregar un nuevo objeto ala base de datos */
  const createNewCar = () => {
    const URL = "https://cars-crud.herokuapp.com/cars/";

    /* objeto a gregar con sus propiedades */
    const data = {
      brand: "Ecuador al mundial",
      model: "Z232",
      color: "red",
      year: 2022,
      price: 125000,
    };

    /* peticion post que recibe por paremtro la URL de la API  y la data que es la informacion del objeto */

    /* Esta peticion no recarga automaticamente la pagina */
    axios
      .post(URL, data)
      /* ilustra consola y tambien guarda en la funcion setCars */
      /* Para recargar de nuevo la informacion se utiliza la funcion getAllCarsque realiza nuevamente la peticion */
      .then((res) => {
        getAllCars();
      })
      .catch((err) => console.log(err))
      /* Si la respuesta es incorrecta o correcta siosi se ejecuta esta promesa para recargar la pagina */
      .finally(() => getAllCars());
  };

  return (
    <div className="App">
      <h1>CRUD Cars</h1>
      <button onClick={createNewCar}>Create car</button>
      {cars?.map((car) => (
        <CardCars key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;
