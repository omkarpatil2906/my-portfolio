import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
