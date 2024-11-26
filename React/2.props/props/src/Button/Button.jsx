import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    const {text,bgcolor,click} = props
  return (
    <div>
      <button style={{backgroundColor:bgcolor}} onClick={click} className={styles.App}>{text}</button>
    </div>
  )
}

export default Button
