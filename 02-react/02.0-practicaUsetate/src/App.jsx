import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import colors from "./utils/colors.js";
import "./App.css";

function App() {
  /* Recibe como parametro un string del jsx */
  const [show, setShow] = useState("password");

  /* Recibe como parametro un number el cual se sumara con el valor de la funcion increment y decrement */
  const [ie, setIe] = useState(0);

  /*Fondo de  */
  const [color, setColor] = useState();

  /* Funcion que genera un numero random del arreglo */
  const getColorRandom = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  };

  /* Funcion que evalua si recibe el string para luego cambiar el estado */
  const change = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  /* Funcion que suma 1 a el estado  */
  const increment = () => {
    setIe(ie + 1);
  };

  /* Funcion que resta 1 a el estado  */
  const decrement = () => {
    setIe(ie - 1);
  };
  const reset = () => {
    setIe(0);
  };

  /* Estado useEffect: Solo se ejecutara una vez ya que el arreglo de dependencias esta vacio. */
  useEffect(() => {
    /* Llamar funcion que recibe como parametro el arreglo de colores de la carpeta utils   */
    let colorRandom = getColorRandom(colors);
    console.log(colorRandom);
    /* Recibe el estado del color del componente App */
    setColor(colorRandom);
  }, [ie]);
  return (
    /* Etiqueta style recibe como objeto el fondo de color.  */
    <div className="App" style={{ backgroundColor: color }}>
      <label htmlFor="">Ingrese</label>
      <input type={show} name="" id="" />
      <button onClick={change}>{show === "password" ? "Show" : "Hide"}</button>

      <hr />

      <h2>{ie}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
