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
      {/* Top section with logo, nav links, and social links */}
      <div className="flex border fixed top-0 left-0 right-0 z-50 border-white rounded-full max-w-screen-lg mx-auto justify-between space-x-8 p-4 mt-4">
        {/* Logo section */}
        <div className="flex items-center justify-start">
          <Link
            className="text-4xl font-bold text-white hover:text-blue-400 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            href={"/"}
          >
            at
          </Link>
        </div>

        {/* Nav links centered */}
        <div className="flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="relative text-white transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-110 group"
            >
              <span className="relative z-10">{link.title}</span>
              <span className="absolute inset-0 bg-blue-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </div>

        {/* Social links aligned to the right */}
        <div className="flex items-center justify-end space-x-6">
          {socialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out hover:scale-125 hover:-translate-y-1 group-hover:drop-shadow-lg block">
                {link.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* Spacer to prevent content from being hidden behind the navbar */}
    </>
  );
};

export default Header;
