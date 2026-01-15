import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 650 ? setSticky(true) : setSticky(false);
    })
  }, []);
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="stelvey_logo" className='logo' />
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
          <li><Link to='service' smooth={true} offset={0} duration={500}>Services</Link> </li>
          <li><Link to='about' smooth={true} offset={0} duration={500}>About Us</Link> </li>
          <li><Link to='whystelvey' smooth={true} offset={0} duration={500}>Why Stelvey</Link> </li>
          <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link> </li>
          <li>
            <Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar