import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
    const [text,setText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleClick = ()=>{
        const item = {
            id:Date.now()+Math.random(),
            title:text,
            status:false
        }
        setTodos([...todos, item]);
        setText("");
    }
    console.log(todos);

    const handleToggle = (id)=>{
        const afterUpdateTodo = todos.map((item)=>(
             item.id === id ? {...item, status: !item.status}: item
        
        ))
        setTodos(afterUpdateTodo);
    }
  return (
    <div>
        <AddTodo handleChange={handleChange} handleClick={handleClick} text={text}/>
        <TodoList todos={todos} handleToggle={handleToggle}/>
    </div>
  )
}

export default Todo
