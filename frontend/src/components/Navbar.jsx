import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="Navbar">
                <li className='List'><Link className='link' href="/" to="/">Home </Link></li>
                <li className='List'><Link className='link' href="/about" to="/about">About</Link></li>
                <li className='List'><Link className='link' href="/service" to="/service">Service</Link></li>
                <li className='List'><Link className='link' href="/contact" to="/contact">Contact</Link></li>
                <li className='List'><Link className='link' href="/useState" to="/useState">useState</Link></li>
                <li className='List'><Link className='link' href="/useEffect" to="/useEffect">useEffect</Link></li>
                <li className='List'><Link className='link' href="/signup" to="/signup">Signup</Link></li>   
                <li className='List'><Link className='link' href="/useEffectApi" to="/useEffectApi">useEffectApi</Link></li>
                <li className='List'><Link className='link' href="/login" to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar