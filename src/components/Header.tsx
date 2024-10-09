import React from 'react'
import { Video } from 'lucide-react'

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Video className="h-8 w-8 text-[rgb(35,164,86)] mr-2" />
            <span className="text-2xl font-bold text-gray-800">Commi.ai</span>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-6 mr-6">
              <li><button onClick={() => scrollToSection('samples')} className="text-gray-600 hover:text-[rgb(35,164,86)] transition duration-300">Samples</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-[rgb(35,164,86)] transition duration-300">Features</button></li>
            </ul>
            <button 
              onClick={() => scrollToSection('waitlist')} 
              className="bg-[rgb(35,164,86)] text-white px-4 py-2 rounded-full font-semibold hover:bg-[rgb(28,131,69)] transition duration-300"
            >
              Join Waitlist
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header