"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.1,
  isDark = false,
}) => {
  const [scope, animate] = useAnimate();
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
          y: 0,
          scale: 1,
        },
        {
          duration: duration,
          delay: stagger(staggerDelay),
          ease: "easeOut",
        }
      );
    }
  }, [isInView, hasAnimated, animate, duration, filter, staggerDelay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          // Define key words to highlight
          const keyWords = [
            'full-stack', 'developer', 'web', 'mobile', 'senior', 'full-time', 'Austin', 'looking', 'user', 'interfaces'
          ];
          
          // Clean word for comparison (remove punctuation)
          const cleanWord = word.replace(/[.,!?;:]/g, '').toLowerCase();
          const isKeyWord = keyWords.some(key => key.toLowerCase() === cleanWord);
          
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(8px)" : "none",
                y: 20,
                scale: 0.8,
                color: isKeyWord 
                  ? (isDark ? 'rgb(96, 165, 250)' : 'rgb(37, 99, 235)')
                  : (isDark ? 'rgb(212, 212, 212)' : 'rgb(55, 65, 81)'),
                fontWeight: isKeyWord ? 'bold' : 'normal'
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn("font-medium", className)}>
      <div className="text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};