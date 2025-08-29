'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../components/ThemeProvider';
import { gymStats } from '../../../data/gym';
import { Trophy, Target, Clock, Calendar, TrendingUp, Zap } from 'lucide-react';

export function GymStats() {
  const { isDark } = useTheme();
  const { personalRecords, currentStats, weeklySchedule } = gymStats;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-sans text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Current Stats & PRs
          </h2>
          <p className={`text-lg leading-relaxed font-sans max-w-3xl mx-auto text-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Here are my current personal records and training statistics
          </p>
        </motion.div>

        {/* Personal Records */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-2xl font-bold mb-8 font-sans flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <Trophy className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
            Personal Records
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {Object.entries(personalRecords).map(([lift, data], index) => (
              <motion.div
                key={lift}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative p-6 rounded-xl border overflow-hidden group ${
                  isDark 
                    ? 'bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-500/30' 
                    : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -skew-x-12"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5 + index,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <h4 className={`text-lg font-bold mb-2 capitalize font-sans ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {lift === 'overhead' ? 'Overhead Press' : lift}
                  </h4>
                  <div className={`text-3xl font-bold mb-2 ${
                    isDark ? 'text-red-400' : 'text-red-600'
                  }`}>
                    {data.weight}
                    <span className="text-lg ml-1">{data.unit}</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {new Date(data.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-2xl font-bold mb-8 font-sans flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <Target className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            Current Statistics
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <TrendingUp className={`w-8 h-8 mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <h4 className={`text-lg font-bold mb-2 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Bodyweight
              </h4>
              <div className={`text-2xl font-bold ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {currentStats.bodyweight.weight} {currentStats.bodyweight.unit}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <Target className={`w-8 h-8 mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              <h4 className={`text-lg font-bold mb-2 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Body Fat
              </h4>
              <div className={`text-2xl font-bold ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                ~{currentStats.bodyfat.percentage}%
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <Calendar className={`w-8 h-8 mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <h4 className={`text-lg font-bold mb-2 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Training Years
              </h4>
              <div className={`text-2xl font-bold ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {currentStats.yearsTraining}+
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <Zap className={`w-8 h-8 mb-3 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
              <h4 className={`text-lg font-bold mb-2 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Total Lifted
              </h4>
              <div className={`text-2xl font-bold ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                {currentStats.totalLifted} lbs
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Training Schedule */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-2xl font-bold mb-8 font-sans flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <Clock className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            Training Schedule
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-xl border ${
              isDark 
                ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-500/30' 
                : 'bg-gradient-to-br from-green-50 to-blue-50 border-green-200'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>
                  {weeklySchedule.frequency}
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Weekly Frequency
                </p>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {weeklySchedule.avgDuration}
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Avg Duration
                </p>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  {weeklySchedule.restDays}
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Rest Days
                </p>
              </div>
              
              <div className="text-center">
                <div className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  Active Recovery
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {weeklySchedule.activeRecovery}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
