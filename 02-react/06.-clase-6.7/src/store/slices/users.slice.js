import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: null,
  reducers: {
    setUsersGlobal: (state, action) => action.payload,
  },
});

export const { setUsersGlobal } = userSlice.actions;

export const getUsers = () => (dispatch) => {
  axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => dispatch(setUsersGlobal(res.data)))
    .catch((err) => console.log(err));
};

export default userSlice.reducer;
