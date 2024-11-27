import React from 'react'

const Button = ({count,handleClick}) => {
    console.log(count);

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default Button
