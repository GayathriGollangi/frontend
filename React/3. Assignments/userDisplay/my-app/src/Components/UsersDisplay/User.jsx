import React from 'react'
import style from './User.module.css'

const User = () => {
  return (
    <div>
      <h1>Users Display</h1>
      <div className={style.container}>
        <div className={style.image}>
        
        </div>
        <div>
            <div className={style.details}>
                <h3>Chrisse</h3>
                <p>4018 Sachs Trail</p>
            </div>
            <div  className={style.post}>
            <div>
                <h3>Post</h3>
                <p>1841</p>
            </div>
            <div>
                <h3>Followers</h3>
                <p>66868</p>
            </div>
            </div>
        </div>
        <button>Follow</button>
      </div>
    </div>
  )
}

export default User
