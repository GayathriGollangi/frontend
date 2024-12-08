import React, { createContext, useState } from 'react'
export const ThemeContext = createContext('light');

const ThemeProvider = (props) => {
    const [theme,setTheme]= useState('dark');

    const ToggleTheme = ()=>{
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  return (
    <div>
      <ThemeContext.Provider value={{theme,ToggleTheme}}>
      {props.children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
