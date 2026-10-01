import React from 'react'
import products from '../data/data'
import { Link } from 'react-router-dom'

const Products = () => {


  return (
    <div className='container'>
        <h2>Products List</h2>
        <div className='grid'>
            {
                products.map((product)=>(
                    <div key={product.id} className='card'>
                        <h3>{product.title}</h3>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products