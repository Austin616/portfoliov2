'use client';
import React, { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { useTheme } from '../components/ThemeProvider'
import { VerticalDock } from '../components/ui/vertical-dock'
import { Home as HomeIcon, Briefcase, User, Mail, Code, FileText, Star } from 'lucide-react'

const Home = () => {
  const { isDark, mounted } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Navigation items for the vertical dock
  const verticalNavItems = [
    {
      title: "Home",
      icon: <HomeIcon className="w-full h-full" />,
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      title: "Experience",
      icon: <Briefcase className="w-full h-full" />,
      onClick: () => {
        const experienceSection = document.querySelector('#experience');
        if (experienceSection) {
          experienceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      title: "About",
      icon: <User className="w-full h-full" />,
      onClick: () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      title: "Contact",
      icon: <Mail className="w-full h-full" />,
      onClick: () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <Hero />
        <Experience />
        <About />
        <Contact />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen w-full antialiased relative overflow-hidden"
      style={{
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.96)' : 'white',
        backgroundImage: isDark 
          ? 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)'
          : 'linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}
    >
      {/* Cursor Following Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDark 
              ? 'rgba(59, 130, 246, 0.15), transparent 80%' 
              : 'rgba(59, 130, 246, 0.1), transparent 80%'
          })`
        }}
      />
      
      <Hero />
      <Experience />
      <About />
      <Contact />
      
      {/* Vertical Navigation Dock */}
      <VerticalDock 
        items={verticalNavItems} 
        isDark={isDark} 
        showAfterHero={true}
        position="right"
      />
    </div>
  )
}

export default Home
