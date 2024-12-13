import React from 'react'
import { useSelector } from 'react-redux'

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
