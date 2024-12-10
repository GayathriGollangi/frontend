import React from 'react'

const TodoItem = ({todo,updateTask,deleteTask}) => {
  return (
    <li>
      <span>{todo.text}</span>
      <span>-{todo.status ? "DONE" : "NOT DONE"}</span>
      <button onClick={() => updateTask(todo.id)}>
        {todo.status ? "undo" : "complete"}
      </button>
      <button onClick={() => deleteTask(todo.id)}>delete</button>
    </li>
  )
}

export default TodoItem
