"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../components/ThemeProvider";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import GameLuxuryButton from "../../components/GameLuxuryButton";
import Link from "next/link";

export function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "austintran616@gmail.com",
      href: "mailto:austintran616@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (281) 902-8247",
      href: "tel:+12819028247"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Austin, Texas",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/austin616"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/austin-tran-57624a284/"
    }
  ];

  return (
    <div id="contact" className="min-h-screen py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextGenerateEffect 
            words="Let's Work Together"
            className={`text-3xl md:text-5xl font-bold mb-6 font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            duration={0.5}
            isDark={isDark}
            keywords={['Work', 'Together']}
            isTitle={true}
          />
          <TextGenerateEffect 
            words="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
            className={`text-lg md:text-xl font-sans max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            duration={0.03}
            isDark={isDark}
            keywords={['project', 'opportunities', 'discuss', 'hear']}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl border ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <TextGenerateEffect 
              words="Send a Message"
              className={`text-2xl font-bold mb-6 font-sans ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              duration={0.4}
              isDark={isDark}
              keywords={['Send', 'Message']}
              isTitle={true}
            />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 font-sans ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border font-sans transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 font-sans ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border font-sans transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 font-sans ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border font-sans transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <GameLuxuryButton
                variant="primary"
                size="default"
                icon={Send}
                className="w-full shadow-xl shadow-blue-500/20"
                onClick={handleSubmit}
              >
                Send Message
              </GameLuxuryButton>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <TextGenerateEffect 
                words="Get in Touch"
                className={`text-2xl font-bold mb-6 font-sans ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                duration={0.4}
                isDark={isDark}
              />
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      isDark 
                        ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-gray-900/50' 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
                    }`}>
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isDark ? 'bg-blue-600/20 hover:bg-blue-600/30' : 'bg-blue-50 hover:bg-blue-100'
                      }`}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                        }`} />
                      </div>
                      <div>
                        <p className={`text-sm font-medium font-sans transition-colors duration-300 ${
                          isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
                        }`}>
                          {info.label}
                        </p>
                        <p className={`font-sans transition-colors duration-300 ${
                          isDark ? 'text-white hover:text-gray-100' : 'text-gray-900 hover:text-gray-800'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <TextGenerateEffect 
                words="Connect with me"
                className={`text-lg font-bold mb-4 font-sans ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                duration={0.3}
                isDark={isDark}
              />
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10' 
                            : 'bg-white border-gray-200 text-gray-600 hover:border-blue-500/50 hover:text-blue-600 hover:bg-blue-500/10'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}