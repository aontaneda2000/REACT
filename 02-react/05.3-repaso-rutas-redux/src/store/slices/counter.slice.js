import { createSlice } from "@reduxjs/toolkit";

/* Slice es un estado global que recibe como parametro un objeto que tiene tres propieades similiares a useState */

/*  */
export const counterSlice = createSlice({
  name: "counter",
  initialState: 10,
  /* Son las funciones que cambian el estado  */
  reducers: {
    /* return implicito */
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

/* actions es un objeto donde estan todas las funciones que se han creado */

export const { increment, decrement, reset } = counterSlice.actions;

/* Se exporta al indexjs  */
/* reducer es lo que retorna la funcion counterSlice */
export default counterSlice.reducer;
