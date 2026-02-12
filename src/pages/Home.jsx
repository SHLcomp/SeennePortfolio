import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default Home