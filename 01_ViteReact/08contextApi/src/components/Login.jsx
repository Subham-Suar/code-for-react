import React from 'react'

function Login() {
    const handleSubmit = ()=>{
        
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholders="username"></input>
        <input type="password" placeholders="password"></input>
        <button onCLick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Login