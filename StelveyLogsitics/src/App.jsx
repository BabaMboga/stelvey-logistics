import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>

      {/*  adds some spacing on the sides */}
      <div className="container">
        <Title title='OUR SERVICES' subTitle='What we Offer'/>
        <Services/>
        <About/>
      </div>

      {/* <Services/> */}
      
    </div>
  )
}

export default App