import React from 'react'
import './ContactUs.css'
import message_icon from '../../assets/icons8-message-100.png'

const ContactUs = () => {
  return (
    <div className='contact-us'>
        {/* left column */}
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3> 
            <p>
                Feel free to reach out through the contact form or find our contact
                information below. Whether you have inquiries about shipping services,
                need a custom logistics solution or want to track a delivery; our team
                is ready to assist you promptly and professionally.
            </p>
            <ul>
                <li>contact@gmail.com</li>
                <li>+1 123-456-798</li>
                <li>
                    Mihango Utawala, Nairobi
                    <br />
                    4888 - 00200
                </li>
            </ul>
        </div>
        <div className="contact-col"></div>
    </div>
  )
}

export default ContactUs