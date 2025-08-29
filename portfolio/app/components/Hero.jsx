"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FlipWords } from "../ui/flip-words";
import { Spotlight } from "../ui/spotlight-new";
import { Github, Linkedin, Mail, Code, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../../components/ThemeProvider";
import GameLuxuryButton from "../../components/GameLuxuryButton";
import ButtonPopover from "../../components/ButtonPopover";
import Link from "next/link";

const words = `I'm a full-stack developer with a passion for building scalable web and mobile applications and creating interactive user interfaces. I'm a Senior at the University of Texas at Austin, and I'm looking for a full-time position in the tech industry.`;

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/austin616",
    icon: <Github className="w-5 h-5"/>,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/austin-tran-57624a284/",
    icon: <Linkedin className="w-5 h-5"/>,
  },
];

export function Hero() {
  const { isDark, mounted } = useTheme();
  const [isAtLastSection, setIsAtLastSection] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const sections = ['#experience', '#about', '#contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSectionIndex = -1;
      sections.forEach((sectionId, index) => {
        const element = document.querySelector(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            currentSectionIndex = index;
          }
        }
      });
      
      // Check if we're at the last section (contact)
      setIsAtLastSection(currentSectionIndex === sections.length - 1);
    };

    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Check initial position

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen w-full flex md:items-center md:justify-center bg-white relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <div className="animate-pulse">
            <div className="h-20 bg-gray-300 rounded mb-4"></div>
            <div className="h-8 bg-gray-300 rounded mb-8"></div>
            <div className="h-32 bg-gray-300 rounded mb-12"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
              <div className="h-12 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden">
      <Spotlight 
        className="-top-40 left-0 md:left-60 md:-top-20" 
        fill="rgba(59, 130, 246, 0.3)" 
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 
            className="text-4xl md:text-7xl font-bold text-center font-sans"
            style={{
              color: isDark ? 'rgb(212, 212, 212)' : 'rgb(55, 65, 81)'
            }}
          >
            Austin <br className="md:hidden" />
            <span style={{ color: isDark ? 'rgb(96, 165, 250)' : 'rgb(37, 99, 235)' }}>Tran</span>
          </h1>
          
          <div className="mt-4 text-xl md:text-2xl text-center mb-8">
            <FlipWords 
              words={["full stack developer", "mobile developer", "gym bro", "foodie"]} 
              className="font-semibold font-sans"
              duration={2500}
            />
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <TextGenerateEffect 
            words={words} 
            className="text-lg md:text-xl leading-relaxed font-sans"
            duration={0.3}
            isDark={isDark}
            keywords={['full-stack', 'developer', 'web', 'mobile', 'applications', 'user', 'interfaces', 'University', 'Texas', 'Austin', 'full-time', 'position', 'tech', 'industry']}
            isTitle={true}
          />
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <GameLuxuryButton
            variant="primary"
            size="default"
            icon={Mail}
            href="#contact"
            className="shadow-xl shadow-blue-500/20"
          >
            Get In Touch
          </GameLuxuryButton>
          
          <GameLuxuryButton
            variant="ghost"
            size="default"
            icon={Download}
            href="/resume.pdf"
            target="_blank"
            className={isDark 
              ? 'shadow-xl shadow-blue-500/20' 
              : 'bg-white/90 shadow-xl shadow-blue-500/20'
            }
          >
            Download Resume
          </GameLuxuryButton>
          
          <GameLuxuryButton
            variant="ghost"
            size="default"
            icon={Code}
            href="#projects"
            className={isDark 
              ? 'shadow-xl shadow-blue-500/20' 
              : 'bg-white/90 shadow-xl shadow-blue-500/20'
            }
          >
            View My Work
          </GameLuxuryButton>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-3"
        >
          {socialLinks.map((link) => (
            <ButtonPopover key={link.title} content={link.title}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-center rounded-xl border h-10 w-10 transition-all duration-200 ${
                      isDark 
                        ? 'border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-300 hover:text-blue-400' 
                        : 'border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-700 hover:text-blue-600'
                    }
                  `}
                >
                  <div className="text-lg">{link.icon}</div>
                </Link>
              </motion.div>
            </ButtonPopover>
          ))}
        </motion.div>
        
      </div>
      
      {/* Animated Down Arrow - Fixed at bottom of screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
          <motion.button
            onClick={() => {
              // Get all sections in order as they appear on the page
              const sections = ['#experience', '#about', '#contact'];
              
              // Find current section based on scroll position
              let currentSectionIndex = -1;
              const scrollPosition = window.scrollY + window.innerHeight / 2;
              
              sections.forEach((sectionId, index) => {
                const element = document.querySelector(sectionId);
                if (element) {
                  const elementTop = element.offsetTop;
                  if (scrollPosition >= elementTop) {
                    currentSectionIndex = index;
                  }
                }
              });
              
              // Scroll to next section
              const nextSectionIndex = currentSectionIndex + 1;
              if (nextSectionIndex < sections.length) {
                const nextSection = document.querySelector(sections[nextSectionIndex]);
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                // If at last section, scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              inline-flex items-center justify-center rounded-full h-12 w-12 transition-all duration-200 ${
                isDark 
                  ? 'border border-gray-600/50 hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400' 
                  : 'border border-gray-300/50 hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-600 hover:text-blue-600'
              }
            `}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isAtLastSection ? 'up' : 'down'}
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isAtLastSection ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>
    </div>
  );
}