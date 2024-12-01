import React, { useRef } from 'react'

const Input = () => {
    let inputText = useRef(null);

    const handleFocus = ()=>{
        inputText.current.focus();
    }
    console.log(inputText);
  return (
    <div>
      <input type="text" ref={inputText}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Input
