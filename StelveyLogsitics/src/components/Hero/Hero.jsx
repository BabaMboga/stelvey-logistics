import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/right-long-solid-full.svg'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>
          We deliver reliable logistics for a connected world.
        </h1>
        <p>
            Stelvy Logistics Limited provides efficient, secure and timely
            transport solutions, ensuring your goods move seamlessly from origin to
            destination with precision and care.
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="right arrow" /></button>
      </div>

    </div>
  )
}

export default Hero