import React from 'react'
import style from './DataRender.module.css'

const DataRender = ({data}) => {
    const {ingredients} = data;
  return (
    <div className={style.container}>
        {
            data.map((item)=>(
                <div key={item.id} className={style["container-items"]}>
                     <img src={item.image} />
                    <div>
                    <h3>{item.title}</h3>
                    <p>&#x20B9; {item.price}</p>
                    <p>{item.description}</p>
                    <p>{item.ingredients}</p>
                    </div>
                   
                </div>    
            ))
        }
      
    </div>
  )
}

export default DataRender
