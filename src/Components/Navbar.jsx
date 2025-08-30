import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoSunnyOutline } from "react-icons/io5";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use the theme state and toggle function

  function toggleNavbar() {
    setOpenNavbar((prev) => !prev);
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const blueTextClass = "text-[#02BDEA]";
  const goldTextClass = "text-[#D3AF37]";
  const goldHoverClass = "hover:text-[#D3AF37]";
  const goldActiveClass = "active:text-amber-400";
  const blueHoverClass = "hover:text-sky-400";
  const blueActiveClass = "active:text-sky-500";

  return (
    <header
      className={`px-5 scroll-smooth fixed top-0 z-50 right-0 left-0 md:flex md:justify-between md:px-10 ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between py-3 items-center">
        <motion.div
          className="font-bold text-[20px] lg:text-[24px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          DS
          <span className={isDarkMode ? goldTextClass : blueTextClass}>
            DIGIT
          </span>
          <span>ALZ</span>
        </motion.div>
        <div className="flex justify-between items-center p-5"></div>
        <motion.button
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onClick={toggleNavbar}
          className="flex flex-col gap-1 justify-center relative md:hidden"
        >
          <div
            className={`rounded px-4 py-0.5 ${
              isDarkMode ? "bg-white" : "bg-black"
            }`}
          ></div>
          <div
            className={`rounded px-4 py-0.5 ${
              isDarkMode ? "bg-white" : "bg-black"
            }`}
          ></div>
          <div
            className={`rounded px-4 py-0.5 ${
              isDarkMode ? "bg-white" : "bg-black"
            }`}
          ></div>
        </motion.button>
      </div>
      <motion.nav
        className={`flex justify-between items-center ${
          openNavbar ? "max-h-[500px]" : "max-h-0"
        } transition-all duration-300 ease-in md:block md:max-h-full overflow-hidden`}
      >
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center flex-col p-5 gap-[25px] text-[16px] font-medium md:flex-row"
        >
          <li
            className={`cursor-pointer ${
              isDarkMode ? goldHoverClass : blueHoverClass
            } ${isDarkMode ? goldActiveClass : blueActiveClass}`}
          >
            <a href="#home" onClick={() => setOpenNavbar(false)}>
              Home
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode ? goldHoverClass : blueHoverClass
            } ${isDarkMode ? goldActiveClass : blueActiveClass}`}
          >
            <a href="#about" onClick={() => setOpenNavbar(false)}>
              About
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode ? goldHoverClass : blueHoverClass
            } ${isDarkMode ? goldActiveClass : blueActiveClass}`}
          >
            <a href="#services" onClick={() => setOpenNavbar(false)}>
              Services
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode ? goldHoverClass : blueHoverClass
            } ${isDarkMode ? goldActiveClass : blueActiveClass}`}
          >
            <a href="#portfolio" onClick={() => setOpenNavbar(false)}>
              Projects
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode ? goldHoverClass : blueHoverClass
            } ${isDarkMode ? goldActiveClass : blueActiveClass}`}
          >
            <a href="#con" onClick={() => setOpenNavbar(false)}>
              Contact
            </a>
          </li>
          <div onClick={toggleTheme} className="cursor-pointer text-xl">
            {isDarkMode ? <WiMoonAltWaningGibbous6 /> : <IoSunnyOutline />}
          </div>
        </motion.ul>
      </motion.nav>
    </header>
  );
}
