import React, { useEffect, useState } from 'react'
import AppendData from './AppendData';

const UseEffect = () => {
    const [userData,setUserData] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/comments";

    const dataFetching = async()=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
            console.log(userData);
             }
             catch(error){
             console.log(error);
             }
    }

    useEffect(()=>{
       
        dataFetching();
    },[])
  return (
    <div>
      {/* {
        userData.map((item)=>
            <li key={item.id}>
              {item.email}
            {item.body}
          </li>
        
        )
      }
         */}
         <AppendData userData={userData} />
    </div>
  )
}

export default UseEffect
