import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

const Fetching = () => {
     const { data,loading,error } = useFetch();
     if(loading){
        return <div>Loading...</div>;
     }
     if(error){
        return <div>Error: {error.message}</div>;
        }
  return (
    <ul>
        {data && data.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))}

       
    </ul>
  )
}

export default Fetching
