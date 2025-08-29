"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../components/ThemeProvider";
import { Briefcase, User, Mail } from "lucide-react";

const SidebarNav = ({ activeSection, setActiveSection }) => {
  const { isDark } = useTheme();
  
  const navItems = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "about", label: "About Me", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-1/2 -translate-y-1/2 h-0 flex justify-center z-50">
      <div className={`relative flex flex-col items-center py-6 px-2 rounded-full backdrop-blur-md border ${
        isDark 
          ? 'bg-black/80 border-gray-800' 
          : 'bg-white/80 border-gray-200'
      }`}>
        {/* Vertical line - behind icons */}
        <div className={`absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 z-0 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`} />
        
        {/* Active indicator line - behind icons */}
        <motion.div
          className="absolute left-1/2 w-0.5 -translate-x-1/2 bg-blue-500 rounded-full z-0"
          animate={{
            top: `${20 + navItems.findIndex(item => item.id === activeSection) * 60}px`,
            height: '40px'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative z-20 group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 mb-4 last:mb-0 ${
                isActive
                  ? isDark
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : isDark
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className={`absolute left-16 px-3 py-1 rounded-lg text-sm font-medium font-sans whitespace-nowrap pointer-events-none z-30 ${
                  isDark
                    ? 'bg-gray-800 text-white border border-gray-700'
                    : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
                }`}
              >
                {item.label}
                <div className={`absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45 ${
                  isDark ? 'bg-gray-800 border-l border-b border-gray-700' : 'bg-white border-l border-b border-gray-200'
                }`} />
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNav;