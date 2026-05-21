import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        alert("Login successful");
        setEmail('');
        setPassword('');
    }
    const handleChange = (e) =>{
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }
    }
    const reset = () => {
        setEmail('');
        setPassword('');
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor= "Email">Email:</label>
            <input type="text" 
                name='email'
                placeholder='Enter your email' 
                value={email} onChange={handleChange} />
            <br /><br />
            <label htmlFor= "Password">Password:</label>
            <input type="password" 
                name='password'
                placeholder='Enter your password' 
                value={password} onChange={handleChange} />
            <br /><br />
            <button type="submit">Login</button>
            <button onClick={reset}>Reset</button>
        </form>
    </div>
  )
}

export default Login