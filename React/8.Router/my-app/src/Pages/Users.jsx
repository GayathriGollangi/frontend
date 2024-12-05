import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Users = () => {
    const [data,setData] = useState([]);
    const fetchingData = async()=>{
        try{
        let response = await fetch("https://reqres.in/api/users?page=2");
        let data = await response.json();
        console.log(data.data);
        setData(data.data);

        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchingData();
    },[])
  return (
    <div>
      {
        data.map((user)=>{
            return(
                <div key={user.id}>
                    <img src={user.avatar} alt="images" />
                    <Link to={`${user.id}`}>
                    <h3>{user.first_name} {user.last_name}</h3>
                    </Link>
                    </div>
            )
        })
      }
    </div>
  )
}

export default Users
