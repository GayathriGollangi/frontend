import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

const Fetching = () => {
     const { data } = useFetch();
        
  return (
    <ul>
        {data && data.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))}

       
    </ul>
  )
}

export default Fetching
