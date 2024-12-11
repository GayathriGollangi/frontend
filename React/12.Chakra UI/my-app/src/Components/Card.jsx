import React from 'react'

const Card = ({children,title,style}) => {
  return (
    <div style={{
        border:"1px solid black",
        padding:"16px",
        margin:"4px",
        ...style
    }}>
      {title && <h2>{title}</h2>}
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card
