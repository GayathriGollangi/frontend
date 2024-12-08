import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
      I am from Card
      <h2>{props.children}</h2>
    </div>
  )
}

export default Card
