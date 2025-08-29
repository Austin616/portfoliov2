"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../components/ThemeProvider";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Code, Dumbbell, Coffee, Music, MapPin, Calendar, FolderOpen } from "lucide-react";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";
import { LinkPreview } from "../../components/ui/link-preview";
import { HoverEffect } from "../../components/ui/card-hover-effect";

export function About() {
  const { isDark } = useTheme();
  
  const interests = [
    { icon: Code, label: "Coding", color: "blue" },
    { icon: Dumbbell, label: "Gym", color: "red" },
    { icon: Coffee, label: "Coffee", color: "amber" },
    { icon: Music, label: "Music", color: "purple" },
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "React Native", 
    "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Git", "AWS"
  ];

  return (
    <div id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TextGenerateEffect 
            words="More About Me"
            className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            duration={0.5}
            isDark={isDark}
            keywords={['More', 'About', 'Me']}
            isTitle={true}
          />
          <TextGenerateEffect 
            words="I'm a passionate full-stack developer currently finishing my Computer Science degree at UT Austin. Beyond coding, I enjoy staying active at the gym, exploring new coffee shops, and listening to music while working on projects."
            className={`text-lg md:text-xl leading-relaxed font-sans max-w-4xl ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            duration={0.02}
            isDark={isDark}
            keywords={['full-stack', 'developer', 'Computer', 'Science', 'UT', 'Austin', 'coding', 'projects']}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className={`relative overflow-hidden rounded-2xl border ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <Image
                src={hero}
                alt="Austin Tran"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDark 
                  ? 'from-gray-900/60 via-transparent to-transparent' 
                  : 'from-gray-900/30 via-transparent to-transparent'
              }`} />
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border lg:col-span-1 ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <TextGenerateEffect 
              words="Personal Info"
              className={`text-xl font-bold mb-4 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              duration={0.3}
              isDark={isDark}
            />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-sans ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Austin, Texas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-sans ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Graduating May 2024
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border lg:col-span-1 ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <TextGenerateEffect 
              words="Interests"
              className={`text-xl font-bold mb-4 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              duration={0.3}
              isDark={isDark}
            />
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-4 h-4 text-${interest.color}-500`} />
                    <span className={`text-sm font-medium font-sans ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {interest.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                  <Code className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Technical Skills
                </h3>
              </div>
              <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Here are some of my top technical skills. Visit my skills page to see my complete tech stack.
              </p>
            </div>
            
            {/* Skills Cards with LinkPreview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  title: 'React & Next.js',
                  description: 'Advanced React patterns, SSR, and modern hooks. Built 10+ production apps with Next.js 13+ features.',
                  link: 'https://react.dev',
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                },
                {
                  title: 'TypeScript',
                  description: 'Type-safe development with advanced TypeScript patterns. ES6+ features and modern JS paradigms.',
                  link: 'https://www.typescriptlang.org',
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                },
                {
                  title: 'Tailwind CSS',
                  description: 'Utility-first CSS framework mastery. Custom design systems and responsive layouts.',
                  link: 'https://tailwindcss.com',
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
                },
                {
                  title: 'React Native',
                  description: 'Cross-platform mobile development. Navigation, state management, and native modules.',
                  link: 'https://reactnative.dev',
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                }
              ].map((skill, index) => (
                <div key={index} className="relative group">
                  <LinkPreview 
                    url={skill.link} 
                    className="block h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className={`h-full rounded-2xl border p-4 transition-all duration-300 hover:shadow-xl ${
                        isDark 
                          ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50' 
                          : 'bg-white border-gray-200 hover:border-blue-300/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.title} logo`}
                          className="w-6 h-6 object-contain flex-shrink-0"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <h4 className={`font-bold text-sm ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.title}
                        </h4>
                      </div>
                      
                      <p className={`text-xs leading-relaxed line-clamp-3 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {skill.description}
                      </p>
                    </motion.div>
                  </LinkPreview>
                </div>
              ))}
            </div>
            
            {/* View more button */}
            <div className="text-center">
              <motion.a
                href="/skills"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isDark 
                    ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
              >
                <span>View all skills</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                  <FolderOpen className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Featured Projects
                </h3>
              </div>
              <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Check out some of my recent projects. Visit my projects page to see my complete portfolio.
              </p>
            </div>
            
            {/* Projects Grid with HoverEffect */}
            <HoverEffect 
              items={[
                {
                  title: 'UT Marketplace',
                  description: 'A full-stack marketplace application for UT students to buy and sell items safely within the campus community.',
                  category: 'Full-Stack',
                  image: '/api/placeholder/400/300',
                  technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
                  liveUrl: 'https://ut-marketplace.vercel.app',
                  githubUrl: 'https://github.com/austin616/ut-marketplace',
                  icon: '/api/placeholder/32/32'
                },
                {
                  title: 'UT Dining App',
                  description: 'React Native app helping UT students discover dining options, view menus, and track nutritional information.',
                  category: 'Mobile',
                  image: '/api/placeholder/400/300',
                  technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
                  liveUrl: 'https://github.com/austin616/UT-Dining',
                  githubUrl: 'https://github.com/austin616/UT-Dining',
                  icon: '/api/placeholder/32/32'
                }
              ]}
              className="mb-8"
            />
            
            {/* View more button */}
            <div className="text-center">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isDark 
                    ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
              >
                <span>View all projects</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* Gym CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 mb-8"
        >
          <motion.div 
            className={`rounded-2xl p-8 cursor-pointer group ${
              isDark 
                ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/30 shadow-lg' 
                : 'bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:border-blue-300/50 shadow-md'
            }`}
            onClick={() => window.location.href = '/gym'}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Blue accent glow */}
            <div 
              className={`
                absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl opacity-10
                ${isDark ? 'bg-blue-500' : 'bg-blue-400'}
              `}
            />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-xl ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                  <Dumbbell className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    My Fitness Journey
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Check out my workout routines and fitness progress
                  </p>
                </div>
              </div>
              
              <div className={`flex items-center justify-center p-3 rounded-full ${
                isDark ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity ${
                    isDark ? 'bg-blue-500/40' : 'bg-blue-400/40'
                  }`} />
                  <motion.div
                    initial={{ x: 0, opacity: 0.98 }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                    className={`relative transition-transform duration-300 group-hover:translate-x-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}