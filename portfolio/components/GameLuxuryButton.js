'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const GameLuxuryButton = ({ 
  children, 
  hoverText, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  onClick, 
  icon: Icon,
  href,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  const variants = {
    primary: {
      base: 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white border-blue-400/50',
      hover: 'shadow-blue-500/60',
      glow: 'rgba(59, 130, 246, 0.4)',
      accent: '#3b82f6',
      textColor: 'text-white'
    },
    ghost: {
      base: isDark 
        ? 'bg-transparent border-blue-400/50 text-blue-300' 
        : 'bg-transparent border-blue-400 text-blue-700',
      hover: 'shadow-blue-500/30 bg-blue-500/10',
      glow: 'rgba(59, 130, 246, 0.2)',
      accent: '#3b82f6',
      textColor: isDark ? 'text-blue-300' : 'text-blue-700'
    }
  };

  const currentVariant = variants[variant];

  const sizeStyles = {
    default: 'px-8 py-4 text-base',
    compact: 'px-4 py-2 text-sm',
  };

  const iconSizes = {
    default: 'w-5 h-5',
    compact: 'w-4 h-4',
  };

  const handleClick = () => {
    if (href) {
      if (href.startsWith('#')) {
        // Check if we're on the home page
        if (window.location.pathname !== '/') {
          // Navigate to home page first, then scroll
          window.location.href = '/' + href;
        } else {
          // Already on home page, just scroll normally
          const targetElement = document.getElementById(href.substring(1));
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else if (href.startsWith('http')) {
        // External link - open in new tab
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        // Regular navigation
        window.location.href = href;
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      className={`
        group relative font-bold font-sans rounded-xl
        border-2 transition-all duration-500 overflow-hidden
        backdrop-blur-md uppercase tracking-wider
        ${sizeStyles[size]} ${currentVariant.base} ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 20px 40px ${currentVariant.glow}`
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      {...props}
    >
      {/* Racing stripe effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
        animate={{
          x: isHovered ? ['-100%', '200%'] : ['-100%', '-100%']
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        {Icon && (
          <motion.div
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className={iconSizes[size]} />
          </motion.div>
        )}
        
        <span className="block">{children}</span>
      </div>

      {/* Power-up charging effect */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 ${
          variant === 'primary' 
            ? 'bg-gradient-to-r from-white/60 via-white to-white/60' 
            : isDark 
              ? 'bg-gradient-to-r from-blue-400/60 via-blue-500 to-blue-400/60'
              : 'bg-gradient-to-r from-blue-500/60 via-blue-600 to-blue-500/60'
        }`}
        animate={{
          width: isHovered ? '100%' : '0%',
          opacity: isHovered ? [0.5, 1, 0.5] : 0
        }}
        transition={{
          width: { duration: 0.4 },
          opacity: { duration: 1, repeat: isHovered ? Infinity : 0 }
        }}
      />
    </motion.button>
  );
};

export default GameLuxuryButton;