// Your product-list will be rendered here
import  {useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        async function getProducts(){
        const products = await axios.get("https://dummyjson.com/products");
        setProducts(products.data.products)
    }
    getProducts();
    })
  return (
<div className='container'>
    <div className="row">
        {products.map(product=>(
        <div key={product.id} className="col-lg"><ProductCard title={product.title} price={product.price} description= {product.description} image={product.images[0]}/></div>
        ))}
    </div>
</div>
  )
}

export default ProductList
