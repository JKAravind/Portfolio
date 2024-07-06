import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
    <section id='Hero'>
    <Navbar/>
    <Hero/>
    </section>

    <section id='About'>
      <About/>
    </section>

    <section id='Projects'>
      <Projects/>
    </section>


      
      
      
    </>
  )
}

export default App
