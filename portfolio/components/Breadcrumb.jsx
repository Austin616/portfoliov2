'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Breadcrumb = ({ items }) => {
  const { isDark } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-40 pt-20 px-4 md:px-8 lg:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`inline-flex items-center gap-2 font-medium ${
          isDark 
            ? 'text-gray-300' 
            : 'text-gray-700'
        }`}>
        <Link href="/" className="flex items-center hover:text-blue-500 transition-colors">
          <Home className="w-4 h-4" />
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-blue-500 transition-colors text-sm"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-gray-500">{item.label}</span>
            )}
          </div>
        ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Breadcrumb;