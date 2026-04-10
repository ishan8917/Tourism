import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import Destinations from './components/Destinations'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="relative bg-white antialiased text-primary-900 selection:bg-gold-400 selection:text-primary-900">
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <Destinations />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
