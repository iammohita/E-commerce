import axios from 'axios'

async function getProducts(){
    const {data: {products}} = await axios.get("https://dummyjson.com/products");
    return products;
}

export default getProducts;