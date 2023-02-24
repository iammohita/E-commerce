// Your product-list will be rendered here
import  {useState,useEffect} from 'react'
import axios from 'axios'

const ProductList = () => {
    const [products, setProduct] = useState([]);
    
        async function getProducts(){
        const {data: {products}} = await axios.get("https://dummyjson.com/products");
        setProduct(products)
        }
        
        useEffect(()=>{
            getProducts()
    },[])
  return (
    <div>
    
    </div>
  )
}

export default ProductList
