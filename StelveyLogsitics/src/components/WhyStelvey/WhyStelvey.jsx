import React from 'react'
import './WhyStelvey.css'
import service_1 from '../../assets/service_1.jpg'
import service_2 from '../../assets/service_2.jpg'
import service_3 from '../../assets/service_3.jpg'
import service_4 from '../../assets/service_4.jpg'
import white_arrow from '../../assets/icons8-arrow-100.png'

const WhyStelvey = () => {
  return (
    <div className='whystelvey'>
        <div className="gallery">
            <img src={service_1} alt="customs clearance" />
            <img src={service_2} alt="transporting" />
            <img src={service_3} alt="freight & cargo distribution" />
            <img src={service_4} alt="warehousing" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="white arrow" /></button>

    </div>
  )
}

export default WhyStelvey