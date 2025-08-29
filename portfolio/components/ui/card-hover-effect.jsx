import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { LinkPreview } from "./link-preview";
import { useTheme } from "../../components/ThemeProvider";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}
    >
      {items.map((item, idx) => {
        const isProjectCard = item.onProjectClick;
        const isSkillCard = item.link && !item.onProjectClick;
        
        return (
          <motion.div
            key={item?.id || item?.link || idx}
            variants={cardVariants}
            className="relative group block p-2 h-full w-full cursor-pointer"
            onClick={() => {
              if (item.onProjectClick) {
                item.onProjectClick();
              } else if (item.link) {
                window.open(item.link, '_blank');
              }
            }}
          >
          <div
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-full w-full">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={`absolute inset-0 h-full w-full block rounded-3xl ${
                    isDark 
                      ? "bg-gray-800/80" 
                      : "bg-gray-100/80"
                  }`}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }} />
              )}
            </AnimatePresence>
            <Card>
              {/* Project Image */}
              {item.image && (
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <img 
                    src={item.image} 
                    alt={`${item.title} preview`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                          <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
              )}
              <CardTitle>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.icon} 
                      alt={`${item.title} logo`}
                      className="w-8 h-8 object-contain flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className={`font-bold transition-colors cursor-pointer ${
                      isDark 
                        ? "text-white hover:text-blue-400" 
                        : "text-gray-900 hover:text-blue-600"
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  {item.category && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      isDark 
                        ? "bg-blue-900/30 text-blue-300" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {item.category}
                    </span>
                  )}
                </div>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
              
              {/* Technologies */}
              {item.technologies && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        isDark 
                          ? "bg-gray-800 text-gray-300" 
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 4 && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}>
                      +{item.technologies.length - 4} more
                    </span>
                  )}
                </div>
              )}
              
              {/* Simple Links */}
              <div className="flex gap-4 mt-4">
                {item.liveUrl && item.liveUrl !== '#' && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`text-sm ${
                      isDark 
                        ? "text-blue-400 hover:text-blue-300" 
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    {item.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                )}
                
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`text-sm ${
                      isDark 
                        ? "text-gray-400 hover:text-gray-300" 
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    View Code
                  </a>
                )}
              </div>
            </Card>
          </div>
        </motion.div>
        );
      })}
    </motion.div>
  );
};

export const Card = ({
  className,
  children
}) => {
  const { isDark } = useTheme();
  
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden relative z-20",
        isDark 
          ? "bg-gray-900 border border-gray-800 group-hover:border-gray-700" 
          : "bg-white border border-gray-200 group-hover:border-gray-300",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  const { isDark } = useTheme();
  
  return (
    <h4 className={cn(
      "font-bold tracking-wide mt-4", 
      isDark ? "text-white" : "text-gray-900",
      className
    )}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  const { isDark } = useTheme();
  
  return (
    <p
      className={cn(
        "mt-8 tracking-wide leading-relaxed text-sm", 
        isDark ? "text-gray-300" : "text-gray-600",
        className
      )}>
      {children}
    </p>
  );
};
