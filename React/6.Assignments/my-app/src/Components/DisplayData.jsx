import React from 'react'

const DisplayData = (props) => {
    const {firstName,lastName,email,phnNum,country,gender,birthDate,image} = props
    console.log(firstName);
  return (
    <div>
      display
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{email}</h1>
      <h2>{phnNum}</h2>
      <h2>{country}</h2>
      <h2>{gender}</h2>
      <h2>{birthDate}</h2>
      <img src={image} alt="images" />

    </div>
  )
}

export default DisplayData
