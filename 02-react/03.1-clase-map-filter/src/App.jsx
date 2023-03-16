import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import CardCountry from "./components/CardCountry";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/lang/spanish";
    axios
      .get(URL)
      .then((res) => {
        /* Logica de programacion */
        const startWithB = res.data.filter(
          (e) => e.name.common.startsWith("B")
          /* menos de 6 letras */
          /* const startWithB = res.data.filter((e) =>
          e.name.common.length < 6) */
        );

        setCountries(startWithB);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(countries);
  return (
    <div className="App">
      <h1 className="general-title">
        Countries {countries && Object.values(countries[0].languages)[0]}
      </h1>
      <div className="card-container">
        {countries?.map((country) => (
          <CardCountry
            key={`${country.area} - ${country.population} - ${country.name.official}`}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
