'use client';
import React from 'react'
import { Hero } from './components/Hero'
import { useTheme } from '../components/ThemeProvider'

const Home = () => {
  const { isDark, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <Hero />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <Hero />
    </div>
  )
}

export default Home
