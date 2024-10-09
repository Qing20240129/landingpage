import React from 'react'
import { Users, Zap, MessageSquare } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Features = () => {
  const [ref, isVisible] = useIntersectionObserver()

  const features = [
    {
      icon: <Users className="h-12 w-12 text-[rgb(35,164,86)]" />,
      title: 'Personalized Videos',
      description: 'Create unique videos for each customer based on their preferences and behavior.',
    },
    {
      icon: <Zap className="h-12 w-12 text-[rgb(35,164,86)]" />,
      title: 'Instant Generation',
      description: 'Generate high-quality videos in seconds using our advanced AI technology.',
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[rgb(35,164,86)]" />,
      title: 'Increased Engagement',
      description: 'Boost customer engagement and conversion rates with tailored video content.',
    },
  ]

  return (
    <section id="features" ref={ref} className={`py-20 bg-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center card-hover">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features