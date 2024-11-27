import React, { useState } from 'react'

const Button = () => {
    const [count,setCount] = useState(0);

    const handleClick = ()=>{
        setCount(count+1);
    }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <p>button clicked {count} times</p>
    </div>
  )
}

export default Button
