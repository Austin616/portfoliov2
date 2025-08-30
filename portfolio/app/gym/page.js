'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { HoverEffect } from '../../components/ui/card-hover-effect';
import { FloatingDock } from '../../components/ui/floating-dock';
import { Dumbbell, Target, TrendingUp, Award, Calendar, Zap, Trophy, Medal, BarChart3, Activity, Star, Flame, Users } from 'lucide-react';
import { gymStats, fitnessGoals, achievements, workoutSplit, workoutMedia } from '../../data/gym';

const GymPage = () => {
  const { isDark, mounted } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('overview');

  useEffect(() => {
    let timeoutId = null;
    
    const updateMousePosition = (e) => {
      if (timeoutId) return;
      
      timeoutId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        timeoutId = null;
      });
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, []);

  // Weekly workout schedule
  const weeklyWorkouts = [
    {
      day: 'Monday',
      name: 'Push (Chest, Shoulders, Triceps)',
      exercises: [
        { name: 'Barbell Bench Press', sets: '4 x 8-10', primary: true },
        { name: 'Incline Dumbbell Press', sets: '3 x 10-12', primary: true },
        { name: 'Overhead Press', sets: '4 x 8-10', primary: true },
        { name: 'Lateral Raises', sets: '3 x 12-15', primary: false },
        { name: 'Dips', sets: '3 x 10-12', primary: false },
        { name: 'Tricep Extensions', sets: '3 x 12-15', primary: false }
      ],
      duration: '90 min',
      focus: 'Chest & Shoulders'
    },
    {
      day: 'Tuesday',
      name: 'Pull (Back, Biceps)',
      exercises: [
        { name: 'Lateral Pulldowns', sets: '4 x 10-12', primary: true },
        { name: 'Pull-ups', sets: '4 x 8-12', primary: true },
        { name: 'Barbell Rows', sets: '4 x 8-10', primary: true },
        { name: 'Seated Cable Rows', sets: '3 x 15-20', primary: false },
        { name: 'Barbell Curls', sets: '3 x 10-12', primary: false },
        { name: 'Hammer Curls', sets: '3 x 12-15', primary: false }
      ],
      duration: '85 min',
      focus: 'Back & Biceps'
    },
    {
      day: 'Wednesday',
      name: 'Legs (Quads, Hamstrings, Glutes)',
      exercises: [
        { name: 'Squat', sets: '4 x 6-8', primary: true },
        { name: 'Romanian Deadlift', sets: '4 x 10-12', primary: true },
        { name: 'Hamstring Curls', sets: '3 x 12 each', primary: true },
        { name: 'Quad Extensions', sets: '3 x 12-15', primary: false },
        { name: 'Calf Raises', sets: '4 x 15-20', primary: false },
      ],
      duration: '100 min',
      focus: 'Full Legs'
    },
    {
      day: 'Thursday',
      name: 'Push (Chest, Shoulders, Triceps)',
      exercises: [
        { name: 'Barbell Bench Press', sets: '4 x 8-10', primary: true },
        { name: 'Incline Dumbbell Press', sets: '3 x 10-12', primary: true },
        { name: 'Overhead Press', sets: '4 x 8-10', primary: true },
        { name: 'Lateral Raises', sets: '3 x 12-15', primary: false },
        { name: 'Dips', sets: '3 x 10-12', primary: false },
        { name: 'Tricep Extensions', sets: '3 x 12-15', primary: false }
      ],
      duration: '90 min',
      focus: 'Chest & Shoulders'
    },
    {
      day: 'Friday',
      name: 'Pull (Back, Biceps)',
      exercises: [
        { name: 'Lateral Pulldowns', sets: '4 x 10-12', primary: true },
        { name: 'Pull-ups', sets: '4 x 8-12', primary: true },
        { name: 'Barbell Rows', sets: '4 x 8-10', primary: true },
        { name: 'Seated Cable Rows', sets: '3 x 15-20', primary: false },
        { name: 'Barbell Curls', sets: '3 x 10-12', primary: false },
        { name: 'Hammer Curls', sets: '3 x 12-15', primary: false }
      ],
      duration: '85 min',
      focus: 'Back & Biceps'
    },
    {
      day: 'Saturday',
      name: 'Rest Day',
      exercises: [
        { name: 'Light Cardio', sets: '20-30 min', primary: false },
        { name: 'Stretching', sets: '15 min', primary: false },
        { name: 'Mobility Work', sets: '10 min', primary: false }
      ],
      duration: 'Active Recovery',
      focus: 'Recovery'
    },
    {
      day: 'Sunday',
      name: 'Rest Day',
      exercises: [
        { name: 'Light Cardio', sets: '20-30 min', primary: false },
        { name: 'Stretching', sets: '15 min', primary: false },
        { name: 'Mobility Work', sets: '10 min', primary: false }
      ],
      duration: 'Active Recovery',
      focus: 'Recovery'
    }
  ];

  // Workout media catalog
  const workoutMedia = {
    'Personal Records': [
      { 
        title: '315 lb Bench Press PR', 
        type: 'video', 
        date: 'Jan 2024',
        description: 'First time hitting 315 lbs on bench press',
        thumbnail: '/images/gym/bench-pr.jpg',
        mediaUrl: '/videos/gym/bench-315.mp4'
      },
      { 
        title: '425 lb Squat PR', 
        type: 'video', 
        date: 'Feb 2024',
        description: 'New squat personal record',
        thumbnail: '/images/gym/squat-pr.jpg',
        mediaUrl: '/videos/gym/squat-425.mp4'
      },
      { 
        title: '455 lb Deadlift PR', 
        type: 'video', 
        date: 'Mar 2024',
        description: 'Biggest deadlift pull to date',
        thumbnail: '/images/gym/deadlift-pr.jpg',
        mediaUrl: '/videos/gym/deadlift-455.mp4'
      }
    ],
    'Training Sessions': [
      { 
        title: 'Heavy Bench Day', 
        type: 'photo', 
        date: 'Dec 2024',
        description: 'Working sets at 295 lbs',
        thumbnail: '/images/gym/bench-heavy.jpg',
        mediaUrl: '/images/gym/bench-heavy.jpg'
      },
      { 
        title: 'Leg Day Intensity', 
        type: 'photo', 
        date: 'Dec 2024',
        description: 'Post-workout leg pump',
        thumbnail: '/images/gym/leg-day.jpg',
        mediaUrl: '/images/gym/leg-day.jpg'
      },
      { 
        title: 'Back Training', 
        type: 'video', 
        date: 'Nov 2024',
        description: 'Pull-up progression and form',
        thumbnail: '/images/gym/back-training.jpg',
        mediaUrl: '/videos/gym/back-training.mp4'
      }
    ],
    'Progress Photos': [
      { 
        title: '4 Year Transformation', 
        type: 'photo', 
        date: '2021-2024',
        description: 'Side by side comparison',
        thumbnail: '/images/gym/transformation.jpg',
        mediaUrl: '/images/gym/transformation.jpg'
      },
      { 
        title: 'Current Physique', 
        type: 'photo', 
        date: 'Dec 2024',
        description: 'Latest progress photo at 183 lbs',
        thumbnail: '/images/gym/current-physique.jpg',
        mediaUrl: '/images/gym/current-physique.jpg'
      },
      { 
        title: 'Competition Prep', 
        type: 'photo', 
        date: 'Oct 2024',
        description: 'Preparing for potential powerlifting meet',
        thumbnail: '/images/gym/comp-prep.jpg',
        mediaUrl: '/images/gym/comp-prep.jpg'
      }
    ],
    'Gym Life': [
      { 
        title: 'Home Gym Setup', 
        type: 'photo', 
        date: '2023',
        description: 'My personal training space',
        thumbnail: '/images/gym/home-gym.jpg',
        mediaUrl: '/images/gym/home-gym.jpg'
      },
      { 
        title: 'Pre-Workout Ritual', 
        type: 'video', 
        date: 'Nov 2024',
        description: 'Getting mentally prepared',
        thumbnail: '/images/gym/pre-workout.jpg',
        mediaUrl: '/videos/gym/pre-workout.mp4'
      },
      { 
        title: 'Training with Friends', 
        type: 'photo', 
        date: 'Sep 2024',
        description: 'Group training session',
        thumbnail: '/images/gym/training-friends.jpg',
        mediaUrl: '/images/gym/training-friends.jpg'
      }
    ]
  };

  // Physical stats
  const physicalStats = {
    height: "5'11\"",
    weight: '183 lbs',
    bodyFat: '13%',
    yearsTraining: '4+',
  };

  const categories = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'workouts', name: 'Workouts', icon: Dumbbell },
    { id: 'catalog', name: 'Catalog', icon: Activity },
    { id: 'story', name: 'Story', icon: Award }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="animate-pulse pt-20 px-4">
          <div className="h-12 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
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

      {/* Fitness Journey Section */}
      <section id="fitness" className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Fitness Journey"
              className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              duration={0.5}
              isDark={isDark}
              keywords={['Fitness', 'Journey']}
              isTitle={true}
            />
            <div className="max-w-3xl mx-auto">
              <TextGenerateEffect 
                words="4+ years of consistent training and continuous improvement. Building strength, discipline, and healthy habits one rep at a time."
                className="text-lg md:text-xl leading-relaxed font-sans"
                duration={0.3}
                isDark={isDark}
                keywords={['4+ years', 'consistent training', 'strength', 'discipline', 'healthy habits']}
              />
            </div>
          </motion.div>

          {/* Floating Dock Category Filter */}
          <FloatingDock
            items={categories.map((category) => {
              const Icon = category.icon;
              return {
                title: category.name,
                icon: <Icon className="w-full h-full" />,
                onClick: () => setSelectedCategory(category.id)
              };
            })}
            activeIndex={categories.findIndex(cat => cat.id === selectedCategory)}
            isDark={isDark}
            className="mb-12"
          />

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              
              {/* Overview Section */}
              {(selectedCategory === 'overview') && (
                <div className="space-y-16">
                  {/* Physical Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-center mb-12">
                      <TextGenerateEffect 
                        words="Physical Stats"
                        className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                        duration={0.4}
                        isDark={isDark}
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(physicalStats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`text-center p-6 rounded-xl border ${
                            isDark 
                              ? 'bg-gray-900/50 border-gray-800' 
                              : 'bg-white border-gray-200'
                          }`}
                        >
                          <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {value}
                          </div>
                          <div className={`text-sm capitalize ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Personal Records */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="text-center mb-12">
                      <TextGenerateEffect 
                        words="Personal Records"
                        className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                        duration={0.4}
                        isDark={isDark}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { name: 'Bench Press', weight: gymStats.personalRecords.bench.weight, unit: gymStats.personalRecords.bench.unit, icon: Trophy, color: 'blue' },
                        { name: 'Squat', weight: gymStats.personalRecords.squat.weight, unit: gymStats.personalRecords.squat.unit, icon: Target, color: 'purple' },
                        { name: 'Deadlift', weight: gymStats.personalRecords.deadlift.weight, unit: gymStats.personalRecords.deadlift.unit, icon: TrendingUp, color: 'green' },
                       
                      ].map((record, index) => {
                        const Icon = record.icon;
                        return (
                          <motion.div
                            key={record.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`text-center p-6 rounded-xl border transition-all duration-300 ${
                              isDark 
                                ? `bg-gradient-to-br from-${record.color}-600/20 to-${record.color}-800/20 border-${record.color}-500/30 hover:border-${record.color}-400/50` 
                                : `bg-gradient-to-br from-${record.color}-50 to-${record.color}-100 border-${record.color}-200 hover:border-${record.color}-300`
                            }`}
                          >
                            <Icon className={`w-8 h-8 text-${record.color}-500 mx-auto mb-3`} />
                            <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {record.weight} {record.unit}
                            </div>
                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {record.name}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Weekly Workouts Section */}
              {selectedCategory === 'workouts' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-12">
                    <TextGenerateEffect 
                      words="Weekly Training Schedule"
                      className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      duration={0.4}
                      isDark={isDark}
                    />
                    <TextGenerateEffect 
                      words="Push/Pull/Legs split with accessory work. 5 days per week with active recovery."
                      className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      duration={0.025}
                      isDark={isDark}
                    />
                  </div>
                  <div className="space-y-6">
                    {weeklyWorkouts.map((workout, index) => (
                      <motion.div
                        key={workout.day}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-6 rounded-xl border ${
                          isDark 
                            ? 'bg-gray-900/50 border-gray-800' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {workout.day} - {workout.name}
                            </h3>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {workout.focus} • {workout.duration}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {workout.exercises.map((exercise, exerciseIndex) => (
                            <div
                              key={exerciseIndex}
                              className={`p-3 rounded-lg ${
                                exercise.primary 
                                  ? (isDark ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-50 border border-blue-200')
                                  : (isDark ? 'bg-gray-800/50' : 'bg-gray-50')
                              }`}
                            >
                              <div className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {exercise.name}
                              </div>
                              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {exercise.sets}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Workout Media Catalog Section */}
              {selectedCategory === 'catalog' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-12">
                    <TextGenerateEffect 
                      words="Workout Gallery"
                      className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      duration={0.4}
                      isDark={isDark}
                    />
                    <TextGenerateEffect 
                      words="Photos and videos from my training sessions, PRs, and fitness journey."
                      className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      duration={0.025}
                      isDark={isDark}
                    />
                  </div>
                  
                  {/* Collage/Masonry Style Gallery */}
                  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {Object.entries(workoutMedia).flatMap(([category, mediaItems]) => 
                      mediaItems.map((media, index) => (
                        <motion.div
                          key={`${category}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: Math.random() * 0.3,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, zIndex: 10 }}
                          className="break-inside-avoid mb-4 group cursor-pointer"
                          onClick={() => {
                            console.log('Opening media:', media.mediaUrl);
                          }}
                        >
                          <div className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
                            isDark 
                              ? 'border-gray-800 hover:border-blue-500/50' 
                              : 'border-gray-200 hover:border-blue-300/50'
                          } hover:shadow-2xl`}>
                            {/* Media Content */}
                            <div className={`relative ${
                              // Random aspect ratios for more dynamic layout
                              index % 4 === 0 ? 'aspect-square' :
                              index % 4 === 1 ? 'aspect-[4/5]' :
                              index % 4 === 2 ? 'aspect-[3/4]' : 'aspect-video'
                            }`}>
                              <div className={`absolute inset-0 flex items-center justify-center ${
                                isDark ? 'bg-gray-800' : 'bg-gray-100'
                              }`}>
                                {media.type === 'video' ? (
                                  <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/90 flex items-center justify-center backdrop-blur-sm">
                                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                      </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                      <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-16 h-16 rounded-full bg-green-500/90 flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              
                              {/* Hover Overlay with Minimal Info */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <div className="text-white font-medium text-sm mb-1 truncate">
                                    {media.title}
                                  </div>
                                  <div className="text-gray-300 text-xs">
                                    {media.date}
                                  </div>
                                </div>
                                
                                {/* Media Type Badge */}
                                <div className="absolute top-3 right-3">
                                  <span className={`text-xs px-2 py-1 rounded-full backdrop-blur-sm ${
                                    media.type === 'video' 
                                      ? 'bg-blue-500/80 text-white' 
                                      : 'bg-green-500/80 text-white'
                                  }`}>
                                    {media.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>

                  {/* Category Filter Dots */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center gap-3 mt-12"
                  >
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Gallery:
                    </div>
                    {Object.keys(workoutMedia).map((category, index) => (
                      <div key={category} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-blue-500' :
                          index === 1 ? 'bg-purple-500' :
                          index === 2 ? 'bg-green-500' : 'bg-orange-500'
                        }`}></div>
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {category}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                  
                </motion.div>
              )}

              {/* Fitness Story Section */}
              {selectedCategory === 'story' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-12">
                    <TextGenerateEffect 
                      words="My Fitness Story"
                      className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      duration={0.4}
                      isDark={isDark}
                    />
                  </div>
                  
                  <div className="max-w-4xl mx-auto space-y-8">
                    {/* Story Timeline */}
                    {[
                      {
                        year: '2021',
                        title: 'The Beginning',
                        content: "Started my fitness journey as a complete beginner. I was out of shape, had no experience with weight training, and felt intimidated by the gym. But I knew I wanted to make a change in my life and build discipline."
                      },
                      {
                        year: '2022',
                        title: 'Learning the Basics',
                        content: "Focused on form, consistency, and building the habit. I learned the fundamental compound movements, started tracking my workouts, and slowly built up my strength. This year was all about establishing a solid foundation."
                      },
                      {
                        year: '2023',
                        title: 'Serious Progress',
                        content: "Really dove deep into nutrition, macro tracking, and periodization. I started seeing significant strength and muscle gains. Hit my first major milestones and realized that fitness had become a true passion, not just a hobby."
                      },
                      {
                        year: '2024',
                        title: 'Peak Performance',
                        content: "Hit major PRs across all lifts and refined my training methodology. Currently preparing for potential powerlifting competition while maintaining consistency and injury-free training. Fitness has become an integral part of who I am."
                      }
                    ].map((story, index) => (
                      <motion.div
                        key={story.year}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`p-8 rounded-xl border ${
                          isDark 
                            ? 'bg-gray-900/50 border-gray-800' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-6">
                          <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${
                            isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {story.year}
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {story.title}
                            </h3>
                            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {story.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Philosophy */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className={`p-8 rounded-xl border text-center ${
                        isDark 
                          ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30' 
                          : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
                      }`}
                    >
                      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        My Philosophy
                      </h3>
                      <TextGenerateEffect 
                        words="Consistency over intensity. Progressive overload. Mind-muscle connection. Long-term perspective. Fitness isn't just about getting stronger or looking better - it's about becoming the best version of yourself through discipline, dedication, and continuous improvement."
                        className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        duration={0.02}
                        isDark={isDark}
                        keywords={['Consistency', 'Progressive overload', 'Mind-muscle connection', 'discipline', 'dedication', 'continuous improvement']}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <TextGenerateEffect 
              words="Train hard, stay consistent, never give up! 💪"
              className={`text-xl md:text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
              duration={0.5}
              isDark={isDark}
              keywords={['Train hard', 'stay consistent', 'never give up']}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GymPage;
