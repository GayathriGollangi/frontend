import React, { useReducer } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem';

let initialTodos=[
    {id:1,text:"todo1",status:false},
    {id:2,text:"todo2",status:false},
    {id:3,text:"todo3",status:false},
]

const todoReducerFunction = (state,action)=>{
        switch(action.type){
            case "ADD_TASK":
                return [...state,{id:Date.now(),text:action.payload,status:false}]
        }
}

const Todo = () => {
    const [todos,dispatch]=useReducer(todoReducerFunction,initialTodos);
    const addTask = (text)=>{
        dispatch({type:"ADD_TASK",payload:text})
    }
    const updateTask = ()=>{

    }
    const deleteTask = ()=>{

    }
  return (
    <div>
      <h3>Todos</h3>
      <AddTodo addTask={addTask}/>
      <ul>
        {
            todos.map((todo)=>{
                return(
                    <TodoItem key={todo.id} {...todo} updateTask ={updateTask} deleteTask={deleteTask}/>
                )
            })
        }
      </ul>

    </div>
  )
}

export default Todo
