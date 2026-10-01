import React from 'react';
import "./Child.css";

const Child = (props) => {
  return (
    <div className="mainDiv">
        <div className='card'>
            <img src={props.pizza} alt="pizza" />
            <h3>{props.pizzaTitle}</h3>
            <h5>Price: {props.pizzaPrice}.00</h5>
            <button>Order Now</button>
        </div>

         <div className='card'>
            <img src={props.burger} alt="burger" />
            <h3>{props.burgerTitle}</h3>
            <h5>Price: {props.burgerPrice}.00</h5>
            <button>Order Now</button>
        </div>

         <div className='card'>
            <img src={props.wrap} alt="wrap" />
            <h3>{props.wrapTitle}</h3>
            <h5>Price: {props.wrapPrice}.00</h5>
            <button>Order Now</button>
        </div>

    </div>
    
  )
}

export default Child;