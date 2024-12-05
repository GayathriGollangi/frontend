import React from 'react'
import { NavLink } from 'react-router'
import { GlobalContext } from '../Context/AuthContextProvider'

const links=[
    {
        path:'/',
        text:"home"
    },
    {
        path:'/about',
        text:"about"
    },
    {
        path:'/contact',
        text:"contact"
    },
    {
        path:"/users",
        text:"users"
    },
    {
        path:'/login',
        text:"login"
    }
    
];

const Navbar = () => {
    const {isAuth,login,logout} = GlobalContext();
    const defaultStyle={
        color:"black"
      }
    
      const activeStyle={
        color:"green"
      }
  return (
    <div style={{display:"flex",gap:"10px"}}>
      
        {
            links.map((link,index)=>{
                return (
                <NavLink to={link.path} key={index} style={({isActive})=>{
                    return isActive ? activeStyle : defaultStyle
                }}>
                    {link.text}
                </NavLink>);

})}
        <p>user Logged in{isAuth ? "Yes":"No"}</p>
        {isAuth ?         <button onClick={logout}>Logout</button>
:<button onClick={login}>Login</button>}
    
    
    </div>
  )
}

export default Navbar