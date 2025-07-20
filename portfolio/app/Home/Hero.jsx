import React from 'react'
import TwinklingParticles from '../components/TwinklingParticles'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <TwinklingParticles />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-300">This is the home page</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
