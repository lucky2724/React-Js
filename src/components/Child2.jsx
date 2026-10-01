import React from 'react';
import "./Child2.css";

const Child2 = ({count,counter}) => {
    
    const increButton = ()=>{
        counter(count+1);
    }

    const decreButton = ()=>{
        counter(count-1);
    }

    const resetButton = ()=>{
        counter(count*0);
    }
    
  return (
    <div className='mainDiv'>
      
      <h3>Counter: {count}</h3>

      <button onClick={increButton} className="btn1">Increment +1</button>
      <button onClick={decreButton} className="btn2">Decrement -1</button>
      <button onClick={resetButton} className="btn3">Reset</button>
        
    </div>
  )
}

export default Child2;
