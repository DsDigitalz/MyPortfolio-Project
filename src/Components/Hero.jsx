"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("con");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroImageSrc = isDarkMode ? "heroimg.png" : "heroimg3.png";

  // Container variant with staggerChildren
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      id="home"
      className={`hero ${
        isDarkMode
          ? "bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-purple-100 via-teal-50 to-white text-black"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-[1440px] pt-35 lg:pt-50 pb-20 px-4 flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-7 lg:px-40 h-full lg:h-screen">
        {/* Hero Image */}
        <motion.img
          key={isDarkMode ? "dark" : "light"} // forces remount when mode changes
          src={heroImageSrc}
          alt="Hero Image"
          className="mx-auto shadow-2xl w-[45%] md:w-[35%] lg:w-[50%] xl:w-[30%] lg:mx-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Hero Text */}
        <motion.div
          className="mt-10 lg:mt-0 font-semibold text-[40px] flex flex-col items-center lg:items-start pb-5 lg:flex-1 lg:flex lg:flex-col"
          variants={containerVariants}
        >
          <motion.h1
            className={`lg:text-[50px] xl:text-[60px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            variants={childVariants}
          >
            Hi, I'm
          </motion.h1>
          <motion.h1
            className={`lg:text-[50px] xl:text-[64px] ${
              isDarkMode ? "text-[#D3AF37]" : "text-[#02BDEA]"
            }`}
            variants={childVariants}
          >
            Daniel Sanu
          </motion.h1>
          <motion.p
            className={`fade_text text-[16px] w-full mt-3 text-center lg:text-left lg:text-[18px] ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
            variants={childVariants}
          >
            UI/UX/WEB DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </motion.p>
          <motion.p
            className={`text-[16px] text-center mt-3 font-normal leading-7 max-w-sm lg:max-w-none lg:w-[70%] lg:text-left ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
            variants={childVariants}
          >
            I specialize in creating intuitive and engaging user experiences
            that bridge the gap between aesthetics and functionality.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className={`flex gap-7 pt-[40px] text-xl ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            variants={childVariants}
          >
            <a href="https://x.com/daniel_san4975">
              <BsTwitterX className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/dsdigitalz/">
              <ImLinkedin className="cursor-pointer" />
            </a>
            <a href="https://github.com/DsDigitalz">
              <FaGithub className="cursor-pointer" />
            </a>
          </motion.div>

          {/* Contact Button */}
          <motion.button
            onClick={handleScrollToContact}
            className={`rounded-full w-[180px] p-3 mt-10 cursor-pointer flex items-center gap-2 justify-center text-white ${
              isDarkMode ? "bg-[#D3AF37] text-black" : "bg-[#02BDEA]"
            }`}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            variants={childVariants}
          >
            <p
              className={`text-[16px] font-semibold ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              Contact Me
            </p>
            <MdArrowOutward
              className={`text-[24px] rounded-full p-1 ${
                isDarkMode ? "bg-[#D3AF37] text-black" : "bg-sky-300"
              }`}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  );
}
