import React from 'react'

const AddTodo = ({handleChange,handleClick,text}) => {
    
  return (
    <div>
      
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddTodo
