import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import List from './List'
import data from './data.js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List people={data}/>
    </>
  )
}

export default App
