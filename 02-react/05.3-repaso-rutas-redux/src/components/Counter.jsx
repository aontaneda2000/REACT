import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/slices/counter.slice";

const Counter = () => {
  /* useSelector: Necesita una funcion callback */
  /* State representa el reducer es decir todos los estados globales */
  const counter = useSelector((state) => state.counterSlice);

  /* useDispatch sirve para ejecutar nuestras actions de reducer */
  const dispatch = useDispatch();

  const handlePlus = () => {
    /* Instancia de dispatch */
    dispatch(increment());
  };
  const decrementPlus = () => {
    /* Instancia de dispatch */
    dispatch(decrement());
  };

  const resetCounter = () => {
    /* Instancia de dispatch */
    dispatch(reset());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={handlePlus}>+1</button>
      <button onClick={resetCounter}>0</button>
      <button onClick={decrementPlus}>-1</button>
    </div>
  );
};

export default Counter;
