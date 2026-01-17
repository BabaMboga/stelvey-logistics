import React from 'react'
import './About.css'
import about_us from '../../assets/about_us.png'
import play_icon from '../../assets/play-icon-100.png'

const About = ({setPlayVideo}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-image-wrapper">
                <img src={about_us} alt="about stelvey logistics" className='about-img' />
                <img src={play_icon} alt="play icon" className='play-icon'onClick={() => {setPlayVideo(true)}}/>
            </div>
            
        </div>
        <div className="about-right">
            <h3>ABOUT STELVY LOGISTICS</h3>
            <h2>Driving Reliable Logistics for a Connected World</h2>
            <p>
                At Stelvy Logistics, we provide end-to-end shipping and logistics solutions designed to keep goods moving efficiently and 
                securely. Our operations are built around reliability, precision and a deep understanding of modern supply chain demands.
            </p>
            <br />
            <p>
                With a strong focus on operational excellence, technology-driven processes and hands-on industry expertise, we manage transportation, 
                warehousing and distribution with attention to detail at every stage of the journey.
            </p>
            <br />
            <p>
                Whether you are a growing business or an established enterprise, Stelvy Logistics offers flexible, scalable solutions tailored to your
                needs-ensuring timely delivery, cost efficiency and complete peace of mind.
            </p>
        </div>
    </div>
  )
}

export default About