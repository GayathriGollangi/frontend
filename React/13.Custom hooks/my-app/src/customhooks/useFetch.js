import { useEffect, useState } from "react";

const useFetch = ()=>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const dataFetching = async()=>{
        setLoading(true);
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log("try",data);
            setData(data);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setError(error);
        }
     
    }
    
    useEffect(()=>{
       
        dataFetching();
    },[])
    return {data,loading,error};
}
export default useFetch;