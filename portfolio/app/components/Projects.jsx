"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../components/ThemeProvider";
import { Code, ExternalLink, Github, Star, Filter, Grid3x3, List, Calendar } from "lucide-react";
import { projectsData, projectCategories } from "../../data/projects";
import ProjectModal from "../../components/ui/project-modal";
import GameLuxuryButton from "../../components/GameLuxuryButton";
import { useRouter } from "next/navigation";

export function Projects() {
  const { isDark } = useTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="projects" className="min-h-screen py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A collection of my recent work showcasing full-stack development, 
            mobile applications, and innovative solutions built with modern technologies.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {projectsData.length}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Projects
              </div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {projectsData.filter(p => p.featured).length}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Featured
              </div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                {projectsData.filter(p => p.liveUrl).length}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Live Demos
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? isDark
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : isDark
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className={`flex items-center gap-2 p-1 rounded-xl border ${
            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-100 border-gray-200'
          }`}>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? isDark 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? isDark 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}`}
            variants={containerVariants}
            initial="hidden"
            onClick={() => router.push(`/projects/${project.id}`)}
            animate="visible"
            exit="hidden"
            className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onClick={() => router.push(`/projects/${project.id}`)}
                className={`group cursor-pointer relative rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50 hover:shadow-blue-500/10' 
                    : 'bg-white border-gray-200 hover:border-blue-300/50 hover:shadow-blue-500/10'
                } ${viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-32' : 'h-48'
                } bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center ${
                  viewMode === 'list' ? '' : 'rounded-t-2xl'
                }`}>
                  <div className={`p-6 rounded-xl ${
                    isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
                  }`}>
                    <Code className={`w-12 h-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      isDark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                    }`}>
                      View Details
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    {project.featured && (
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                        isDark 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                      isDark 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.category}
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 font-sans group-hover:text-blue-500 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed font-sans mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, viewMode === 'list' ? 6 : 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDark 
                            ? 'bg-gray-700/50 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > (viewMode === 'list' ? 6 : 3) && (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        +{project.technologies.length - (viewMode === 'list' ? 6 : 3)} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                          isDark 
                            ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' 
                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                          isDark 
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className={`text-xl md:text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Interested in working together?
          </p>
          <GameLuxuryButton
            variant="primary"
            size="default"
            icon={Calendar}
            href="/#contact"
            className="shadow-xl shadow-blue-500/20"
          >
            Let's Talk
          </GameLuxuryButton>
        </motion.div>
      </div>
    </div>
  );
}