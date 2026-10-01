import React from 'react'

const Reset = ({setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Reset