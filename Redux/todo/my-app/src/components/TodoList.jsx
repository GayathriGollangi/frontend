import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoFailureAction, todoRequestAction, todoSuccessAction } from '../action';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todo, isLoading, isError } = useSelector((store) => store);
  console.log(todo);
  // const loading = useSelector((store)=>store.isLoading);
  // const error = useSelector((store)=>store.isError);
  const getTodo = ()=>{
    dispatch(todoRequestAction());
    axios.get("http://localhost:3000/todos")
    .then(response => {
      console.log(response.data);
      dispatch(todoSuccessAction(response.data));
    })
      .catch(error => {
        console.error(error);
        dispatch(todoFailureAction());
        });
  }
  useEffect(()=>{
    getTodo();
  },[]);
  return (
    <div>
TodoList
<h1>Todos</h1>
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>Error....</h1>}
    
    </div>
  )
}

export default TodoList
