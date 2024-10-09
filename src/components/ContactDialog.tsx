import React, { useState } from 'react'
import { X } from 'lucide-react'

const ContactDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[rgb(35,164,84)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(28,131,67)] transition duration-300 shadow-lg"
        >
          Contact Us
        </button>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-2xl w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[rgb(35,164,84)] text-white px-4 py-2 rounded font-semibold hover:bg-[rgb(28,131,67)] transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ContactDialog