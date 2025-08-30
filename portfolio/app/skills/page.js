'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import Header from '../components/Header';
import { LinkPreview } from '../../components/ui/link-preview';
import { TextGenerateEffect } from '../ui/text-generate-effect';

import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette, 
  Wrench, 
  GitBranch,
  Star,
  ChevronLeft,
  ExternalLink,
  Award,
  Target,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';
import { skillCategories, skillsPageData, getSkillsStats } from '../../data/skills-categories';
import GameLuxuryButton from '../../components/GameLuxuryButton';
import { FloatingDock } from '../../components/ui/floating-dock';



const Skills = () => {
  const { isDark, mounted } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);


  const categories = [
    { id: 'all', name: 'All Skills' },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.name.split(' ')[0] })) // Shortened names for tabs
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  const stats = getSkillsStats();

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 px-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-300 rounded"></div>
              ))}
            </div>
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
      
      <Header />

      {/* Skills Categories Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-10">
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
              words={skillsPageData.title}
              className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              duration={0.5}
              isDark={isDark}
              keywords={skillsPageData.titleKeywords}
              isTitle={true}
            />
            <div className="max-w-3xl mx-auto">
              <TextGenerateEffect 
                words={skillsPageData.description}
                className="text-lg md:text-xl leading-relaxed font-sans"
                duration={0.3}
                isDark={isDark}
                keywords={skillsPageData.descriptionKeywords}
              />
            </div>
          </motion.div>

          {/* Floating Dock Category Filter */}
          <FloatingDock
            items={categories.map((category) => ({
              title: category.name,
              icon: category.id === 'all' 
                ? <Star className="w-full h-full" />
                : skillCategories.find(cat => cat.id === category.id)?.icon && React.createElement(
                    skillCategories.find(cat => cat.id === category.id)?.icon,
                    { 
                      className: "w-full h-full"
                    }
                  ),
              onClick: () => setSelectedCategory(category.id)
            }))}
            activeIndex={categories.findIndex(cat => cat.id === selectedCategory)}
            isDark={isDark}
            className="mb-12"
          />

          {/* Skills with HoverEffect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {filteredCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                    className="space-y-8"
                  >
                    {/* Category Header */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-${category.color}-500/20`}>
                          <Icon className={`w-8 h-8 text-${category.color}-500`} />
                        </div>
                        <TextGenerateEffect 
                          words={category.name}
                          className={`text-2xl md:text-3xl font-bold font-sans ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                          duration={0.4}
                          isDark={isDark}
                        />
                      </div>
                      <TextGenerateEffect 
                        words={category.description}
                        className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        duration={0.025}
                        isDark={isDark}
                      />
                    </div>

                    {/* Skills Cards with LinkPreview */}
                    <div className="max-w-6xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((skill, skillIndex) => (
                          <LinkPreview 
                            key={skill.link}
                            url={skill.link} 
                            className="relative group block p-2 h-full w-full"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ y: -5 }}
                              className={`h-full rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl ${
                                isDark 
                                  ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50' 
                                  : 'bg-white border-gray-200 hover:border-blue-300/50'
                              }`}
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <img 
                                  src={skill.icon} 
                                  alt={`${skill.title} logo`}
                                  className="w-8 h-8 object-contain flex-shrink-0"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                <h4 className={`font-bold text-lg ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {skill.title}
                                </h4>
                              </div>
                              
                              <p className={`text-sm leading-relaxed mb-4 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                {skill.description}
                              </p>
                              

                              

                            </motion.div>
                          </LinkPreview>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
              words={skillsPageData.ctaText}
              className={`text-xl md:text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
              duration={0.5}
              isDark={isDark}
              keywords={skillsPageData.ctaKeywords}
            />
            <GameLuxuryButton
              variant="primary"
              size="default"
              icon={Users}
              href="/#contact"
              className="shadow-xl shadow-blue-500/20"
            >
              Start a Conversation
            </GameLuxuryButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;