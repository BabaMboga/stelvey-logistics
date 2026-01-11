import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>

      {/*  adds some spacing on the sides */}
      <div className="container">
        <Title/>
        <Services/>
      </div>

      {/* <Services/> */}
      
    </div>
  )
}

export default App