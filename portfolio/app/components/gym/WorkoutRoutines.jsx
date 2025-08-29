'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../components/ThemeProvider';
import { workoutSplit } from '../../../data/gym';
import { Dumbbell, Clock, Repeat, ChevronDown, ChevronUp, Play } from 'lucide-react';

export function WorkoutRoutines() {
  const { isDark } = useTheme();
  const [expandedWorkout, setExpandedWorkout] = useState(null);

  const workoutColors = {
    'Push (Chest, Shoulders, Triceps)': 'red',
    'Pull (Back, Biceps)': 'blue',
    'Legs (Quads, Hamstrings, Glutes)': 'green',
    'Arms & Accessories': 'purple',
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
            Workout Split
          </h2>
          <p className={`text-lg leading-relaxed font-sans max-w-3xl mx-auto text-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            My current Push/Pull/Legs split with an additional arms day
          </p>
        </motion.div>

        <div className="grid gap-6">
          {Object.entries(workoutSplit).map(([workoutName, details], index) => {
            const color = workoutColors[workoutName];
            const isExpanded = expandedWorkout === workoutName;

            return (
              <motion.div
                key={workoutName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-xl overflow-hidden ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <motion.button
                  onClick={() => setExpandedWorkout(isExpanded ? null : workoutName)}
                  className={`w-full p-6 text-left transition-all duration-300 ${
                    isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-${color}-500/20`}>
                        <Dumbbell className={`w-6 h-6 text-${color}-500`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold font-sans ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {workoutName}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1">
                            <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {details.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Repeat className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {details.frequency}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
                    >
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Primary Exercises */}
                          <div>
                            <h4 className={`text-lg font-bold mb-4 font-sans flex items-center gap-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              <Play className={`w-4 h-4 text-${color}-500`} />
                              Primary Exercises
                            </h4>
                            <div className="space-y-3">
                              {details.primary.map((exercise, idx) => (
                                <motion.div
                                  key={exercise}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  className={`p-3 rounded-lg border ${
                                    isDark 
                                      ? 'bg-gray-800/50 border-gray-700' 
                                      : 'bg-white border-gray-200'
                                  }`}
                                >
                                  <span className={`font-medium ${
                                    isDark ? 'text-gray-200' : 'text-gray-800'
                                  }`}>
                                    {exercise}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Secondary Exercises */}
                          <div>
                            <h4 className={`text-lg font-bold mb-4 font-sans flex items-center gap-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              <Play className={`w-4 h-4 text-${color}-400`} />
                              Secondary/Accessory
                            </h4>
                            <div className="space-y-3">
                              {details.secondary.map((exercise, idx) => (
                                <motion.div
                                  key={exercise}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  className={`p-3 rounded-lg border ${
                                    isDark 
                                      ? 'bg-gray-800/30 border-gray-700/50' 
                                      : 'bg-gray-50 border-gray-200'
                                  }`}
                                >
                                  <span className={`font-medium ${
                                    isDark ? 'text-gray-300' : 'text-gray-700'
                                  }`}>
                                    {exercise}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Workout Tips */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className={`mt-6 p-4 rounded-lg ${
                            isDark 
                              ? `bg-${color}-900/20 border border-${color}-500/30` 
                              : `bg-${color}-50 border border-${color}-200`
                          }`}
                        >
                          <h5 className={`font-bold mb-2 text-${color}-500`}>
                            Key Focus Areas:
                          </h5>
                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {workoutName.includes('Push') && 
                              "Focus on progressive overload on bench press. Emphasize mind-muscle connection on isolation movements."}
                            {workoutName.includes('Pull') && 
                              "Prioritize full range of motion on pulling movements. Focus on lat activation and avoiding momentum."}
                            {workoutName.includes('Legs') && 
                              "Maintain proper depth on squats. Focus on hip hinge patterns and unilateral stability."}
                            {workoutName.includes('Arms') && 
                              "High volume day for arm development. Focus on time under tension and pump work."}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Training Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-xl border ${
            isDark 
              ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30' 
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 font-sans ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Training Philosophy
          </h3>
          <p className={`text-lg leading-relaxed font-sans ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            My training focuses on progressive overload through the main compound movements 
            while incorporating targeted accessory work for balanced development. I prioritize 
            consistency over intensity, aiming for sustainable long-term progress rather than 
            short-term gains.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
