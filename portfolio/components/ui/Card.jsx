"use client";

import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";

const Card = ({ 
  children, 
  className = "", 
  hover = true, 
  padding = "p-6",
  background,
  border,
  ...props 
}) => {
  const { isDark } = useTheme();
  
  const defaultBackground = isDark 
    ? "bg-gray-900/50" 
    : "bg-white/80";
  
  const defaultBorder = isDark 
    ? "border border-gray-700/50" 
    : "border border-gray-200/50";
  
  const finalBackground = background || defaultBackground;
  const finalBorder = border || defaultBorder;
  
  const baseClasses = `backdrop-blur-sm rounded-2xl ${finalBackground} ${finalBorder} ${padding} transition-colors duration-300`;
  const classes = `${baseClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial="rest"
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;