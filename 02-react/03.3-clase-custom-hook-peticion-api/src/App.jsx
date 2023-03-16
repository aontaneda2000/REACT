import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  /* Se puede renombrar una variable de lo que retorno de useFetch */
  const countries = useFetch("https://restcountries.com/v3.1/lang/spa");

  const users = useFetch("https://randomuser.me/api/?results=50");

  const response = useFetch();

  console.log(countries);
  console.log(users);
  console.log(response);

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
