import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesOverview from './components/ServicesOverview'
import CareerGrowth from './components/CareerGrowth'
import ResetSection from './components/ResetSection'
import ConfidenceQuiz from './components/ConfidenceQuiz'
import Founder from './components/Founder'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import LenisProvider from './components/LenisProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LenisProvider>

        <Navbar />
        <Hero />
        <ServicesOverview />
        <CareerGrowth />
        <ResetSection />
        <ConfidenceQuiz />
        <Founder />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </LenisProvider>
    </>
  )
}

export default App
