import React from 'react'
import { useSelector } from 'react-redux'
import { store } from './redux/store'


const App = () => {
  const counter = useSelector((store)=>store.count)
  console.log(counter)
  return (
    <div>
      APP
    </div>
  )
}

export default App
