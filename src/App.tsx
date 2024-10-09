import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SamplesSection from './components/SamplesSection'
import Features from './components/Features'
import JoinWaitlist from './components/JoinWaitlist'
import ContactDialog from './components/ContactDialog'
import Footer from './components/Footer'

function App() {
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowContact(true)
      } else {
        setShowContact(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-16"> {/* Added padding-top here */}
        <Hero />
        <SamplesSection />
        <Features />
        <JoinWaitlist />
      </main>
      <Footer />
      {showContact && <ContactDialog />}
    </div>
  )
}

export default App