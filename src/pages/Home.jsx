import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Designs from '../components/designs/Designs'
import Contact from '../components/contact/ContactSection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Designs />
        <Contact />
    </div>
  )
}

export default Home