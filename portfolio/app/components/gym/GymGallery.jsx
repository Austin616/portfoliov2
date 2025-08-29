'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../components/ThemeProvider';
import { Camera, Play, X, ExternalLink } from 'lucide-react';

export function GymGallery() {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  // Since we don't have actual gym images, I'll create placeholder content
  const gymContent = [
    {
      id: 1,
      type: 'image',
      title: 'Deadlift Form Check',
      description: 'Working on perfect deadlift technique',
      thumbnail: '/api/placeholder/300/400',
      category: 'form'
    },
    {
      id: 2,
      type: 'image',
      title: 'Bench Press Setup',
      description: 'Perfecting bench press positioning',
      thumbnail: '/api/placeholder/300/400',
      category: 'form'
    },
    {
      id: 3,
      type: 'image',
      title: 'Squat Depth Check',
      description: 'Maintaining proper squat depth',
      thumbnail: '/api/placeholder/300/400',
      category: 'form'
    },
    {
      id: 4,
      type: 'video',
      title: '315lb Bench PR',
      description: 'Personal record bench press attempt',
      thumbnail: '/api/placeholder/300/400',
      category: 'pr'
    },
    {
      id: 5,
      type: 'image',
      title: 'Home Gym Setup',
      description: 'My training environment',
      thumbnail: '/api/placeholder/300/400',
      category: 'setup'
    },
    {
      id: 6,
      type: 'video',
      title: '425lb Squat',
      description: 'Current squat personal record',
      thumbnail: '/api/placeholder/300/400',
      category: 'pr'
    }
  ];

  const categories = [
    { key: 'all', label: 'All', color: 'blue' },
    { key: 'form', label: 'Form Check', color: 'green' },
    { key: 'pr', label: 'Personal Records', color: 'red' },
    { key: 'setup', label: 'Gym Setup', color: 'purple' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredContent = gymContent.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

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
            Training Gallery
          </h2>
          <p className={`text-lg leading-relaxed font-sans max-w-3xl mx-auto text-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Form checks, personal records, and behind-the-scenes training content
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? `bg-${category.color}-500 text-white shadow-lg`
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative group rounded-xl overflow-hidden border cursor-pointer ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                }`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Placeholder for actual image */}
                <div className={`aspect-[3/4] ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                } flex items-center justify-center relative`}>
                  <Camera className={`w-12 h-12 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                  
                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 rounded-full ${isDark ? 'bg-red-500/20' : 'bg-red-100'}`}>
                        <Play className={`w-4 h-4 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note about content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`p-6 rounded-xl border text-center ${
            isDark 
              ? 'bg-gray-900/50 border-gray-800' 
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <Camera className={`w-8 h-8 mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
          <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Training Documentation
          </h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I regularly document my training sessions for form analysis and progress tracking. 
            Connect with me on social media to see real training content!
          </p>
          <motion.div
            className="flex justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600' 
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Instagram
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600' 
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              YouTube
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Modal for selected image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`relative max-w-2xl w-full rounded-xl overflow-hidden ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className={`aspect-[3/4] ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                } flex items-center justify-center`}>
                  <Camera className={`w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedImage.title}
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
