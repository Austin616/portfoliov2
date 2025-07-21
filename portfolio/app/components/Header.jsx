"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/austin616",
    icon: <FaGithub className="text-2xl"/>,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/austin-tran-57624a284/",
    icon: <FaLinkedin className="text-2xl"/>,
  },
    ];

export const navLinks = [
  {
    title: "home",
    href: "/#",
  },
  {
    title: "about",
    href: "/#about",
  },
  {
    title: "skills",
    href: "/#skills",
  },
  {
    title: "contact",
    href: "/#contact",
  },
];

const Header = () => {
  const smoothScroll = (
    e,
    href
  ) => {
    e.preventDefault();
    const targetId = href.split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (href === "/#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Simple Rounded Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex items-center justify-between px-8 py-4 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            
            {/* Logo */}
            <Link
              href="/"
              className="text-4xl font-bold text-white hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              at
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className="relative text-white hover:text-blue-400 transition-all duration-300 group capitalize font-medium"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-125"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
