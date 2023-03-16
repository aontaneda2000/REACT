import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const mySlice = createSlice({
  name: "isShow",
  initialState: false,
  reducers: {
    isShow: (state) => !state,
  },
});

export const { isShow } = mySlice.actions;

export default mySlice.reducer;
