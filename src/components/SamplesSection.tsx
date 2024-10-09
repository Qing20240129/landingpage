import React, { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const SamplesSection = () => {
  const [activeTab, setActiveTab] = useState('post-purchase')
  const [ref, isVisible] = useIntersectionObserver()

  const tabs = [
    { id: 'post-purchase', label: 'Post-Purchase Thank You' },
    { id: 'abandoned', label: 'Abandoned Checkout' },
    { id: 'welcome', label: 'Welcome' },
  ]

  const videos = {
    'post-purchase': [
      { id: 1, url: 'https://example.com/post-purchase-1.mp4' },
      { id: 2, url: 'https://example.com/post-purchase-2.mp4' },
      { id: 3, url: 'https://example.com/post-purchase-3.mp4' },
    ],
    'abandoned': [
      { id: 4, url: 'https://example.com/abandoned-1.mp4' },
      { id: 5, url: 'https://example.com/abandoned-2.mp4' },
      { id: 6, url: 'https://example.com/abandoned-3.mp4' },
    ],
    'welcome': [
      { id: 7, url: 'https://example.com/welcome-1.mp4' },
      { id: 8, url: 'https://example.com/welcome-2.mp4' },
      { id: 9, url: 'https://example.com/welcome-3.mp4' },
    ],
  }

  return (
    <section id="samples" ref={ref} className={`py-20 bg-gray-50 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Samples</h2>
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 rounded-full ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-800 border border-gray-300'
              } mr-4 last:mr-0 transition-all duration-300`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos[activeTab].map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <video className="w-full" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SamplesSection