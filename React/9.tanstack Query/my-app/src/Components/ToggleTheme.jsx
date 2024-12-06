import React from 'react'
import { UseGlobalContext } from '../Context/Context'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import style from '../CSS/ToggleTheme.module.css';

const ToggleTheme = () => {
    const { isDarkTheme,toggleDarkTheme } = UseGlobalContext();
  return (
    <div>
        <button onClick={toggleDarkTheme}>
      {
        isDarkTheme ? (<BsFillMoonFill className={style["toggle-icon"]} />): 
        (<BsFillSunFill className={style["toggle-icon"]}/>)
      }
      </button>
    </div>
  )
}

export default ToggleTheme
