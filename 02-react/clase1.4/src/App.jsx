import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./components/Container";
import ContainerOff from "./components/ContainerOff";

function App() {
  const [isOff, setOn] = useState(false);

  const On = () => {
    setOn(!isOff);
  };

  return (
    <div className="App">
      {isOff ? (
        <>
          <Container />
          <button onClick={On}>Off</button>
        </>
      ) : (
        <>
          <ContainerOff />
          <button onClick={On}>On</button>
        </>
      )}
    </div>
  );
}

export default App;
