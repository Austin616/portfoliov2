"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const VerticalDock = ({
  items,
  className,
  dockClassName,
  activeIndex: externalActiveIndex,
  isDark,
  showAfterHero = false,
  position = "right", // "left" or "right"
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!showAfterHero);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");
  
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;
  
  useEffect(() => {
    // Get hero section height for conditional display
    if (showAfterHero) {
      const heroSection = document.querySelector('[data-section="hero"]');
      if (heroSection) {
        setHeroHeight(heroSection.offsetHeight);
      }
    }
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPosition = currentScrollY + (viewportHeight / 2);
      
      // Handle visibility based on scroll direction and hero section
      if (showAfterHero) {
        // Only show after scrolling past hero section
        if (currentScrollY > heroHeight * 0.7) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Default behavior - always visible
        setIsVisible(true);
      }
      
      // Detect current section
      const sections = [
        { id: "hero", element: document.querySelector('[data-section="hero"]') },
        { id: "experience", element: document.querySelector('#experience') },
        { id: "about", element: document.querySelector('#about') },
        { id: "contact", element: document.querySelector('#contact') }
      ];
      
      // Find the current section based on scroll position
      let currentSectionId = "hero";
      
      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionHeight = section.element.offsetHeight;
          
          // Check if we're in this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.id;
            break;
          }
          
          // If we're past this section but haven't found a match yet, update
          if (scrollPosition >= sectionTop) {
            currentSectionId = section.id;
          }
        }
      }
      
      setCurrentSection(currentSectionId);
      
      // Update active index based on current section
      if (items && items.length) {
        const sectionToIndexMap = {
          "hero": 0,
          "experience": 1,
          "about": 2,
          "contact": 3
        };
        
        if (sectionToIndexMap[currentSectionId] !== undefined) {
          setInternalActiveIndex(sectionToIndexMap[currentSectionId]);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, showAfterHero, heroHeight, items]);

  return (
    <div
      className={cn(
        "fixed top-1/2 -translate-y-1/2 z-50",
        position === "left" ? "left-4" : "right-4",
        className
      )}
    >
      <motion.div
        initial={{ x: position === "left" ? -100 : 100, opacity: 0 }}
        animate={{ 
          x: isVisible ? 0 : (position === "left" ? -100 : 100), 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-full py-4 px-3 backdrop-blur-md",
          isDark 
            ? "border border-gray-700/50 bg-gray-900/80" 
            : "border border-gray-200 bg-white/90 shadow-lg",
          dockClassName
        )}
      >
        {items.map((item, idx) => (
          <motion.button
            key={item.title}
            className={cn(
              "group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
              activeIndex === idx
                ? isDark 
                  ? "bg-blue-600/20 text-blue-400" 
                  : "bg-blue-100 text-blue-600"
                : isDark 
                  ? "hover:bg-gray-800/50 text-gray-400 hover:text-gray-300" 
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-800"
            )}
            onClick={() => {
              setInternalActiveIndex(idx);
              if (item.onClick) {
                item.onClick();
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`absolute ${position === "left" ? "left-12" : "right-12"} rounded-md px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap ${
              isDark 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
            }`}>
              {item.title}
            </span>
            <div className="h-5 w-5">{item.icon}</div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};
