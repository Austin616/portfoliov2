'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../components/ThemeProvider';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star, Code, Zap } from 'lucide-react';
import { projectsData } from '../../../data/projects-updated';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Breadcrumb from '../../../components/Breadcrumb';

const ProjectDetailPage = ({ params }) => {
  const { isDark, mounted } = useTheme();
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [project, setProject] = useState(null);
  
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    if (unwrappedParams?.id) {
      const foundProject = projectsData.find(p => p.id === parseInt(unwrappedParams.id));
      setProject(foundProject);
    }
  }, [unwrappedParams?.id]);

  if (!mounted || !project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
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
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Projects', href: '/projects' },
          { label: project?.title || 'Project' }
        ]} 
      />

      {/* Project Header */}
      <section className="pt-12 pb-16 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Project Badges */}
            <div className="flex justify-center gap-3 mb-6">
              {project.featured && (
                <div className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${
                  isDark 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                }`}>
                  <Star className="w-4 h-4" />
                  Featured
                </div>
              )}
              <div className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                isDark 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                {project.category}
              </div>
            </div>

            {/* Project Title */}
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h1>
            
            {/* Project Description */}
            <p className={`text-lg md:text-xl leading-relaxed font-sans max-w-4xl mx-auto mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isDark 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } shadow-lg shadow-blue-500/25`}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                  }`}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image Section */}
      <section className="py-16 px-4 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative aspect-video rounded-2xl overflow-hidden border ${
              isDark 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gray-100 border-gray-200'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <Zap className="w-6 h-6 text-blue-500" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights?.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`flex items-start gap-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-800' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <Code className="w-6 h-6 text-purple-500" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                      isDark 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-purple-100 text-purple-700 border border-purple-200'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`text-3xl font-bold mb-8 text-center font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Other Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Link href={`/projects/${otherProject.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50' 
                          : 'bg-gray-50 border-gray-200 hover:border-blue-300/50'
                      }`}
                    >
                      <h4 className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {otherProject.title}
                      </h4>
                      <p className={`text-sm mb-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {otherProject.description.slice(0, 100)}...
                      </p>
                      <div className={`text-sm font-medium ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        View Project →
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;