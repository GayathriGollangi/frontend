import React from 'react'

const TodoItem = (todo,updateTask,deleteTask) => {
  return (
    <li>
      <span>{todo.text}</span>
      <span onClick={()=>{updateTask(todo.id)}}>-{todo.status ? "DONE" :"NOT DONE"}</span>
      <button onClick={()=>{deleteTask(todo.id)}}>Delete</button>
    </li>
  )
}

export default TodoItem
