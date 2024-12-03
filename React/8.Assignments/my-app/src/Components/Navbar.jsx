import React from 'react'
import { NavLink } from 'react-router'
import style from '../CSS/Navbar.module.css'

const links=[
    {
        path:'/',
        text:"Home"
    },
    {
        path:'/about',
        text:"About"
    },
    {
        path:'/contact',
        text:"Contact"
    },
    {
        path:"/products",
        text:"Products"
    },
    {
        path:'/login',
        text:"Login"
    }
    
];

const Navbar = () => {
    const defaultStyle={
        color:"black"
      }
    
      const activeStyle={
        color:"green"
      }
  return (
    <div style={{display:"flex",gap:"10px"}} className={style.container}>
      
        {
            links.map((link,index)=>{
                return (
                <NavLink className={style.links} to={link.path} key={index} style={({isActive})=>{
                    return isActive ? activeStyle : defaultStyle
                }}>
                    {link.text}
                </NavLink>);

})}
        {/* <p>user Logged in</p>
        <button>Logout</button>
     */}
    
    </div>
  )
}

export default Navbar
