import React from 'react'
import style from './Web.module.css'
const Web = ({heading,num}) => {
  return (
    <div>
        <h2>{num}. {heading}</h2>
      <ul id={style["list"]}>
        <li>Eligibility : 18-28 yrs </li>
        <li>Duration : 30 weeks</li>
      </ul>
    </div>
  )
}

export default Web
