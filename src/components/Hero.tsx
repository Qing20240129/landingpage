import React from 'react'
import { Play } from 'lucide-react'

const Hero = () => {
  const productImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#e6f7ed] to-[#f0f9f4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-8">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Boost ecommerce LTV with generative AI video marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Commi.ai's AI-generated video platform helps ecommerce stores create personalized experiences for each of their customers across the user journey
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Increase conversion, boost LTV, and delight your customers while achieving 40X-100X ROI
            </p>
            <button className="bg-[rgb(35,164,86)] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-[rgb(28,131,69)] transition duration-300">
              <Play className="mr-2" size={20} />
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {productImages.map((image, index) => (
              <div key={index} className={`rounded-lg overflow-hidden ${index === 5 ? 'col-span-2 md:col-span-1' : ''}`}>
                <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero