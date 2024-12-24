import React, { useState } from 'react'

const TodoInput = () => {
    const [title,setTitle]= useState("");
  return (
    <div>
      <input type="text" name="" id="searchInput" value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <button>Add</button>
    </div>
  )
}

export default TodoInput
