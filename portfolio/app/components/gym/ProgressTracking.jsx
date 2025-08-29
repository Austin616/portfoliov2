'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../components/ThemeProvider';
import { progressData } from '../../../data/gym';
import { TrendingUp, BarChart3, Calendar, Award } from 'lucide-react';

export function ProgressTracking() {
  const { isDark } = useTheme();
  const [selectedMetric, setSelectedMetric] = useState('bench');

  const metrics = {
    bench: { name: 'Bench Press', color: 'red', unit: 'lbs' },
    squat: { name: 'Squat', color: 'blue', unit: 'lbs' },
    deadlift: { name: 'Deadlift', color: 'green', unit: 'lbs' },
    bodyweight: { name: 'Bodyweight', color: 'purple', unit: 'lbs' },
  };

  const calculateGrowth = (metric) => {
    const firstValue = progressData[0][metric];
    const lastValue = progressData[progressData.length - 1][metric];
    const growth = ((lastValue - firstValue) / firstValue * 100).toFixed(1);
    const absolute = lastValue - firstValue;
    return { growth, absolute, firstValue, lastValue };
  };

  const maxValue = Math.max(...progressData.map(d => Math.max(d.bench, d.squat, d.deadlift)));
  const minValue = Math.min(...progressData.map(d => Math.min(d.bench, d.squat, d.deadlift)));

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
            Progress Over Time
          </h2>
          <p className={`text-lg leading-relaxed font-sans max-w-3xl mx-auto text-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            4+ years of consistent progress tracked across all major lifts
          </p>
        </motion.div>

        {/* Metric Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(metrics).map(([key, metric]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedMetric(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedMetric === key
                    ? `bg-${metric.color}-500 text-white shadow-lg`
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {metric.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl border mb-12 ${
            isDark 
              ? 'bg-gray-900/50 border-gray-800' 
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className={`text-xl font-bold font-sans flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <BarChart3 className={`w-6 h-6 text-${metrics[selectedMetric].color}-500`} />
              {metrics[selectedMetric].name} Progress
            </h3>
            <div className={`text-sm px-3 py-1 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}>
              +{calculateGrowth(selectedMetric).growth}% growth
            </div>
          </div>
          
          {/* Chart Visualization */}
          <div className="relative h-64 mb-6">
            <div className="absolute inset-0 flex items-end justify-between gap-2">
              {progressData.map((data, index) => {
                const value = data[selectedMetric];
                const height = selectedMetric === 'bodyweight' 
                  ? ((value - 140) / (180 - 140)) * 100  // Scale bodyweight differently
                  : ((value - minValue) / (maxValue - minValue)) * 100;
                
                return (
                  <motion.div
                    key={data.month}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative group flex-1 max-w-16 bg-gradient-to-t from-${metrics[selectedMetric].color}-500 to-${metrics[selectedMetric].color}-400 rounded-t hover:opacity-80 transition-opacity`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'
                    } px-2 py-1 rounded text-xs whitespace-nowrap z-10`}>
                      {value} {metrics[selectedMetric].unit}
                    </div>
                    
                    {/* Value label */}
                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Month labels */}
          <div className="flex justify-between text-xs">
            {progressData.map((data) => (
              <span key={data.month} className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } transform -rotate-45 origin-left`}>
                {data.month}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Growth Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12"
        >
          {Object.entries(metrics).map(([key, metric]) => {
            const growth = calculateGrowth(key);
            return (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {metric.name}
                  </h4>
                  <TrendingUp className={`w-5 h-5 text-${metric.color}-500`} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Start:</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      {growth.firstValue} {metric.unit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Current:</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      {growth.lastValue} {metric.unit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Growth:</span>
                    <span className={`text-${metric.color}-500`}>
                      +{growth.absolute} {metric.unit} ({growth.growth}%)
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl border ${
            isDark 
              ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30' 
              : 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 font-sans flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <Award className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
            Key Milestones
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                isDark ? 'bg-yellow-500/10' : 'bg-yellow-50'
              }`}>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  🏆 1000lb Total (2023)
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Reached the milestone 1000+ lb total across bench, squat, and deadlift
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                isDark ? 'bg-red-500/10' : 'bg-red-50'
              }`}>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  💪 300lb Bench (2024)
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Hit my first 300+ lb bench press after 3+ years of training
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                isDark ? 'bg-blue-500/10' : 'bg-blue-50'
              }`}>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  🎯 Consistency Streak
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  4+ years of consistent training with minimal missed sessions
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                isDark ? 'bg-green-500/10' : 'bg-green-50'
              }`}>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  📈 Body Recomposition
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Gained 25lbs of lean mass while maintaining low body fat percentage
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
