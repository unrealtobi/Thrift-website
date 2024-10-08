import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMyThrift from './components/AboutMyThrift'
import ComingSoonSection from './components/ComingSoonSection'
import FAQs from './components/FAQS'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {
  
  return (
    <div >
      {/* <Navbar /> */}
      <Hero />
      <AboutMyThrift></AboutMyThrift>
      <ComingSoonSection></ComingSoonSection>
      <FAQs></FAQs>
      <Countdown></Countdown>
      <Footer/>
      <Analytics/>
      <SpeedInsights/>
    </div>
  )
}

export default App
