"use client";

import React from "react";
import { Timeline } from "../ui/timeline";
import { useTheme } from "../../components/ThemeProvider";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { Briefcase, Code, Smartphone, Globe, Database, Users, Building, CheckCircle } from "lucide-react";

export function Experience() {
  const { isDark } = useTheme();
  
  const data = [
    {
      title: "2024",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-bold mb-2"
            >
              Current Focus
            </motion.h3>
            <TextGenerateEffect 
              words="Senior at University of Texas at Austin | Seeking Full-Time Software Engineer Opportunities"
              className={`text-sm md:text-base mb-4 font-sans ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              duration={0.4}
              isDark={isDark}
              keywords={['Senior', 'University', 'Texas', 'Austin', 'Full-Time', 'Software', 'Engineer', 'Opportunities', 'Computer Science', 'Graduation', 'Career', 'Technology']}
              isTitle={true}
            />
          </div>
          <motion.ul 
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              "Building personal projects and contributing to open-source initiatives",
              "Strengthening technical portfolio with full-stack web and mobile applications", 
              "Specializing in React, Next.js, React Native, and modern web technologies",
              "Actively networking and interviewing with tech companies"
            ].map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`flex items-start gap-3 text-sm md:text-base font-sans ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" 
                />
                <TextGenerateEffect 
                  words={text}
                  className=""
                  duration={0.05}
                  isDark={isDark}
                  keywords={['personal projects', 'open-source', 'initiatives', 'technical portfolio', 'full-stack', 'web', 'mobile applications', 'React', 'Next.js', 'React Native', 'modern web technologies', 'networking', 'interviewing', 'tech companies']}
                  italicizeKeywords={true}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ),
    },
    {
      title: "2023",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-bold mb-2"
            >
              Freelance Web Developer
            </motion.h3>
            <TextGenerateEffect 
              words="Independent Contractor | Local Businesses & Startups"
              className={`text-sm md:text-base mb-4 font-sans ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              duration={0.4}
              isDark={isDark}
              keywords={['Independent', 'Contractor', 'Local', 'Businesses', 'Startups', 'Freelance', 'Web Development', 'Client Work', 'Entrepreneurship']}
              isTitle={true}
            />
          </div>
          <motion.ul 
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              "Built custom websites and web applications for local businesses and startups",
              "Specialized in React, Next.js, and modern web technologies",
              "Collaborated with clients to understand requirements and design user experiences",
              "Deployed production-ready applications with responsive design and optimal performance",
              "Delivered scalable full-stack solutions with modern frameworks and databases"
            ].map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`flex items-start gap-3 text-sm md:text-base font-sans ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" 
                />
                <TextGenerateEffect 
                  words={text}
                  className=""
                  duration={0.05}
                  isDark={isDark}
                  keywords={['websites', 'web applications', 'React', 'Next.js', 'clients', 'requirements', 'user experiences', 'production', 'responsive design', 'performance', 'full-stack', 'frameworks', 'databases']}
                  italicizeKeywords={true}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ),
    },
    {
      title: "2021-2022",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-bold mb-2"
            >
              Junior Web Developer Intern
            </motion.h3>
            <TextGenerateEffect 
              words="Tech Solutions Co. | First Professional Development Experience"
              className={`text-sm md:text-base mb-4 font-sans ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              duration={0.4}
              isDark={isDark}
              keywords={['Tech Solutions', 'Professional', 'Development', 'Experience', 'Internship', 'Learning', 'Growth', 'Team Collaboration', 'Industry']}
              isTitle={true}
            />
          </div>
          <motion.ul 
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              "Frontend development with HTML, CSS, and JavaScript",
              "Collaborated with senior developers on UI components and user interfaces",
              "Bug fixing and testing web applications across multiple browsers",
              "Version control with Git and GitHub for team-based development",
              "Agile development methodologies and sprint planning participation"
            ].map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`flex items-start gap-3 text-sm md:text-base font-sans ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" 
                />
                <TextGenerateEffect 
                  words={text}
                  className=""
                  duration={0.05}
                  isDark={isDark}
                  keywords={['HTML', 'CSS', 'JavaScript', 'UI components', 'user interfaces', 'bug fixing', 'testing', 'browsers', 'Git', 'GitHub', 'team development', 'Agile', 'sprint planning']}
                  italicizeKeywords={true}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ),
    },
  ];
  
  return (
    <div id="experience" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}