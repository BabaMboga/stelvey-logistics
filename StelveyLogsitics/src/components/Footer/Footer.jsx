import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>© {currentYear} Stelvy Logistics. All rights reserved.</p>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer