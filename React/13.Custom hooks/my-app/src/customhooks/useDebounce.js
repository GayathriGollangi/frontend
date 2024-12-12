import React, { useState,useEffect } from 'react'

const useDebounce = (value,delay) => {
  const [debounce,setDebounce]=useState(value);

 useEffect(() => {
    
const id = setTimeout(() => setDebounce(value),delay);
return () => clearTimeout(id);

  },[ value,delay]);
  return debounce;
    
}

export default useDebounce
