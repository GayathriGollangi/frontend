import React from 'react'
import { Link, NavLink } from 'react-router'
import style from '../CSS/Navbar.module.css'
import { useNavigate } from "react-router";


import { GlobalContext } from '../Context/AuthContextProvider';


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
    const {isAuth,login,logout} = GlobalContext();
    
    const defaultStyle={
        color:"black"
      }
    
      const activeStyle={
        color:"#a569bd"
      }
      let navigate = useNavigate();

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
        {
            isAuth ? <Link to="/products"/>
: navigate("/login")
        }
    
    </div>
  )
}

export default Navbar
