import React from 'react'
import Fetching from './customhooks/Fetching'
import Debouncing from './customhooks/Debouncing'

const App = () => {
  return (
    <div>
      
      <Fetching/>
      <Debouncing/>
    </div>
  )
}

export default App
