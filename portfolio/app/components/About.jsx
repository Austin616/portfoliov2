"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../components/ThemeProvider";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Code, Dumbbell, Coffee, Music, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";

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
          className={`relative p-8 rounded-2xl border overflow-hidden cursor-pointer group ${
            isDark 
              ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 hover:border-blue-400/50' 
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:border-blue-300'
          }`}
          onClick={() => window.location.href = '/skills'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <TextGenerateEffect 
                words="Technical Skills"
                className={`text-2xl font-bold font-sans ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                duration={0.4}
                isDark={isDark}
              />
              <motion.div
                className={`p-2 rounded-full ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.slice(0, 8).map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-3 py-1 rounded-full text-sm font-medium font-sans border ${
                    isDark 
                      ? 'bg-blue-600/20 border-blue-500/30 text-blue-300' 
                      : 'bg-blue-50 border-blue-200 text-blue-800'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
              <span className={`px-3 py-1 rounded-full text-sm font-medium font-sans ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                +{skills.length - 8} more
              </span>
            </div>
            
            <p className={`text-base font-sans group-hover:text-blue-500 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore my complete tech stack and proficiency levels →
            </p>
          </div>
        </motion.div>

        {/* Gym Stats CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={`relative p-8 rounded-2xl border overflow-hidden cursor-pointer group mt-8 ${
            isDark 
              ? 'bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-500/30 hover:border-red-400/50' 
              : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:border-red-300'
          }`}
          onClick={() => window.location.href = '/gym'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -skew-x-12"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <TextGenerateEffect 
                words="💪 Gym Stats"
                className={`text-2xl font-bold font-sans ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                duration={0.4}
                isDark={isDark}
              />
              <motion.div
                className={`p-2 rounded-full ${
                  isDark ? 'bg-red-500/20' : 'bg-red-100'
                }`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Dumbbell className={`w-6 h-6 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className={`text-center p-3 rounded-lg ${
                isDark ? 'bg-red-500/10' : 'bg-red-50'
              }`}>
                <div className={`text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  315 lbs
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bench PR
                </div>
              </div>
              <div className={`text-center p-3 rounded-lg ${
                isDark ? 'bg-red-500/10' : 'bg-red-50'
              }`}>
                <div className={`text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  425 lbs
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Squat PR
                </div>
              </div>
              <div className={`text-center p-3 rounded-lg ${
                isDark ? 'bg-red-500/10' : 'bg-red-50'
              }`}>
                <div className={`text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  455 lbs
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Deadlift PR
                </div>
              </div>
              <div className={`text-center p-3 rounded-lg ${
                isDark ? 'bg-red-500/10' : 'bg-red-50'
              }`}>
                <div className={`text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  4+ years
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Training
                </div>
              </div>
            </div>
            
            <p className={`text-base font-sans group-hover:text-red-500 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              View my complete lifting stats and fitness journey →
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}