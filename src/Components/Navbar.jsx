import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Work", href: "#work" },
    { name: "Why Me", href: "#why-me" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pb-2 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between border ${
          isDarkMode
            ? isScrolled
              ? "bg-[#0c0d0e]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/80"
              : "bg-[#000000]/70 backdrop-blur-md border-white/10"
            : isScrolled
            ? "bg-white/90 backdrop-blur-xl border-black/10 shadow-lg shadow-black/5"
            : "bg-white/75 backdrop-blur-md border-black/10"
        }`}
      >
        {/* Wordmark / Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span
            className={`font-semibold tracking-tight text-sm sm:text-base transition-colors ${
              isDarkMode ? "text-white group-hover:text-gray-300" : "text-black group-hover:text-gray-700"
            }`}
          >
            Daniel Sanu
          </span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Available</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                  : "text-gray-600 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors border ${
              isDarkMode
                ? "bg-white/[0.05] border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                : "bg-black/[0.04] border-black/10 text-gray-700 hover:text-black hover:bg-black/[0.08]"
            }`}
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-200 shadow-sm"
                : "bg-black text-white hover:bg-gray-800 shadow-sm"
            }`}
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-full md:hidden transition-colors border ${
              isDarkMode
                ? "bg-white/[0.05] border-white/10 text-white"
                : "bg-black/[0.04] border-black/10 text-black"
            }`}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`pointer-events-auto fixed top-20 left-4 right-4 rounded-3xl p-6 border shadow-2xl md:hidden z-50 ${
              isDarkMode
                ? "bg-[#0d0e11]/95 backdrop-blur-2xl border-white/15 text-white"
                : "bg-white/95 backdrop-blur-2xl border-black/10 text-black"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-base font-medium transition-colors ${
                    isDarkMode
                      ? "hover:bg-white/10 text-gray-200"
                      : "hover:bg-black/5 text-gray-800"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 dark:border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all ${
                    isDarkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
