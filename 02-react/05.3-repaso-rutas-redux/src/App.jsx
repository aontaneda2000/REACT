import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./components/Counter";
import { isShow } from "./store/slices/isShow.slice";

function App() {
  /* useSelector: Necesita una funcion callback */
  /* State representa el reducer es decir todos los estados globales */
  const ShowHidden = useSelector((state) => state.isShow);

  console.log(ShowHidden);
  /* useDispatch sirve para ejecutar nuestras actions de reducer */
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(isShow());
  };

  return (
    <div className="App">
      <h1>asdsa{ShowHidden}</h1>
      <button onClick={handleSubmit}>{ShowHidden ? "Show" : "Hideen"}</button>

      {ShowHidden && <Counter />}
    </div>
  );
}

export default App;
