'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight, User, Home, Code, Briefcase, Github, Linkedin, Dumbbell, FolderOpen } from 'lucide-react';

import { useTheme } from '../../components/ThemeProvider';
import ThemeToggle from '../../components/ThemeToggle';
import GameLuxuryButton from '../../components/GameLuxuryButton';
import ButtonPopover from '../../components/ButtonPopover';



export const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/austin616",
    icon: <Github className="w-5 h-5"/>,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/austin-tran-57624a284/",
    icon: <Linkedin className="w-5 h-5"/>,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, mounted } = useTheme();
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (href === "/#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home className="w-4 h-4" />, isPage: true },
    { href: '/skills', label: 'Skills', icon: <Code className="w-4 h-4" />, isPage: true },
    { href: '/projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" />, isPage: true },
    { href: '/gym', label: 'Gym', icon: <Dumbbell className="w-4 h-4" />, isPage: true },
  ];

  if (!mounted) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[999999] mx-auto flex w-full items-center justify-between bg-white/80 backdrop-blur-lg px-4 py-4 sm:px-8">
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded animate-pulse" />
          <div className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className={`
      fixed left-0 right-0 top-0 z-[999999] mx-auto flex w-full items-center justify-between border-b border-transparent py-2 transition-all duration-300 ease-in-out sm:px-8 ${
        scrolled
          ? isDark 
            ? 'border-blue-500/20 bg-black/95 px-4 sm:mt-2 sm:w-[70rem] sm:rounded-full sm:bg-black/90 sm:px-8 sm:py-3 sm:shadow-lg sm:shadow-blue-500/20'
            : 'border-blue-500/20 bg-white/95 px-4 sm:mt-2 sm:w-[70rem] sm:rounded-full sm:bg-white/90 sm:px-8 sm:py-3 sm:shadow-lg sm:shadow-blue-500/10'
          : 'px-4 sm:py-4'
      }
    `}>
      {/* Logo */}
      <Link href="/">
        <div className="group flex items-center gap-x-3">
          <motion.div 
            className={`
              flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
                scrolled 
                  ? 'w-10 h-10 sm:w-12 sm:h-12' 
                  : 'w-12 h-12 sm:w-14 sm:h-14'
              } ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/20' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20'
              }
            `}
            whileHover={{ rotate: 5 }}
          >
            <User className={`${scrolled ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-7 sm:h-7'} text-white`} />
          </motion.div>
          
          <div className={`
            overflow-hidden transition-all duration-300 ${
              scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
            } font-bold font-sans ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            <span className="">Austin</span>
            <span className="text-blue-500 ml-1">Tran</span>
          </div>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`
          transition-all duration-300 ease-in-out sm:hidden p-2 rounded-lg ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          } ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}
        `}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        variants={{
          hidden: { width: "100%", left: "100%" },
          visible: { width: "100%", left: 0 }
        }}
        animate={isMenuOpen ? "visible" : "hidden"}
        className={`
          fixed bottom-0 left-0 right-0 top-0 z-[999999] flex h-full w-full flex-col items-center overflow-hidden px-4 sm:hidden ${
            !isMenuOpen ? 'pointer-events-none' : ''
          } ${isDark ? 'bg-black' : 'bg-white'}
        `}
      >
        <button
          onClick={toggleMenu}
          className={`
            absolute right-4 top-2 transition-all duration-300 ease-in-out sm:hidden p-2 rounded-lg ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            } ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}
          `}
        >
          <X className="w-6 h-6" />
        </button>

        {navLinks.map((link, index) => (
          link.isPage ? (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
                group mt-14 first:mt-14 flex w-full items-center justify-between gap-x-3 border-b p-4 text-left text-2xl font-semibold font-sans transition-colors ${
                  pathname === link.href
                    ? isDark 
                      ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                      : 'border-blue-500 bg-blue-500/10 text-blue-600'
                    : isDark 
                      ? 'border-gray-800 text-white hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400'
                      : 'border-gray-200 text-gray-900 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-600'
                }
              `}
            >
              <div className="flex items-center gap-x-3">
                {link.icon}
                {link.label}
              </div>
              <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] opacity-50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:opacity-100" />
            </Link>
          ) : (
            <a
              key={link.href}
              onClick={(e) => {
                smoothScroll(e, link.href);
                setIsMenuOpen(false);
              }}
              className={`
                group mt-14 first:mt-14 flex w-full items-center justify-between gap-x-3 border-b p-4 text-left text-2xl font-semibold font-sans transition-colors ${
                  isDark 
                    ? 'border-gray-800 text-white hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400'
                    : 'border-gray-200 text-gray-900 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-600'
                }
              `}
              href={link.href}
            >
              <div className="flex items-center gap-x-3">
                {link.icon}
                {link.label}
              </div>
              <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] opacity-50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:opacity-100" />
            </a>
          )
        ))}

        {/* Mobile Theme Switch */}
        <div className="mt-14 flex w-full items-center justify-center border-b p-4">
          <div className="cursor-pointer">
            <ThemeToggle />
          </div>
        </div>

        {/* Social Links in Mobile Menu */}
        <div className="flex items-center gap-x-8 mt-8">
          {socialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-125 ${
                isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden items-center w-full justify-end gap-x-6 sm:flex">
        {/* Nav Links */}
        <div className="flex items-center gap-x-6">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link key={link.href} href={link.href}>
                <motion.div 
                  className="group relative flex items-center gap-x-2 cursor-pointer text-sm font-semibold font-sans px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon with group hover rotation */}
                  <motion.div
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? isDark ? 'text-blue-400' : 'text-blue-600'
                        : isDark 
                          ? 'text-gray-400 group-hover:text-blue-400' 
                          : 'text-gray-500 group-hover:text-blue-600'
                    }`}
                    animate={{
                      rotate: 0,
                      scale: 1,
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {link.icon}
                  </motion.div>

                  {/* Text with group hover color change */}
                  <span
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? isDark ? 'text-blue-300' : 'text-blue-600'
                        : isDark 
                          ? 'text-gray-300 group-hover:text-blue-300' 
                          : 'text-gray-600 group-hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Clean underline */}
                  {pathname === link.href ? (
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 w-full ${
                        isDark ? 'bg-blue-400' : 'bg-blue-500'
                      }`}
                    />
                  ) : (
                    <motion.div
                      className={`absolute bottom-0 left-0 h-0.5 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-500'
                      }`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={(e) => smoothScroll(e, link.href)}>
                <motion.div 
                  className="group relative flex items-center gap-x-2 cursor-pointer text-sm font-semibold font-sans px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon with group hover rotation */}
                  <motion.div
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? 'text-gray-400 group-hover:text-blue-400' 
                        : 'text-gray-500 group-hover:text-blue-600'
                    }`}
                    animate={{
                      rotate: 0,
                      scale: 1,
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {link.icon}
                  </motion.div>

                  {/* Text with group hover color change */}
                  <span
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? 'text-gray-300 group-hover:text-blue-300' 
                        : 'text-gray-600 group-hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Clean underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      isDark ? 'bg-blue-400' : 'bg-blue-500'
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </a>
            )
          ))}
        </div>
        
        {/* Vertical Separator */}
        <div className={`w-px h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
        
        {/* Action Buttons */}
        <div className="flex items-center gap-x-3">
          {/* Social Links */}
          {socialLinks.map((link) => (
            <ButtonPopover key={link.title} content={link.title}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-center rounded-xl border h-10 w-10 transition-all duration-200 ${
                      isDark 
                        ? 'border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-300 hover:text-blue-400' 
                        : 'border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-700 hover:text-blue-600'
                    }
                  `}
                >
                  <div className="text-lg">{link.icon}</div>
                </Link>
              </motion.div>
            </ButtonPopover>
          ))}
          
          {/* Theme Toggle Button */}
          <div className="cursor-pointer">
            <ThemeToggle />
          </div>
          
          {/* Contact Button */}
          <GameLuxuryButton
            variant={isDark ? "primary" : "ghost"}
            size="compact"
            icon={Briefcase}
            href="#contact"
            className={` cursor-pointer ${isDark 
              ? 'shadow-xl shadow-blue-500/20' 
              : 'bg-white/90 shadow-xl shadow-blue-500/20'
            }
            `}
          >
            HIRE ME
          </GameLuxuryButton>
        </div>
      </div>
    </div>
  );
};

export default Header;