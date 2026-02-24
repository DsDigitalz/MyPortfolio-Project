"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  // Animation Variant for Scroll Reveal
  const scrollReveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true },
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#con" },
  ];

  return (
    <footer
      id="footer"
      className={`w-full py-12 px-6 transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#050505] border-t border-white/5"
          : "bg-slate-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section: Logo and Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pb-10">
          {/* Logo */}
          <motion.div
            className="text-2xl font-black tracking-tighter"
            {...scrollReveal}
          >
            <span className="text-white">DS</span>
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-400"}>
              DIGIT
            </span>
            <span className="text-white">ALZ</span>
          </motion.div>

          {/* Navigation Links */}
          <nav>
            <motion.ul
              className="flex flex-wrap justify-center gap-6 md:gap-10"
              {...scrollReveal}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-yellow-500"
                        : "text-slate-300 hover:text-sky-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </nav>
        </div>

        {/* Divider and Copyright */}
        <motion.div
          className={`w-full pt-8 border-t text-center ${
            isDarkMode ? "border-white/5" : "border-white/10"
          }`}
          {...scrollReveal}
        >
          <p className="text-xs md:text-sm text-gray-500 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">DSDigitalz</span>. All rights reserved.
            Crafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
