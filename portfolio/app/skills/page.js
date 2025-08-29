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
import GameLuxuryButton from '../../components/GameLuxuryButton';
import { cn } from "@/lib/utils";
import { HoverEffect } from '../../components/ui/card-hover-effect';



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

  // Enhanced skills data for HoverEffect component
  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      description: 'Modern web development with React ecosystem and responsive design',
      icon: Globe,
      color: 'blue',
      items: [
        {
          title: 'React & Next.js',
          description: 'Advanced React patterns, SSR, and modern hooks. Built 10+ production apps with Next.js 13+ features.',
          level: 95,
          experience: '3+ years',
          link: 'https://react.dev',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          title: 'TypeScript & JavaScript',
          description: 'Type-safe development with advanced TypeScript patterns. ES6+ features and modern JS paradigms.',
          level: 90,
          experience: '4+ years', 
          link: 'https://www.typescriptlang.org',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
          title: 'Tailwind CSS & Styling',
          description: 'Utility-first CSS framework mastery. Custom design systems and responsive layouts.',
          level: 95,
          experience: '2+ years',
          link: 'https://tailwindcss.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
          title: 'Framer Motion',
          description: 'Advanced animations and micro-interactions. Creating smooth, performant UI animations.',
          level: 85,
          experience: '1+ year',
          link: 'https://www.framer.com/motion',
          icon: 'https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Systems',
      description: 'Scalable server-side development and API architecture',
      icon: Code2,
      color: 'purple',
      items: [
        {
          title: 'Node.js & Express',
          description: 'RESTful APIs, middleware architecture, and scalable backend systems with Express.js.',
          level: 85,
          experience: '2+ years',
          link: 'https://nodejs.org',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
          title: 'Python & FastAPI',
          description: 'High-performance APIs with FastAPI. Data processing and automation scripts.',
          level: 90,
          experience: '3+ years',
          link: 'https://python.org',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
          title: 'GraphQL & APIs',
          description: 'Modern API design with GraphQL. Schema design and efficient data fetching.',
          level: 80,
          experience: '2+ years',
          link: 'https://graphql.org',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
        },
        {
          title: 'Java & Spring',
          description: 'Enterprise-level backend development with Spring Boot. Microservices architecture.',
          level: 80,
          experience: '2+ years',
          link: 'https://spring.io',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      description: 'Cross-platform mobile apps with native performance',
      icon: Smartphone,
      color: 'green',
      items: [
        {
          title: 'React Native',
          description: 'Cross-platform mobile development. Navigation, state management, and native modules.',
          level: 85,
          experience: '2+ years',
          link: 'https://reactnative.dev',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          title: 'Expo Development',
          description: 'Rapid mobile app development with Expo SDK. OTA updates and deployment.',
          level: 80,
          experience: '1+ year',
          link: 'https://expo.dev',
          icon: 'https://static-00.iconduck.com/assets.00/expo-icon-512x512-5il5qboc.png'
        },
        {
          title: 'iOS Development',
          description: 'Native iOS development with Swift. UIKit and SwiftUI experience.',
          level: 70,
          experience: '1+ year',
          link: 'https://developer.apple.com/swift',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
        },
        {
          title: 'Android Development',
          description: 'Native Android development with Kotlin. Material Design and Jetpack Compose.',
          level: 65,
          experience: '1+ year',
          link: 'https://developer.android.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg'
        }
      ]
    },
    {
      id: 'database',
      name: 'Database & Storage',
      description: 'Data modeling, optimization, and scalable storage solutions',
      icon: Database,
      color: 'orange',
      items: [
        {
          title: 'PostgreSQL',
          description: 'Advanced SQL queries, indexing, and database optimization. Complex relational designs.',
          level: 85,
          experience: '2+ years',
          link: 'https://postgresql.org',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
          title: 'MongoDB & NoSQL',
          description: 'Document-based databases, aggregation pipelines, and schema design.',
          level: 80,
          experience: '2+ years',
          link: 'https://mongodb.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
          title: 'Prisma ORM',
          description: 'Type-safe database access with Prisma. Migrations and schema management.',
          level: 85,
          experience: '1+ year',
          link: 'https://prisma.io',
          icon: 'https://avatars.githubusercontent.com/u/17219288?s=280&v=4'
        },
        {
          title: 'Redis & Caching',
          description: 'In-memory caching strategies, session management, and performance optimization.',
          level: 75,
          experience: '1+ year',
          link: 'https://redis.io',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      description: 'Infrastructure, deployment, and scalable cloud solutions',
      icon: Cloud,
      color: 'cyan',
      items: [
        {
          title: 'AWS Services',
          description: 'EC2, S3, RDS, Lambda serverless functions. Infrastructure as Code with CDK.',
          level: 75,
          experience: '1+ year',
          link: 'https://aws.amazon.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
        },
        {
          title: 'Vercel & Deployment',
          description: 'Seamless deployment pipelines, edge functions, and performance optimization.',
          level: 95,
          experience: '2+ years',
          link: 'https://vercel.com',
          icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png'
        },
        {
          title: 'Docker & Containers',
          description: 'Containerization, multi-stage builds, and orchestration with Docker Compose.',
          level: 80,
          experience: '1+ year',
          link: 'https://docker.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        {
          title: 'CI/CD Pipelines',
          description: 'Automated testing and deployment with GitHub Actions. Quality gates and workflows.',
          level: 80,
          experience: '1+ year',
          link: 'https://github.com/features/actions',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Workflow',
      description: 'Development tools, version control, and productivity systems',
      icon: Wrench,
      color: 'pink',
      items: [
        {
          title: 'Git & Version Control',
          description: 'Advanced Git workflows, branching strategies, and collaborative development.',
          level: 95,
          experience: '4+ years',
          link: 'https://git-scm.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
          title: 'VS Code & IDEs',
          description: 'Customized development environment, extensions, and productivity workflows.',
          level: 95,
          experience: '4+ years',
          link: 'https://code.visualstudio.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        {
          title: 'Figma & Design',
          description: 'UI/UX design, prototyping, and design system creation. Developer handoff processes.',
          level: 80,
          experience: '2+ years',
          link: 'https://figma.com',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          title: 'Testing & Quality',
          description: 'Unit testing with Jest, integration testing, and quality assurance practices.',
          level: 80,
          experience: '2+ years',
          link: 'https://jestjs.io',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.name.split(' ')[0] })) // Shortened names for tabs
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  // Get overall proficiency stats
  const getOverallStats = () => {
    const allItems = skillCategories.flatMap(cat => cat.items);
    const avgLevel = Math.round(allItems.reduce((sum, item) => sum + item.level, 0) / allItems.length);
    return {
      totalSkills: allItems.length,
      categories: skillCategories.length,
      avgProficiency: avgLevel,
      yearsExperience: '4+'
    };
  };

  const stats = getOverallStats();

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
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Skill Categories
            </h2>
            <div className="max-w-3xl mx-auto">
              <TextGenerateEffect 
                words="Organized by technology stack and development focus areas. Here's my technical expertise across the full development lifecycle."
                className="text-lg md:text-xl leading-relaxed font-sans"
                duration={0.3}
                isDark={isDark}
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
                {category.name}
              </motion.button>
            ))}
          </motion.div>

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
                        <h3 className={`text-2xl md:text-3xl font-bold font-sans ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {category.name}
                        </h3>
                      </div>
                      <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {category.description}
                      </p>
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
            <p className={`text-xl md:text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let's build something amazing together! 🚀
            </p>
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