import React, { useEffect, useState } from 'react'
import DataRender from './DataRender';

const DataFetch = () => {
    const [data,setData] = useState([]);
    const [generate,setGenerate] = useState(false)

    const url = "http://localhost:3000/coffee";

    function fetching(){
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error=>{
            console.error(error);
        })
    }
    function newUser()
    {
        console.log("clicked");
        setGenerate(true);

    
    }

    useEffect(()=>{
        fetching();
    },[]);

  return (
    <div>
        <h1>Coffee Store Catalogue</h1>
        <button onClick={newUser}>Get COFFEE</button>      
        {generate &&  <DataRender data = {data}/>}
        
    </div>
  )
}

export default DataFetch
