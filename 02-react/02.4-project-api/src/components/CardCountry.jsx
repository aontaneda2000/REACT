import { useEffect, useState } from "react";
import axios from "axios";

const CardCountry = ({ countryName }) => {
  const [country, setCountry] = useState();

  useEffect(() => {
    const URL = `https://restcountries.com/v2/name/${countryName}`;
    axios
      .get(URL)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.error(err));
  }, []);
  console.log(country);
  return (
    <div>
      <img src={country?.flag} alt="" />
      <h1>
        {country?.name} - {country?.capital}
      </h1>
      <h1></h1>
      <h1>{country?.subregion}</h1>
      <h1>{country?.timezones[0]}</h1>
    </div>
  );
};

export default CardCountry;
