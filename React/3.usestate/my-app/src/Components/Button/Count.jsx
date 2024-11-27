import React, { useState } from 'react'

const Count = () => {
    const [count,setCount] = useState(0);

    const handleInc = ()=>{
        setCount(count+1);
    }
    const handleDec = ()=>{
        setCount(count-1);
    }
  return (
    <>
    <div>{count}</div>
    <button onClick={handleInc}>+</button>
    <button onClick={handleDec}>-</button>
    </>
  )
}

export default Count
