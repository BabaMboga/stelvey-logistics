import React from 'react'
import { Element } from 'react-scroll'
import './Services.css'
import service_1 from '../../assets/service_1.jpg'
import service_2 from '../../assets/fleet_logistics.jpg'
import service_3 from '../../assets/service_3.jpg'
import service_icon_1 from '../../assets/water-transportation-100.png'
import service_icon_2 from '../../assets/warehouse-100.png'
import service_icon_3 from '../../assets/customs-officer-100.png'

const Services = () => {
  return (
    <Element className='services'id='service'>
        <div className="service">
            <img src={service_1} alt="freight & cargo transportation" />
            <div className="caption">
              <img src={service_icon_1} alt="cargo transportation" />
              <p>Freight & Cargo Transportation</p>
            </div>
        </div>
        <div className="service">
            <img src={service_2} alt="warehousing" />
            <div className="caption">
              <img src={service_icon_2} alt="Warehouse" />
              <p>Warehousing & Distribution</p>
            </div>
        </div>
        <div className="service">
            <img src={service_3} alt="customs cleaance & documentation" />
            <div className="caption">
              <img src={service_icon_3} alt="Customs officer" />
              <p>Customs Clearance & Documentation</p>
            </div>
        </div>

    </Element>
  )
}

export default Services