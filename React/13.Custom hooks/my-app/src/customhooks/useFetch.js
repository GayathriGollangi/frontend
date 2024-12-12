import { useEffect, useState } from "react";

const useFetch = ()=>{
    const [data, setData] = useState(null);
    
    const dataFetching = async()=>{
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log("try",data);
            setData(data);
        }
        catch(error){
            console.log(error);
        }
     
    }
    
    useEffect(()=>{
       
        dataFetching();
    },[])
    return {data};
}
export default useFetch;