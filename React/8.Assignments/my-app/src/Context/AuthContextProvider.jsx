import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState(false);
     
    const login = ()=>{
        setIsAuth(true);
    }
    const logout = ()=>{
        setIsAuth(false);
    }

  return (
    <div>
      <AuthContext.Provider value={{isAuth,login,logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
};

export const GlobalContext = ()=>{
   return useContext(AuthContext)
}
