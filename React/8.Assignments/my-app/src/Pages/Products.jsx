import React, { useState } from 'react'
import { useEffect } from 'react'
import style from '../CSS/Products.module.css'

const Products = () => {
  const [data,setData] = useState([]);
  const getProducts = async()=>{
    const response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products");
    const data = await response.json();
    console.log(data.data);
    setData(data.data);
  }
  
  useEffect(() => {
    getProducts();
  },[])
  return (
    <div >
      <h3>All Products</h3>
      <div className={style.container}>
      {
        data.map((product)=>{
          return(
            <div key={product.id} className={style.card}>
              <h4>{product.title}</h4>
              <p>{product.brand}</p>
              <p>{product.price}</p>
              </div>
          )

        })
      }
      </div>
    </div>
  )
}

export default Products
