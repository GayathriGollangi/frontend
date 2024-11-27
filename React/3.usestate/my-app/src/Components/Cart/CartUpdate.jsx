import React, { useState } from 'react'
import Button from './Button';

const CartUpdate = () => {
    const [count,setCount]= useState(0);
    const handleClick = ()=>{
        setCount(count+1);
    }
    console.log(count);
  return (
    <div>
    
      <Button handleClick={handleClick} count={count}/>
      <Button handleClick={handleClick} count={count}/>

    </div>
  )
}

export default CartUpdate
