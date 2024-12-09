import React, { useReducer } from 'react'

const initialArg = 0;
const reducerFunction = (state,action)=>{
    if(action.type === "INC_COUNT"){
        state = state+1;
        return state;

    }
    if(action.type === "DEC_COUNT"){
        state = state -1;
        return state;
    }
    if(action.type="RESET_COUNT"){
        state = 0;
        return state;
    }
}

const Counter = () => {
    const [state,dispatch] = useReducer(reducerFunction,initialArg);
  return (
    <div>
        <h3>Counter : {state}</h3>
      <button onClick={()=>{
        dispatch({type:"INC_COUNT"})
      }}>Increment</button>
      <button onClick={()=>{
        dispatch({type:"DEC_COUNT"})
      }}>Decrement</button>
      <button onClick={()=>{
        dispatch({type:"RESET_COUNT"})
      }}>Reset</button>

    </div>
  )
}

export default Counter
