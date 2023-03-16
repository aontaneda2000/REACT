import { configureStore } from "@reduxjs/toolkit";
/* Se importa estado */
import counterSlice from "./slices/counter.slice";
import isShow from "./slices/isShow.slice";

/* Retorna la informacion de esa store */
export default configureStore({
  /* Es un estado global que engloba o guarda todos los estados*/
  /* Reducer estado padre global */
  reducer: {
    counterSlice,
    isShow,
  },
});
