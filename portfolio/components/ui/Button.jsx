"use client";

import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";

const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md", 
  className = "",
  disabled = false,
  ...props 
}) => {
  const { isDark } = useTheme();
  const baseClasses = "font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: isDark 
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500" 
      : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: isDark
      ? "border border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-500"
      : "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: isDark
      ? "text-gray-300 hover:bg-gray-800 focus:ring-gray-500"
      : "text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;