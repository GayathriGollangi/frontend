import React from 'react'

const Person = (props) => {
    const {name,age}= props
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}

export default Person
