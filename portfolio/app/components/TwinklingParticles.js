"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Client-side only twinkling particles component
const TwinklingParticles = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles data on client side only
    const colors = [
      'bg-white',
      'bg-blue-400',
      'bg-purple-400', 
      'bg-pink-400',
      'bg-cyan-400',
      'bg-yellow-400'
    ];
    
    const newParticles = [...Array(25)].map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 4
    }));
    
    setParticles(newParticles);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1 h-1 ${particle.color} rounded-full shadow-sm`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.8, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default TwinklingParticles; 