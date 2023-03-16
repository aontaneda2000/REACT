import React from "react";

const CardCountry = ({ country }) => {
  console.log(country);
  return (
    <article className="card">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
    </article>
  );
};

export default CardCountry;
