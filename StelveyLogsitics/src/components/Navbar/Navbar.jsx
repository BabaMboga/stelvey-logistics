import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="stelvey_logo" className='logo' />
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Why Stelvey</li>
          <li>Testimonials</li>
          <li>
            <button className='btn'>Contact Us</button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar