import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

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
      {items.map((item, idx) => (
        <motion.div
          key={item?.id || idx}
          variants={cardVariants}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onClick={() => item.onProjectClick && item.onProjectClick()}
        >
          <div
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-full w-full">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
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
                    <span className="font-bold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                      {item.title}
                    </span>
                  </div>
                  {item.category && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex-shrink-0">
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
                      className="px-2 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded text-xs font-medium text-neutral-500 dark:text-neutral-500">
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
                    className="text-blue-600 hover:text-blue-700 text-sm"
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
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm"
                  >
                    View Code
                  </a>
                )}
              </div>
            </Card>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
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
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
