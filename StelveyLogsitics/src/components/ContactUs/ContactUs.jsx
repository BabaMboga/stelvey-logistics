import React from 'react'
import './ContactUs.css'
import message_icon from '../../assets/icons8-message-100.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'


const ContactUs = () => {
  return (
    <div className='contact-us'>
        {/* left column */}
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="message icon" /></h3> 
            <p>
                Feel free to reach out through the contact form or find our contact
                information below. Whether you have inquiries about shipping services,
                need a custom logistics solution or want to track a delivery; our team
                is ready to assist you promptly and professionally.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1 123-456-798</li>
                <li><img src={location_icon} alt="" />
                    Mihango Utawala, Nairobi
                    <br />
                    4888 - 00200
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your nme' required/>
                <label > Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile number' required />
                <label >Write your messages here</label>
                <textarea name="message" rows="10"></textarea>
            </form>
        </div>
    </div>
  )
}

export default ContactUs