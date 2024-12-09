import React from 'react'

const AddTodo = ({addTask}) => {
    const [input, setInput] = React.useState('');
    const handleInput = (e)=>{
        let userInput = e.target.value;
        setInput(userInput);

    }
    const handleAdd = ()=>{
        addTask(input);
        setInput("");
    }
  return (
    <div>
        <input type="text" value={input} onChange={handleInput}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodo
