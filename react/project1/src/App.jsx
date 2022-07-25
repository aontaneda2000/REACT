import { useState } from 'react'
import './App.css'
// import Parragrahp from './components/Parragrahp';
import QuoteBox from './components/QuoteBox.jsx';
import author from './json/quotes.json'
import colors from './utils/colors'

function App() {

  /* Funcion random */
const getRandomCite = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
};
  
  /* Funcion recibe como parametro el arreglo y guarda en una variable */
  let authorRandom = getRandomCite(author)
  let colorRandom = getRandomCite(colors)

  /* Estado se guarda en randomAuthor */
  const [randomAuthor, setRandomAuthor] = useState(authorRandom)
  /* Estado se guarda en randomColors */
  const [randomColors, setRandomColors] = useState(colorRandom)

  /* fondo del body */
  const objStyle = {
    backgroundColor: randomColors
  }


  /* Evento click */
  const changeState = () => {

    authorRandom = getRandomCite(author)
    colorRandom = getRandomCite(colors)

    setRandomAuthor(author)
    setRandomColors(colors)
  }

  return (
    <div className="app" style={objStyle}>
      
      <QuoteBox
        randomAuthor={randomAuthor}
        randomColors={randomColors}
        changeState={changeState}
      />
    </div>
  )
}

export default App
