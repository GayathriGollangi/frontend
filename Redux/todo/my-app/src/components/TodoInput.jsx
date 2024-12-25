import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { postFailureAction, postRequestAction, postSuccessAction, todoRequestAction } from '../action';

const TodoInput = () => {
    const [title,setTitle]= useState("");
    const dispatch = useDispatch();
    const postTodo = ()=>{
      dispatch(postRequestAction());
      const newTodo = {
        title:title,
      }
      axios.post("http://localhost:3000/todos",newTodo)
      .then((response)=>{
        console.log(response.data);
        dispatch(postSuccessAction(response.data));
        })
        .catch((error)=>{
          console.log(error);
          dispatch(postFailureAction());
        })
      
    }
    const addTodo = ()=>{
      postTodo();
      setTitle("");
    };
  return (
    <div>
      <input type="text" name="" id="searchInput" value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput
