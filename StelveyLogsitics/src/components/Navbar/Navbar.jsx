import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="stelvey_logo" />
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Why Stelvey</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar