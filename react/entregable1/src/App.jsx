import { useState } from "react";
import "./App.css";
import users from "./json/users.json";
import CardUsers from "./components/CardUsers.jsx";
import colors from "./utils/colors";

function App() {
  
  const getRandomElement = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  };

  let userRandom = getRandomElement(users);
  let colorRandom = getRandomElement(colors);

  const [randomUser, setRandomUser] = useState(userRandom);
  const [randomColors, setRandomColors] = useState(colorRandom);

  // console.log(randomUser, randomColors);

  const objStyle = {
  backgroundColor: randomColors
}

  const getRandomAll = () => {
     userRandom = getRandomElement(users);
     colorRandom = getRandomElement(colors);

    setRandomUser(userRandom)
    setRandomColors(colorRandom)
  }
  
  return (
    <div className="App" style={objStyle}>
      <CardUsers
        randomUser={randomUser}
        randomColors={randomColors} 
        getRandomAll={getRandomAll} />
      <i className="fa-solid fa-quote-left"></i>
    </div>
  );
}

export default App;
