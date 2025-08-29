"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { TextGenerateEffect } from "./text-generate-effect";

export const Timeline = ({ data }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <TextGenerateEffect 
          words="My Journey"
          className={`text-lg md:text-4xl mb-4 max-w-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
          duration={0.5}
          isDark={isDark}
        />
        <TextGenerateEffect 
          words="Here's my professional timeline and key milestones."
          className={`text-sm md:text-base max-w-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          duration={0.03}
          isDark={isDark}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center ${
                isDark ? 'bg-black' : 'bg-white'
              }`}>
                <div className={`h-4 w-4 rounded-full border p-2 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-gray-200 border-gray-300'
                }`} />
              </div>
              <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] ${
            isDark 
              ? 'bg-gradient-to-b from-transparent via-gray-700 to-transparent'
              : 'bg-gradient-to-b from-transparent via-gray-300 to-transparent'
          }`}
          style={{
            height: height + "px",
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};