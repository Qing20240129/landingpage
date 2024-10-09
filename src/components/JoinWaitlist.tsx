import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const JoinWaitlist = () => {
  const [email, setEmail] = useState('')
  const [ref, isVisible] = useIntersectionObserver()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <section id="waitlist" ref={ref} className={`py-20 bg-gray-50 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Waitlist</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be the first to experience the power of AI-generated personalized videos for your business.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(35,164,86)]"
              required
            />
            <button
              type="submit"
              className="bg-[rgb(35,164,86)] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-[rgb(28,131,69)] transition duration-300"
            >
              Join Waitlist
              <ArrowRight className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default JoinWaitlist