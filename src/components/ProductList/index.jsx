// Your product-list will be rendered here
import  {useState,useEffect} from 'react'
import axios from 'axios'

const [products, setProduct] = useState([]);
const ProductList = () => {
    useEffect(()=>{
        async function getProducts(){
        const products = await axios.get("https://dummyjson.com/products");
        setProduct(products.data)
        }
        getProducts();
    })
  return (
    <div>
    
    </div>
  )
}

export default ProductList
