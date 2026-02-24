"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSunnyOutline } from "react-icons/io5";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleNavbar = () => setOpenNavbar((prev) => !prev);

  // Entrance Animation: Fade + Slide Down
  const navAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#con" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 border-b ${
        isDarkMode
          ? "bg-zinc-900/80 border-white/5 backdrop-blur-md text-white"
          : "bg-white/80 border-slate-200 backdrop-blur-md text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          {...navAnimation}
          className="flex items-center gap-2 group cursor-pointer"
        >
          {/* <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 p-2 shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <img
              src="/arcticons--digitalsignage (1).svg"
              alt="Logo"
              className={`w-full h-full filter invert`}
            />
          </div> */}
          <h1 className="text-xl font-bold tracking-tight">
            Ds
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
              Digitalz
            </span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.ul
            className="flex items-center gap-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={navAnimation}>
                <a
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 relative group`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isDarkMode ? "bg-yellow-500" : "bg-sky-500"
                    }`}
                  />
                </a>
              </motion.li>
            ))}

            {/* Theme Toggle Desktop */}
            <motion.button
              variants={navAnimation}
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all ${
                isDarkMode
                  ? "bg-white/5 hover:bg-white/10 text-yellow-500"
                  : "bg-slate-100 hover:bg-slate-200 text-sky-600"
              }`}
            >
              {isDarkMode ? (
                <WiMoonAltWaningGibbous6 size={20} />
              ) : (
                <IoSunnyOutline size={20} />
              )}
            </motion.button>
          </motion.ul>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-2xl">
            {isDarkMode ? (
              <WiMoonAltWaningGibbous6 className="text-yellow-500" />
            ) : (
              <IoSunnyOutline className="text-sky-500" />
            )}
          </button>

          <button
            onClick={toggleNavbar}
            className="flex flex-col gap-1.5 w-8 items-end"
          >
            <motion.span
              animate={openNavbar ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className={`h-0.5 w-full rounded-full ${
                isDarkMode ? "bg-white" : "bg-black"
              }`}
            />
            <motion.span
              animate={openNavbar ? { opacity: 0 } : { opacity: 1 }}
              className={`h-0.5 w-3/4 rounded-full ${
                isDarkMode ? "bg-white" : "bg-black"
              }`}
            />
            <motion.span
              animate={
                openNavbar
                  ? { rotate: -45, y: -8, width: "100%" }
                  : { rotate: 0, y: 0, width: "50%" }
              }
              className={`h-0.5 rounded-full ${
                isDarkMode ? "bg-white" : "bg-black"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {openNavbar && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden border-t ${
              isDarkMode
                ? "bg-zinc-900 border-white/5"
                : "bg-white border-slate-100"
            }`}
          >
            <ul className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpenNavbar(false)}
                    className="text-lg font-bold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
