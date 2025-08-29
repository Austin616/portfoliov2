'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../components/ThemeProvider';
import { fitnessGoals } from '../../../data/gym';
import { Target, Calendar, CheckCircle, TrendingUp, Trophy, Clock } from 'lucide-react';

export function FitnessGoals() {
  const { isDark } = useTheme();

  const getProgressBarColor = (progress) => {
    if (progress >= 80) return 'green';
    if (progress >= 60) return 'yellow';
    if (progress >= 40) return 'orange';
    return 'red';
  };

  const formatDate = (dateString) => {
    if (dateString === 'Ongoing') return 'Ongoing';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
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
            Fitness Goals & Achievements
          </h2>
          <p className={`text-lg leading-relaxed font-sans max-w-3xl mx-auto text-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Setting ambitious targets and tracking progress toward long-term objectives
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Short Term Goals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 font-sans flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <Target className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              Short-Term Goals (2024)
            </h3>
            
            <div className="space-y-6">
              {fitnessGoals.shortTerm.map((goal, index) => (
                <motion.div
                  key={goal.goal}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-900/50 border-gray-800' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {goal.goal}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {formatDate(goal.target)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Progress
                      </span>
                      <span className={`text-sm font-bold text-${getProgressBarColor(goal.progress)}-500`}>
                        {goal.progress}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : ''}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-${getProgressBarColor(goal.progress)}-500`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Long Term Goals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 font-sans flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <TrendingUp className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              Long-Term Goals (2024-2025)
            </h3>
            
            <div className="space-y-6">
              {fitnessGoals.longTerm.map((goal, index) => (
                <motion.div
                  key={goal.goal}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-900/50 border-gray-800' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {goal.goal}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {formatDate(goal.target)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Progress
                      </span>
                      <span className={`text-sm font-bold text-${getProgressBarColor(goal.progress)}-500`}>
                        {goal.progress}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : ''}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-${getProgressBarColor(goal.progress)}-500`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Completed Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl border mb-16 ${
            isDark 
              ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30' 
              : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-8 font-sans flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <Trophy className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            Completed Goals
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {fitnessGoals.completed.map((goal, index) => (
              <motion.div
                key={goal.goal}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-green-500/10' : 'bg-green-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <h4 className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    {goal.goal}
                  </h4>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Completed: {formatDate(goal.completedDate)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motivation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl border ${
            isDark 
              ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30' 
              : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 font-sans ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Why I Train
          </h3>
          <p className={`text-lg leading-relaxed font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Fitness isn't just about the numbers on the bar—it's about discipline, consistency, 
            and pushing past mental barriers. Every workout is an opportunity to become a better 
            version of myself, both physically and mentally. The gym teaches patience, perseverance, 
            and the value of incremental progress that applies to all areas of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
