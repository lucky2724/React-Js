import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/data'

const ProductDetail = () => {
  const { id } = useParams();
  console.log("Product ID:", id); // Log the product ID to the console


  const product = products.find((product) => {
    if (product.id === parseInt(id)) {
      console.log("Product found:", product); // Log the found product to the console
      return product;
    }
  });

  if(!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="detail-card">
        <h2 className="product-detail">Product Detail</h2>
        <h3 className="title"> {product.title} </h3>
        <p className="description">{product?.description}</p>
        <h4 className="price">${product?.price.toFixed(2)}</h4>

    </div>
  )
}

export default ProductDetail