import React, { useContext } from 'react'
import Demo from './Components/Demo'
import Card from './Components/Card'
import Avatar from './Components/Avatar'
import { ThemeContext } from './ContextApi/ThemeProvider'
import { AuthContext } from './ContextApi/AuthenticationProvider'

const App = () => {
  const {theme,ToggleTheme} = useContext(ThemeContext)
  const {isAuth,login,logout} = useContext(AuthContext)
  return (
    <div style={{background:theme === 'dark' ? "black" :"white",
      color:theme === 'dark' ? "white" :"black",
    }}>
      Hello
      {/* <Card>
      <Avatar name="sam" age="30"/>
      </Card> */}

      <button onClick={ToggleTheme}>Theme</button>
      {!isAuth && <button onClick={login}>Login</button>}
      {isAuth && <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default App
