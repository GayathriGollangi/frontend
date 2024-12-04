import React from 'react'
import { NavLink } from 'react-router'
import style from '../CSS/Navbar.module.css'
import Products from '../Pages/Products';
import Login from '../Pages/Login';
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
        color:"green"
      }
  return (
    <div style={{display:"flex",gap:"10px"}} className={style.container}>
      
        {
            links.map((link,index)=>{
                return (
                    <NavLink to={link.path} key={index} style={({isActive})=>{
                        return isActive ? activeStyle : defaultStyle
                    }}>
                        {link.text}
                    </NavLink>);
    
})}
        {
            isAuth ? <Products/> : <Login/>
        }
    
    </div>
  )
}

export default Navbar
