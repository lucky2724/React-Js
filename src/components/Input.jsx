import React from 'react'

const Input = ({setName}) => {
  return (
    <div>
        <input type="text" placeholder='Enter a name...' onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default Input