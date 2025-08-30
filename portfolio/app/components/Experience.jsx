"use client";

import React from "react";
import { Timeline } from "../ui/timeline";
import { useTheme } from "../../components/ThemeProvider";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { experienceTimelineData } from "../../data/experience-timeline";
import { Briefcase, Code, Smartphone, Globe, Database, Users, Building, CheckCircle } from "lucide-react";

export function Experience() {
  const { isDark } = useTheme();
  
  // Transform data from the data file to the timeline format
  const data = experienceTimelineData.map((experience) => ({
    title: experience.dateRange,
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
            {experience.title}
          </motion.h3>
          <TextGenerateEffect 
            words={experience.subtitle}
            className={`text-sm md:text-base mb-4 font-sans ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            duration={0.4}
            isDark={isDark}
            keywords={experience.subtitleKeywords}
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
          {experience.bulletPoints.map((bulletPoint, index) => (
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
                className={`w-2 h-2 rounded-full bg-${experience.color}-500 mt-2 flex-shrink-0`}
              />
              <TextGenerateEffect 
                words={bulletPoint.text}
                className=""
                duration={0.05}
                isDark={isDark}
                keywords={bulletPoint.keywords}
                italicizeKeywords={true}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    ),
  }));
  
  return (
    <div id="experience" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}