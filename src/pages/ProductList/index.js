import React from "react";
import { getProducts } from "../../api/products";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  async function fetchProductList() {
    const data = await getProducts();
    setProducts(data);
  }
  return <div>{products}</div>;
};

export default ProductList;
