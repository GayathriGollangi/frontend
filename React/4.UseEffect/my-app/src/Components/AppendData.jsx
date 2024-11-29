import React from 'react'
import style from './AppendData.module.css'

const AppendData = ({userData}) => {
  return (
    <div className={style.container}>
       {
        userData.map((item)=>(
            <p key={item.id} className={style.data}>
                <h3>{item.id}</h3>
                <p>{item.name}</p>
             
          </p>
        
        ))
      }
      
    </div>
  )
}

export default AppendData
