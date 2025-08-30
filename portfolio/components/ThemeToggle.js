'use client';

import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { toggleTheme, isDark, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gray-300 rounded-xl animate-pulse border-2 border-gray-400" />
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center cursor-pointer"
    >
      <button
        onClick={toggleTheme}
        className={`
          relative overflow-hidden inline-flex items-center justify-center rounded-xl border h-10 w-10 transition-all duration-200 cursor-pointer ${
            isDark 
              ? 'border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-300 hover:text-blue-400' 
              : 'border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-700 hover:text-blue-600'
          }
        `}
      >
        <AnimatePresence initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export default ThemeToggle;