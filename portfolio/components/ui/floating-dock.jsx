"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingDock = ({
  items,
  className,
  mobileClassName,
  dockClassName,
  activeIndex: externalActiveIndex,
  isDark,
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform",
        className
      )}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex h-16 items-center justify-center gap-2 rounded-full px-4 backdrop-blur-md",
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
            <span className={`absolute -top-10 rounded-md px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 ${
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