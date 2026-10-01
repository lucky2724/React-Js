import React from 'react'
import { useContext } from 'react'
import { userContext } from '../context/userContext'

const Username = () => {

  const {name,count,increaseCount}=useContext(userContext)

  return (
    <div>
      
        <h5>Hello !! - {name} -- Count - {count}</h5>
        <button onClick={increaseCount}>Increase</button>

    </div>
  )
  
}

export default Username