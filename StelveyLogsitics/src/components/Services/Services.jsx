import React from 'react'
import './Services.css'
import service_1 from '../../assets/service_1.jpg'
import service_2 from '../../assets/service_2.jpg'
import service_3 from '../../assets/service_3.jpg'
import service_icon_1 from '../../assets/icons8-water-transportation-100.png'
import service_icon_2 from '../../assets/icons8-warehouse-100.png'
import service_icon_3 from '../../assets/icons8-customs-officer-100.png'

const Services = () => {
  return (
    <div className='services'>
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

    </div>
  )
}

export default Services