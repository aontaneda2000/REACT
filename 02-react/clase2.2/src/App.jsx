import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)
      .then(rest => console.log(rest.data))
  }, [])
  

  return (
    <div className="App">
      
    </div>
  )
}

export default App
