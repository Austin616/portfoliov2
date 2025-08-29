'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { HoverEffect } from '../../components/ui/card-hover-effect';
import { useRouter } from 'next/navigation';
import { FolderOpen, ExternalLink, Github, Calendar, Code, Users, Star, Globe, Smartphone, Layout, Palette } from 'lucide-react';
import { FloatingDock } from '../../components/ui/floating-dock';

const ProjectsPage = () => {
  const { isDark, mounted } = useTheme();
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Sample projects data - you can replace this with real projects
  const projects = [
    {
      id: 1,
      title: 'UT Marketplace',
      description: 'A full-stack marketplace application for UT students to buy and sell items safely within the campus community.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Stripe', 'Socket.io'],
      category: 'Full-Stack',
      status: 'Live',
      year: '2024',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/austin616/ut-marketplace',
      live: 'https://ut-marketplace.vercel.app',
      features: ['User Authentication', 'Real-time Chat', 'Payment Integration', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'UT Dining App',
      description: 'React Native app helping UT students discover dining options, view menus, and track nutritional information.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
      category: 'Mobile',
      status: 'In Progress',
      year: '2024',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/austin616/UT-Dining',
      live: null,
      features: ['Menu Tracking', 'Nutrition Info', 'Location Services', 'Offline Support']
    },
    {
      id: 3,
      title: 'EcoNest',
      description: 'Sustainable living platform connecting eco-conscious individuals through challenges, forums, and resource sharing.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
      category: 'Web App',
      status: 'Live',
      year: '2023',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/austin616/econest',
      live: 'https://econest.netlify.app',
      features: ['Community Forums', 'Eco Challenges', 'Resource Library', 'Progress Tracking']
    },
    {
      id: 4,
      title: 'HookEm Fitness',
      description: 'Fitness tracking app specifically designed for UT students with campus gym integration and workout planning.',
      technologies: ['React Native', 'Firebase', 'JavaScript', 'Expo'],
      category: 'Mobile',
      status: 'Completed',
      year: '2023',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/austin616/HookEm-Fitness',
      live: null,
      features: ['Workout Planning', 'Progress Tracking', 'Social Features', 'Gym Integration']
    },
    {
      id: 5,
      title: 'Exercise Catalog',
      description: 'Comprehensive exercise database with detailed instructions, muscle group targeting, and workout routines.',
      technologies: ['React', 'Python', 'SQLite', 'Material-UI'],
      category: 'Web App',
      status: 'Completed',
      year: '2023',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/austin616/exercise-catalog',
      live: '#',
      features: ['Exercise Database', 'Muscle Group Filter', 'Routine Builder', 'Progress Analytics']
    },
    {
      id: 6,
      title: 'Portfolio v2',
      description: 'Modern portfolio website showcasing projects, skills, and fitness journey with dark/light theme support.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
      category: 'Portfolio',
      status: 'Live',
      year: '2024',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/austin616/portfolio-v2',
      live: 'https://austintran.dev',
      features: ['Responsive Design', 'Dark Mode', 'Smooth Animations', 'Modern UI']
    }
  ];

  // Project categories with descriptions and colors
  const projectCategories = [
    {
      id: 'Full-Stack',
      name: 'Full-Stack Applications',
      description: 'End-to-end solutions with frontend, backend, and database integration',
      icon: Code,
      color: 'blue'
    },
    {
      id: 'Mobile',
      name: 'Mobile Applications',
      description: 'Cross-platform and native mobile apps for iOS and Android',
      icon: Smartphone,
      color: 'green'
    },
    {
      id: 'Web App',
      name: 'Web Applications',
      description: 'Interactive web platforms with modern frontend technologies',
      icon: Globe,
      color: 'purple'
    },
    {
      id: 'Portfolio',
      name: 'Portfolio Projects',
      description: 'Showcase websites and personal branding projects',
      icon: Palette,
      color: 'pink'
    }
  ];
  
  const categories = ['All', ...projectCategories.map(cat => cat.id)];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Transform projects data for HoverEffect component
  const hoverEffectItems = filteredProjects.map(project => ({
    title: project.title,
    description: project.description,
    category: project.category, // App type (Full-Stack, Mobile, Web App, etc.)
    image: project.image || '/api/placeholder/400/300', // Use project image or placeholder
    technologies: project.technologies, // Technologies used in the project
    liveUrl: project.live, // Live demo URL
    githubUrl: project.github, // GitHub repository URL
    project: project, // Pass the full project data
    onProjectClick: () => router.push(`/projects/${project.id}`),
    icon: '/api/placeholder/32/32', // You can replace with actual project icons
    id: project.id // Add unique identifier
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'green';
      case 'In Progress': return 'yellow';
      case 'Completed': return 'blue';
      default: return 'gray';
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Category Filter */}
        <section className="py-10 px-4 md:px-8 lg:px-10">
          <div className="max-w-6xl mx-auto">
            {/* Loading content */}
          </div>
        </section>
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
      
      {/* Main Content Section */}
      <section className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Project Categories"
              className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              duration={0.5}
              isDark={isDark}
              keywords={['Project', 'Categories']}
              isTitle={true}
            />
            <div className="max-w-3xl mx-auto">
              <TextGenerateEffect 
                words="A diverse portfolio showcasing full-stack web applications and mobile solutions. Each project demonstrates different technologies and problem-solving approaches."
                className="text-lg md:text-xl leading-relaxed font-sans"
                duration={0.3}
                isDark={isDark}
                keywords={['portfolio', 'full-stack', 'web applications', 'mobile', 'technologies', 'problem-solving']}
              />
            </div>
          </motion.div>

          {/* Floating Dock Category Filter */}
          <FloatingDock
            items={categories.map((category) => {
              // Choose appropriate icon based on category
              let icon;
              switch(category) {
                case 'All':
                  icon = <Star className="w-full h-full" />;
                  break;
                case 'Full-Stack':
                  icon = <Code className="w-full h-full" />;
                  break;
                case 'Mobile':
                  icon = <Smartphone className="w-full h-full" />;
                  break;
                case 'Web App':
                  icon = <Globe className="w-full h-full" />;
                  break;
                case 'Portfolio':
                  icon = <Palette className="w-full h-full" />;
                  break;
                default:
                  icon = <FolderOpen className="w-full h-full" />;
              }
              
              return {
                title: category,
                icon: icon,
                onClick: () => setSelectedCategory(category)
              };
            })}
            activeIndex={categories.findIndex(cat => cat === selectedCategory)}
            isDark={isDark}
            className="mb-12"
          />

          {/* Projects Grid with Category Headers */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Category Header */}
              {selectedCategory !== 'All' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {projectCategories.find(cat => cat.id === selectedCategory) && (
                      <>
                        <div className={`p-3 rounded-xl bg-${projectCategories.find(cat => cat.id === selectedCategory).color}-500/20`}>
                          {React.createElement(
                            projectCategories.find(cat => cat.id === selectedCategory).icon,
                            { 
                              className: `w-8 h-8 text-${projectCategories.find(cat => cat.id === selectedCategory).color}-500`
                            }
                          )}
                        </div>
                        <TextGenerateEffect 
                          words={projectCategories.find(cat => cat.id === selectedCategory).name}
                          className={`text-2xl md:text-3xl font-bold font-sans ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                          duration={0.4}
                          isDark={isDark}
                          isTitle={true}
                        />
                      </>
                    )}
                  </div>
                  {projectCategories.find(cat => cat.id === selectedCategory) && (
                    <TextGenerateEffect 
                      words={projectCategories.find(cat => cat.id === selectedCategory).description}
                      className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      duration={0.025}
                      isDark={isDark}
                    />
                  )}
                </motion.div>
              )}
              
              {/* All Projects Header */}
              {selectedCategory === 'All' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <Star className="w-8 h-8 text-blue-500" />
                    </div>
                    <TextGenerateEffect 
                      words="All Projects"
                      className={`text-2xl md:text-3xl font-bold font-sans ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                      duration={0.4}
                      isDark={isDark}
                      isTitle={true}
                    />
                  </div>
                  <TextGenerateEffect 
                    words="A complete collection of my projects across all categories and technologies"
                    className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    duration={0.025}
                    isDark={isDark}
                  />
                </motion.div>
              )}
              
              {/* Projects Grid */}
              <HoverEffect items={hoverEffectItems} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl border text-center ${
              isDark 
                ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
            }`}
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Let&apos;s Build Something Together
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Interested in collaborating or have a project in mind? I&apos;d love to hear from you.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                isDark 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;