import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from "./components/CardUser";
import "./style.css";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const URL = "https://randomuser.me/api/?results=3";

    axios
      .get(URL)
      .then((res) => setUsers(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(users);

  return (
    <div className="App">
      <h1>Clase 3.1</h1>
      {users?.map((user) => (
        <CardUser key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default App;
