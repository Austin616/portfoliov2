'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const ButtonPopover = ({ content, children, onClick }) => {
  const { isDark } = useTheme();
  const [showPopover, setShowPopover] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const start = () => {
    const id = setTimeout(() => setShowPopover(true), 200);
    setTimeoutId(id);
  };

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      stop();
    }
    setShowPopover(false);
  };

  return (
    <div className="relative">
      <div
        onClick={onClick}
        onMouseEnter={start}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      
      <AnimatePresence>
        {showPopover && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`
              absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg z-50 pointer-events-none border ${
                isDark 
                  ? 'bg-blue-900/90 text-blue-100 border-blue-600/50' 
                  : 'bg-blue-50 text-blue-800 border-blue-200/50'
              }
            `}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonPopover;