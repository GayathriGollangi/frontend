import React, { useState } from 'react'
import style from './Counter.module.css'

const Counter = () => {
    const [count, setCount] = useState(0);
     const handleInc = ()=>{
        setCount(count+1);
     }
     const handleDec = ()=>{
        setCount(count-1);
     }
     const handleDouble = ()=>{
        setCount(count*2);
     }

  return (
    <div className={style.container}>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={handleInc} className={style.addbtn}>+</button>
        <button onClick={handleDec} className={style.subbtn}>-</button>
        <button onClick={handleDouble} className={style.doublebtn}>Double</button>
    </div>
  )
}

export default Counter
