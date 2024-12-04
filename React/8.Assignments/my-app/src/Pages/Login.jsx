import React from 'react'
import style from '../CSS/Login.module.css'


const Login = () => {
  return (
    <div className={style.container}>
      <form action="">
        <input type="text" placeholder='enter username' /> <br />
        <input type="password" placeholder='enter password' />
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
  )
}

export default Login
