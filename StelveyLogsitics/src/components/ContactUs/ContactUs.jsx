import React from 'react'
import { useState } from 'react'
import './ContactUs.css'
import message_icon from '../../assets/icons8-message-100.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow_icon from '../../assets/icons8-arrow-100.png'


const ContactUs = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key","9ff103f7-9d55-4d80-a1b2-f3e0ac7b52b4");

        const response = await fetch("https://api.web3forms.com/submit",{
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setResult(data.success ? "success!": "Error");
    }

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
                <li><img src={mail_icon} alt="mail icon" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="phone icon" />+1 123-456-798</li>
                <li><img src={location_icon} alt="location icon" />
                    Mihango Utawala, Nairobi
                    <br />
                    4888 - 00200
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label > Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile number' required />
                <label >Email</label>
                <input type="text" name='email' placeholder='Enter your email' required/>
                <label >Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={arrow_icon} alt="arrow icon" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default ContactUs