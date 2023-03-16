import { useState } from "react";

/* Contador inicializa en 0 EN CASO DE que no se pase ningun  por parametro al otro componente */

const useCounter = (
  initialValue = 0,
  resetValue = 0,
  minValue = -Infinity,
  maxValue = Infinity
) => {
  /* No utilizar counter++ porque lo estados no son mutativos */
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    /* Colocar lo maximo: Es menor o igual que maxValue y el siguiente numero es mayor entonces no se hace nada  */
    if (counter + 1 <= maxValue) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    /* Colocar lo maximo: Es menor o igual que maxValue y el siguiente numero es mayor entonces no se hace nada  */
    if (counter - 1 >= minValue) {
      setCounter(counter - 1);
    }
  };
  const reset = () => setCounter(resetValue);

  /* Por lo general se retorna como un objeto o un arreglo */
  return { counter, increment, decrement, reset };
};

export default useCounter;
