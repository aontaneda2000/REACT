import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState('password')
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState('show')


/* Function show password and hidden */
  const changeState = () => {
    if (show === 'password') {

      setShow('text')
    } else {
      setShow('password')
      
    }
  }

  /* Function btn show and hidden */
const changeStateBtn = () => {
    if (showBtn === 'show') {

      setShowBtn('hidden')
    } else {
      setShowBtn('show')
      
    }
  }
  /* Function  incremente and decrement state */
  const increment = () => {
    setCount(count+1)
  }
 
  const reset = () => {
    setCount(0)
  }
const decrement = () => {
    setCount(count-1)
  }
  return (
    <div className="App">
      <h1>Hola</h1>
      <label htmlFor="">Contraseña</label>
      <input type={show} name="" id="" />
      <button onClick={changeStateBtn} >{showBtn}</button>

      <hr />
      <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
