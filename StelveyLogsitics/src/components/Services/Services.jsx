import React from 'react'
import './Services.css'
import service_1 from '../../assets/service_1.jpg'
import service_2 from '../../assets/service_2.jpg'
import service_3 from '../../assets/service_3.jpg'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service_1} alt="freight & cargo transportation" />
        </div>
        <div className="service">
            <img src={service_2} alt="warehousing" />
        </div>
        <div className="service">
            <img src={service_3} alt="customs cleaance & documentation" />
        </div>

    </div>
  )
}

export default Services