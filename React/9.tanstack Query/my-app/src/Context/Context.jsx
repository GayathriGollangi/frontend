import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const getInitialMode = ()=>{
    const preferMode = window.matchMedia('(prefers-color-scheme)').matches;
    const storedMode =localStorage.getItem('darkMode');
    if(storedMode === null){
        return preferMode
    }
    return storedMode === true;
}

export const AppProvider = ({children})=>{
     
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialMode());
    const toggleDarkTheme = ()=>{
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem("darkMode",isDarkTheme);
    }

    return(
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext = ()=>{
    return useContext(AppContext);
}