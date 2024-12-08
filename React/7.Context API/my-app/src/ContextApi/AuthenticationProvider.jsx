import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
const AuthenticationProvider = (props) => {
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
        {props.children}
          </AuthContext.Provider>
    </div>
  )
}

export default AuthenticationProvider
