import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import WhyStelvey from './components/WhyStelvey/WhyStelvey'
import Testimonials from './components/Testimonials/Testimonials'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>

      {/*  adds some spacing on the sides */}
      <div className="container">
        <Title title='OUR SERVICES' subTitle='What We Offer'/>
        <Services/>
        <About setPlayVideo={setPlayVideo}/>
        <Title title='WHY STELVY' subTitle='Your Logistics Partner Of Choice'/>
        <WhyStelvey/>
        <Title title='TESTIMONIALS' subTitle='What Customers Say'/>
        <Testimonials/>
        <Title title='CONTACT US' subTitle='Get In Touch' />
        <ContactUs />
        <Footer/>
      </div>

      {/* <Services/> */}

      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>

      
    </div>
  )
}

export default App