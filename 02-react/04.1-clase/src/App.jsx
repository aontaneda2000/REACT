import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import CardCars from "./components/CardCars";
import HookForm from "./components/HookForm";

function App() {
  const [cars, setCars] = useState();
  const [updateInfo, setUpdateInfo] = useState();

  /* peticion api de todos los carros  */
  const getAllCars = () => {
    const URL = "https://cars-crud.herokuapp.com/cars/";

    axios
      .get(URL)
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  };

  /* peticion */
  useEffect(() => {
    getAllCars();
  }, []);

  console.log(cars);

  /* crear un nuevo auto en la api (create) */
  const createNewCar = (data) => {
    const URL = "https://cars-crud.herokuapp.com/cars/";

    /* const data = {
      brand: "Ecuador al mundial",
      model: "Z232",
      color: "red",
      year: 2022,
      price: 125000,
    };
 */
    axios
      .post(URL, data)

      .then((res) => {
        /* FUNCION hace de nuevo la peticion para que renderize de nuevo la informacion */
        getAllCars();
      })
      .catch((err) => console.log(err))
      .finally(() => getAllCars());
  };

  return (
    <div className="App">
      <HookForm
        createNewCar={createNewCar}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
      />
      <h1>CRUD Cars</h1>
      <button onClick={createNewCar}>Create car</button>
      {cars?.map((car) => (
        <CardCars
          key={car.id}
          car={car}
          getAllCars={getAllCars}
          setUpdateInfo={setUpdateInfo}
        />
      ))}
    </div>
  );
}

export default App;
