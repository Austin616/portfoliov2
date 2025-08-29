"use client";

import React from "react";
import { Timeline } from "../ui/timeline";
import { useTheme } from "../../components/ThemeProvider";
import { Briefcase, Code, Smartphone, Globe, Database, Users, Building, CheckCircle } from "lucide-react";

export function Experience() {
  const { isDark } = useTheme();
  
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className={`mb-8 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Currently seeking full-time Software Engineer opportunities while finishing 
            my final semester at UT Austin. Building personal projects and contributing 
            to open-source initiatives to strengthen my technical portfolio.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 text-blue-300 hover:border-blue-400/50 shadow-lg shadow-blue-500/10' 
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-800 hover:border-blue-300 shadow-lg shadow-blue-500/10'
            }`}>
              <Briefcase className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Job Search
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 text-purple-300 hover:border-purple-400/50 shadow-lg shadow-purple-500/10' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-800 hover:border-purple-300 shadow-lg shadow-purple-500/10'
            }`}>
              <Code className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Personal Projects
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30 text-green-300 hover:border-green-400/50 shadow-lg shadow-green-500/10' 
                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800 hover:border-green-300 shadow-lg shadow-green-500/10'
            }`}>
              <Globe className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Full Stack
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500/30 text-orange-300 hover:border-orange-400/50 shadow-lg shadow-orange-500/10' 
                : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-800 hover:border-orange-300 shadow-lg shadow-orange-500/10'
            }`}>
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Mobile Dev
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className={`mb-8 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Freelance Web Developer - Built custom websites and web applications for 
            local businesses and startups. Specialized in React, Next.js, and modern 
            web technologies to deliver scalable solutions.
          </p>
          <p className={`mb-8 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Collaborated with clients to understand requirements, design user experiences, 
            and deploy production-ready applications with responsive design and optimal performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                : 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-800 hover:border-cyan-300 shadow-lg shadow-cyan-500/10'
            }`}>
              <Users className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Client Work
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 border-indigo-500/30 text-indigo-300 hover:border-indigo-400/50 shadow-lg shadow-indigo-500/10' 
                : 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-800 hover:border-indigo-300 shadow-lg shadow-indigo-500/10'
            }`}>
              <Globe className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Web Apps
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-pink-600/20 to-pink-800/20 border-pink-500/30 text-pink-300 hover:border-pink-400/50 shadow-lg shadow-pink-500/10' 
                : 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 text-pink-800 hover:border-pink-300 shadow-lg shadow-pink-500/10'
            }`}>
              <Code className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              React/Next.js
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-red-600/20 to-red-800/20 border-red-500/30 text-red-300 hover:border-red-400/50 shadow-lg shadow-red-500/10' 
                : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200 text-red-800 hover:border-red-300 shadow-lg shadow-red-500/10'
            }`}>
              <Database className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Full Stack
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2022",
      content: (
        <div>
          <p className={`mb-4 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Junior Web Developer Intern - Tech Solutions Co. First professional 
            experience working with development teams on real-world projects.
          </p>
          <div className="mb-8">
            <div className={`flex items-center gap-2 text-xs md:text-sm font-sans ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <CheckCircle className="w-4 h-4 text-green-500" />
              Frontend development with HTML, CSS, JavaScript
            </div>
            <div className={`flex items-center gap-2 text-xs md:text-sm font-sans ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <CheckCircle className="w-4 h-4 text-green-500" />
              Collaborated with senior developers on UI components
            </div>
            <div className={`flex items-center gap-2 text-xs md:text-sm font-sans ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <CheckCircle className="w-4 h-4 text-green-500" />
              Bug fixing and testing web applications
            </div>
            <div className={`flex items-center gap-2 text-xs md:text-sm font-sans ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <CheckCircle className="w-4 h-4 text-green-500" />
              Version control with Git and GitHub
            </div>
            <div className={`flex items-center gap-2 text-xs md:text-sm font-sans ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <CheckCircle className="w-4 h-4 text-green-500" />
              Agile development methodologies
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-amber-600/20 to-amber-800/20 border-amber-500/30 text-amber-300 hover:border-amber-400/50 shadow-lg shadow-amber-500/10' 
                : 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 text-amber-800 hover:border-amber-300 shadow-lg shadow-amber-500/10'
            }`}>
              <Building className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Internship
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border-emerald-500/30 text-emerald-300 hover:border-emerald-400/50 shadow-lg shadow-emerald-500/10' 
                : 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-800 hover:border-emerald-300 shadow-lg shadow-emerald-500/10'
            }`}>
              <Users className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Team Work
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-violet-600/20 to-violet-800/20 border-violet-500/30 text-violet-300 hover:border-violet-400/50 shadow-lg shadow-violet-500/10' 
                : 'bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200 text-violet-800 hover:border-violet-300 shadow-lg shadow-violet-500/10'
            }`}>
              <Code className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Frontend
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-teal-600/20 to-teal-800/20 border-teal-500/30 text-teal-300 hover:border-teal-400/50 shadow-lg shadow-teal-500/10' 
                : 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 text-teal-800 hover:border-teal-300 shadow-lg shadow-teal-500/10'
            }`}>
              <Globe className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Web Dev
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}