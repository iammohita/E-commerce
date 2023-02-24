import { useState, useEffect } from "react";
import getProducts from "./requests";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  async function initData() {
    const products = await getProducts();
    setProduct(products);
  }

  useEffect(() => {
    initData();
  }, []);

  return <div></div>;
};

export default ProductList;
