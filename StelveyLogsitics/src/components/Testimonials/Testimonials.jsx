import React from 'react'
import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/icons8-next-100.png'
import prev_icon from '../../assets/icons8-back-100.png'
import user_1 from '../../assets/brian-kungu-Lw53SYqI6yc-unsplash.jpg'
import user_2 from '../../assets/david-clode-xtIZ7SP5mEI-unsplash.jpg'
import user_3 from '../../assets/dwayne-joe-rufwP9MsNi0-unsplash.jpg'
import user_4 from '../../assets/pesa-onesmus-KbHac2uKTrI-unsplash.jpg'
import user_5 from '../../assets/terricks-noah-wJQk6xilGWk-unsplash.jpg'


const Testimonials = () => {

    const slider = useRef();
    const tx = useRef(0);

    const slideForward = () => {
        if (tx.current > -75){
            tx.current -= 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }
    
    const slideBackward = () => {
        if (tx.current < 0){
            tx.current += 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={prev_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Elizabeth Kungu</h3>
                                <span>Nyandarua</span>
                                
                            </div>
                        </div>
                        
                        <p>
                            Working with Stelvy Logistics has been a seamless experience from start to finish.
                            Their reliability, clear communication and on-time deliveries have made them a trusted
                            partner for our business operations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>David Clode</h3>
                                <span>Nairobi</span>
                            </div>
                        </div>
                        
                        <p>
                            Stelvy Logistics consistently delivers beyond expecations. Their timely distributions
                            to their highest levels of professionalism made them such a pleasure to work with despite
                            my earlier reservations about third-party logistics providers.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Dwayne Joe</h3>
                                <span>Kisumu</span>
                            </div>
                        </div>
                        
                        <p>
                            What stands out about Stelvy Logistics is their commitment to customer satisfaction.
                            They handle shipments with care, provide regular updates and ensure goods arrive safely
                            and on schedule.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Pesa Onesmus</h3>
                                <span>Mombasa</span>
                            </div>
                        </div>
                        
                        <p>
                            We rely on Stelvy Logistics for dependable transport and logistics solutions.
                            Their operational excellence and responsive support team give us complete
                            confidence in every delivery.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Terricks Noah</h3>
                                <span>South Africa</span>
                            </div>
                        </div>
                        
                        <p>
                            Stelvy Logistics has simplified our supply chain operations.
                            Their organised approach, timely execution and professionl staff 
                            have helped our business operate more efficiently and effectively.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials