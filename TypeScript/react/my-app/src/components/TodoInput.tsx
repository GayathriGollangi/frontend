import React, { useState } from 'react'

const TodoInput = () => {
    const [title,setTitle] = useState("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add todo' onChange={handleChange}/>
      <button >Add</button>
      </form>
    </div>
  )
}

export default TodoInput
