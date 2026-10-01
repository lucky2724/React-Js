import React from 'react'

import { useNavigate } from 'react-router-dom'

const ForwardBackward = () => {

    const navigate=useNavigate();

  return (
    <div>
        <button onClick={()=>navigate(-1)}>Previous</button>
        <button onClick={()=>navigate(1)}>Next</button>
    </div>
  )
}

export default ForwardBackward