// Your product-list will be rendered here
import React, {useState,useEffect} from 'react'
import axios from 'axios'

const index = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        async function getProducts(){
            const products = await axios.get("https://dummyjson.com/products");
        console.log(products)
        }
        getProducts();
    })
  return (
    <div>
      
    </div>
  )
}

export default index
