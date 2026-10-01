import React from 'react'
import { replace, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();

    const handleLogin=()=>{
        const loggedIn=true;

        if(loggedIn){
            navigate("/",{replace:true})
        }
    }
       

  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login