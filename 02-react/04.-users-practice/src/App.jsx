import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import Form from "./components/Form";

function App() {
  const [isUsers, setIsUsers] = useState();

  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/";

    axios
      .get(URL)
      .then((res) => setIsUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(isUsers);

  return (
    <div className="App">
      <h2>Users</h2>
      <Form getAllUsers={getAllUsers} />

      <div className="container">
        {isUsers?.map((user) => (
          <UsersList key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
