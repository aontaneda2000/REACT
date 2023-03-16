import { useEffect, useState } from "react";
import "./App.css";
/* funcion getUsers que contiene redux thunk de user.slice */
import { getUsers } from "./store/slices/users.slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  /* despacha las actions de reducers */
  const dispatch = useDispatch();

  /* despacha asincrona la inf y ejecuta la funcion getUsers*/
  useEffect(() => {
    /* despachar el redux thunk */
    dispatch(getUsers());
  }, []);

  /* accede ala inf de ese estado */
  const users = useSelector((state) => state.users.results);
  // console.log(users.results[0]);
  return (
    <div className="App">
      {users?.map((user) => (
        <ul>
          <li>{user.name.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
