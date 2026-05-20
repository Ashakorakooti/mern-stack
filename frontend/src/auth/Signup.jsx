import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully");
        setFormData({
            Name: '',
            email: '',
            password: ''
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <label htmlFor= "Name">Name:</label>
            <input type="text" 
                name='Name'
                placeholder='Enter your name' 
                value={formData.Name} onChange={handleChange} />
            <br /><br />
            <label htmlFor= "Email">Email:</label>
            <input type="email" 
                name = 'email'
                placeholder='Enter your email' 
                value={formData.email} onChange={handleChange} />
            <br /><br />
            <label htmlFor= "Password">Password:</label>
            <input type="password" 
                name = 'password' 
                placeholder='Enter your password' 
                value={formData.password} onChange={handleChange} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup