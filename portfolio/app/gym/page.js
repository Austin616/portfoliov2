'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { Timeline } from '../ui/timeline';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Dumbbell, Target, TrendingUp, Award, Calendar, Zap, Trophy, Medal, BarChart3, Activity } from 'lucide-react';

const GymPage = () => {
  const { isDark, mounted } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const fitnessData = [
    {
      title: "2024",
      content: (
        <div>
          <p className={`mb-8 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Peak performance year! Hit major PRs across all lifts and refined my training 
            methodology. Currently preparing for potential powerlifting competition while 
            maintaining consistency and injury-free training.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 text-blue-300 hover:border-blue-400/50 shadow-lg shadow-blue-500/10' 
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-800 hover:border-blue-300 shadow-lg shadow-blue-500/10'
            }`}>
              <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              315 lb Bench
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 text-purple-300 hover:border-purple-400/50 shadow-lg shadow-purple-500/10' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-800 hover:border-purple-300 shadow-lg shadow-purple-500/10'
            }`}>
              <Target className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              425 lb Squat
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30 text-green-300 hover:border-green-400/50 shadow-lg shadow-green-500/10' 
                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800 hover:border-green-300 shadow-lg shadow-green-500/10'
            }`}>
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              455 lb Deadlift
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500/30 text-orange-300 hover:border-orange-400/50 shadow-lg shadow-orange-500/10' 
                : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-800 hover:border-orange-300 shadow-lg shadow-orange-500/10'
            }`}>
              <Medal className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              1200 lb Total
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
            The year of strength and size! Balanced powerlifting with hypertrophy work, 
            implemented proper periodization, and started tracking macros seriously. 
            Added significant muscle mass while maintaining low body fat.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 text-blue-300 hover:border-blue-400/50 shadow-lg shadow-blue-500/10' 
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-800 hover:border-blue-300 shadow-lg shadow-blue-500/10'
            }`}>
              <BarChart3 className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Added 15 lbs Muscle
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 text-purple-300 hover:border-purple-400/50 shadow-lg shadow-purple-500/10' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-800 hover:border-purple-300 shadow-lg shadow-purple-500/10'
            }`}>
              <Activity className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              95% Consistency
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30 text-green-300 hover:border-green-400/50 shadow-lg shadow-green-500/10' 
                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800 hover:border-green-300 shadow-lg shadow-green-500/10'
            }`}>
              <Zap className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Macro Tracking
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500/30 text-orange-300 hover:border-orange-400/50 shadow-lg shadow-orange-500/10' 
                : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-800 hover:border-orange-300 shadow-lg shadow-orange-500/10'
            }`}>
              <Award className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Zero Injuries
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className={`mb-8 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Form and fundamentals year! Focused heavily on perfecting technique 
            and building a solid foundation. Started with basic compound movements 
            and learned proper lifting mechanics from experienced trainers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 text-blue-300 hover:border-blue-400/50 shadow-lg shadow-blue-500/10' 
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-800 hover:border-blue-300 shadow-lg shadow-blue-500/10'
            }`}>
              <Target className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Perfect Form
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 text-purple-300 hover:border-purple-400/50 shadow-lg shadow-purple-500/10' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-800 hover:border-purple-300 shadow-lg shadow-purple-500/10'
            }`}>
              <Dumbbell className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Compound Focus
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30 text-green-300 hover:border-green-400/50 shadow-lg shadow-green-500/10' 
                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800 hover:border-green-300 shadow-lg shadow-green-500/10'
            }`}>
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Work Capacity
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500/30 text-orange-300 hover:border-orange-400/50 shadow-lg shadow-orange-500/10' 
                : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-800 hover:border-orange-300 shadow-lg shadow-orange-500/10'
            }`}>
              <Calendar className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Routine Built
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className={`mb-8 text-xs md:text-sm font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            The beginning of my fitness journey! Started as a complete beginner 
            with focus on consistency and learning the basics. Got my first gym 
            membership and committed to building this life-changing habit.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 text-blue-300 hover:border-blue-400/50 shadow-lg shadow-blue-500/10' 
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-800 hover:border-blue-300 shadow-lg shadow-blue-500/10'
            }`}>
              <Dumbbell className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              First Gym
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 text-purple-300 hover:border-purple-400/50 shadow-lg shadow-purple-500/10' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-800 hover:border-purple-300 shadow-lg shadow-purple-500/10'
            }`}>
              <Target className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Basic Exercises
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30 text-green-300 hover:border-green-400/50 shadow-lg shadow-green-500/10' 
                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800 hover:border-green-300 shadow-lg shadow-green-500/10'
            }`}>
              <Calendar className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Built Habit
            </div>
            <div className={`h-20 md:h-44 lg:h-60 w-full rounded-xl p-4 flex flex-col items-center justify-center font-bold text-sm md:text-lg font-sans transition-all duration-300 border ${
              isDark 
                ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500/30 text-orange-300 hover:border-orange-400/50 shadow-lg shadow-orange-500/10' 
                : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-800 hover:border-orange-300 shadow-lg shadow-orange-500/10'
            }`}>
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              Lost 20 lbs
            </div>
          </div>
        </div>
      ),
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <Timeline data={fitnessData} />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen w-full antialiased relative overflow-hidden"
      style={{
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.96)' : 'white',
        backgroundImage: isDark 
          ? 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)'
          : 'linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}
    >
      {/* Cursor Following Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDark 
              ? 'rgba(59, 130, 246, 0.15), transparent 80%' 
              : 'rgba(59, 130, 246, 0.1), transparent 80%'
          })`
        }}
      />
      
      <Timeline data={fitnessData} />
      
      {/* Page Header Section */}
      <section className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Fitness Journey
            </h2>
            <div className="max-w-3xl mx-auto">
              <TextGenerateEffect 
                words="4+ years of consistent training and continuous improvement. Building strength, discipline, and healthy habits one rep at a time."
                className="text-lg md:text-xl leading-relaxed font-sans"
                duration={0.3}
                isDark={isDark}
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Current Stats Section */}
      <section className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Current Stats
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Here's where I stand today after 4+ years of consistent training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Bench Press', value: '315 lbs', icon: Trophy, color: 'blue' },
              { label: 'Squat', value: '425 lbs', icon: Target, color: 'purple' },
              { label: 'Deadlift', value: '455 lbs', icon: TrendingUp, color: 'green' },
              { label: 'Body Weight', value: '175 lbs', icon: BarChart3, color: 'orange' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-xl border transition-all duration-300 text-center ${
                    isDark 
                      ? `bg-gradient-to-br from-${stat.color}-600/20 to-${stat.color}-800/20 border-${stat.color}-500/30 hover:border-${stat.color}-400/50 shadow-lg shadow-${stat.color}-500/10` 
                      : `bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border-${stat.color}-200 hover:border-${stat.color}-300 shadow-lg shadow-${stat.color}-500/10`
                  }`}
                >
                  <Icon className={`w-8 h-8 text-${stat.color}-500 mx-auto mb-3`} />
                  <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl border ${
              isDark 
                ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              My Training Philosophy
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  <Target className="w-6 h-6" />
                  Consistency Over Intensity
                </h4>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  I believe in showing up consistently rather than burning out with unsustainable intensity. 
                  Small daily improvements compound into massive long-term results.
                </p>
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  <Dumbbell className="w-6 h-6" />
                  Progressive Overload
                </h4>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Every workout aims to do slightly more than the last - whether that's adding weight, 
                  reps, or improving form. Progress isn't always linear, but it's always the goal.
                </p>
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>
                  <Activity className="w-6 h-6" />
                  Mind-Muscle Connection
                </h4>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Quality over quantity. I focus on feeling each rep and understanding how 
                  my body moves rather than just moving weight from point A to point B.
                </p>
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  <Calendar className="w-6 h-6" />
                  Long-term Perspective
                </h4>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Fitness is a lifelong journey, not a destination. I train for longevity, 
                  health, and the person I want to be 10, 20, 30 years from now.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Current Goals
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              What I'm working towards in my fitness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <Trophy className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                Short-term (2024)
              </h3>
              <div className="space-y-4">
                {[
                  { goal: 'Bench 320 lbs', progress: 95 },
                  { goal: 'Squat 450 lbs', progress: 85 },
                  { goal: 'Maintain <12% BF', progress: 100 },
                ].map((item, index) => (
                  <div key={item.goal}>
                    <div className="flex justify-between mb-2">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item.goal}</span>
                      <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {item.progress}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : ''}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <Target className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                Long-term (2024-2025)
              </h3>
              <div className="space-y-4">
                {[
                  { goal: '1300 lb Total', progress: 70 },
                  { goal: 'Compete in Powerlifting', progress: 30 },
                  { goal: 'Coach Others', progress: 20 },
                ].map((item, index) => (
                  <div key={item.goal}>
                    <div className="flex justify-between mb-2">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item.goal}</span>
                      <span className={`font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                        {item.progress}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : ''}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymPage;
