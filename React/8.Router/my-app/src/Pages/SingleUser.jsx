import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';

const SingleUser = () => {
     const [data,setData]=useState({});
     const param = useParams();
     console.log(param);
    const fetching = async(param)=>{
        try{
            const response = await fetch(`https://reqres.in/api/users/${param.id}`)
            const data = await response.json();
            console.log(data);
            setData(data.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetching(param);
    },[])
  return (
    <div>
      
      <img src={data.avatar} alt="" />
      <h1>{data.first_name}</h1>
      <Link to="/users">
        <button>go back</button>
      </Link>
    </div>
  )
}

export default SingleUser
