import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce';

const Debouncing = () => {
    const [query,setQuery] = useState("");
    const debouncingQuery = useDebounce(query,1000);
    useEffect(()=>{
        if(debouncingQuery){
            console.log(`search Query ${debouncingQuery}`);
        }
    },[debouncingQuery])
  return (
    <div>
      <input type="text" name="" value={query} placeholder='search Query' onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Debouncing
