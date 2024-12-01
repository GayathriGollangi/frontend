import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(10);
    const refId = useRef(0);

    useEffect(()=>{
        return () =>{
            console.log("clean up function");
        };
    },[])

    const startTime = ()=>{
        if(refId.current !== 0){
            return;
        }
        refId.current = setInterval(()=>{
            console.log("Timer",Date.now());
            setCount((prev)=>{
                if(prev <=1){
                    clearInterval(refId.current);
                }
                else{
                    return prev - 1;
                }
            });
        },1000);
    };
    const stopTime = ()=>{
        // console.log("Timer stopped");
        clearInterval(refId.current);
        refId.current = 0;
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={startTime}>start Timer</button>
        <button onClick={stopTime}>stop Timer</button>
      
    </div>
  )
}

export default Timer
