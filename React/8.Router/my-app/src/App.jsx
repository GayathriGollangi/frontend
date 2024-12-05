import React from 'react'
import {Routes, Route} from 'react-router'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Users from './Pages/Users'
import SingleUser from './Pages/SingleUser'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'

const App = () => {

  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<SingleUser/>}/>
        <Route path = 'login' element={<Login/>} />
        <Route path = '*' element={<NotFound/>} />
        
      </Routes>
    </div>
  )
}

export default App
