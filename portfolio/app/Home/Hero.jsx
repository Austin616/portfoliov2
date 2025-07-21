"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TwinklingParticles from '../components/TwinklingParticles'

const TypewriterText = () => {
  const texts = [
    "computer science student",
    "software developer",
    "problem solver",
    "creator"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typeSpeed, texts]);

  return (
    <span className="text-white border-r-2 border-white/30 pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20"
          style={{ y: heroY }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/45 to-pink-400/45 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/50 to-blue-400/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.5] dark:opacity-[0.3] text-blue-500/20 z-9999"></div>
        
        {/* Twinkling Particles */}
        <TwinklingParticles />
        
        {/* Floating Geometric Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-8 h-8 bg-blue-500/60 rounded-full shadow-lg shadow-blue-500/20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-purple-500/70 to-pink-500/70 rotate-45 shadow-lg shadow-purple-500/20"
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-20 w-10 h-10 bg-green-500/70 rounded-full shadow-lg shadow-green-500/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Background Glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/20 to-pink-500/15 blur-3xl"
          animate={{
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-4xl text-center relative z-10">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-3xl md:text-5xl font-light text-white mb-4 flex items-center justify-center gap-3">
              Hello, I'm Austin 
              <motion.span 
                className="text-4xl"
                animate={{ 
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                🤘
              </motion.span>
            </div>
            
            <div className="text-xl md:text-2xl font-light text-gray-300">
              I'm a <TypewriterText />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
            >
              Get in touch
            </motion.button>
            
            <motion.button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/austin-cv.pdf';
                link.download = 'Austin_CV.pdf';
                link.click();
              }}
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Hero
