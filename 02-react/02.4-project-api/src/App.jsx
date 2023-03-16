import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import CardCountry from "./components/CardCountry";

function App() {
  return (
    <div className="App">
      <CardCountry countryName="mexico" />
      <CardCountry countryName="colombia" />
      <CardCountry countryName="ecuador" />
      <CardCountry countryName="argentina" />
    </div>
  );
}

export default App;
