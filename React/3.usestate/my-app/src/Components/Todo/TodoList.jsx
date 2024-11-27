import React from 'react'

const TodoList = ({todos,handleToggle}) => {
  return (
    <div>
      {
         todos.map((element)=>{
            const {title,id,status} = element;
            return<li key={id}>{title} - {status ? "completed": "not completed"}
                <button onClick={()=>handleToggle(id)}>Delete</button>
            </li>
        
        })
        
      }
    </div>
  )
}

export default TodoList
