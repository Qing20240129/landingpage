import React from 'react'

const VideoShowcase = () => {
  const videos = [
    { id: 1, title: 'Professional Intro', url: 'https://example.com/video1.mp4' },
    { id: 2, title: 'Product Demo', url: 'https://example.com/video2.mp4' },
    { id: 3, title: 'Customer Testimonial', url: 'https://example.com/video3.mp4' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Personalized Video Samples</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <video className="w-full" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase