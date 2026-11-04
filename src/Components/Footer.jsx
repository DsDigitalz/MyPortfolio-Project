"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Work", href: "#work" },
    { name: "Why Me", href: "#why-me" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`py-12 sm:py-16 px-6 sm:px-12 border-t transition-colors duration-500 ${
        isDarkMode
          ? "bg-black border-white/10 text-white"
          : "bg-white border-black/10 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Wordmark */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold tracking-tight text-lg">
            Daniel Sanu
          </span>
          <span
            className={`hidden sm:inline text-xs ${
              isDarkMode ? "text-gray-600" : "text-gray-300"
            }`}
          >
            /
          </span>
          <span
            className={`text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Product Designer & Software Engineer
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-5 sm:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              isDarkMode
                ? "bg-white/5 border-white/10 hover:bg-white/15 text-gray-300 hover:text-white"
                : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
            }`}
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-inherit flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center">
        <p>© {new Date().getFullYear()} Daniel Sanu. All rights reserved.</p>
        <p className="font-editorial italic text-sm text-gray-400">
          Designed with intention. Built for impact.
        </p>
      </div>
    </footer>
  );
}
