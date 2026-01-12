import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import WhyStelvey from './components/WhyStelvey/WhyStelvey'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>

      {/*  adds some spacing on the sides */}
      <div className="container">
        <Title title='OUR SERVICES' subTitle='What We Offer'/>
        <Services/>
        <About/>
        <Title title='WHY STELVEY' subTitle='Your Logistics Partner Of Choice'/>
        <WhyStelvey/>
        <Title title='TESTIMONIALS' subTitle='What Customers Say'/>
        <Testimonials/>
      </div>

      {/* <Services/> */}
      
    </div>
  )
}

export default App