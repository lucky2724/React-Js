import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <li><NavLink to="/" className="nav-link">Home</NavLink></li>
      <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
      <li><NavLink to="/about" className="nav-link">About</NavLink></li>
       <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
    </div>
  )
}

export default NavBar