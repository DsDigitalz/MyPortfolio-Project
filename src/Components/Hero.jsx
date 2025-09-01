import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("con");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className={`hero ${
        isDarkMode
          ? "bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-purple-100 via-teal-50 to-white text-black"
      }`}
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-[1440px] pt-35 lg:pt-50 pb-20 px-4 flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-7 lg:px-40">
        <motion.img
          src="danny.png"
          alt=""
          className="mx-auto shadow-2xl  w-[45%] md:w-[35%] lg:w-[40%] xl:w-[30%] lg:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="mt-10 lg:mt-0 font-semibold text-[40px] flex flex-col items-center lg:items-start pb-5 lg:flex-1 lg:flex lg:flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full text-center lg:text-left">
            <motion.h1
              className={`lg:text-[50px] xl:text-[60px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hi, I'm
            </motion.h1>
            <motion.h1
              className={`lg:text-[50px] xl:text-[64px] ${
                isDarkMode ? "text-[#D3AF37]" : "text-[#02BDEA]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Daniel Sanu
            </motion.h1>
          </div>
          <motion.p
            className={`fade_text text-[16px] w-full mt-3 text-center lg:text-left lg:text-[18px] lg:w-full ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            UIUX/WEB DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </motion.p>
          <motion.p
            className={`text-[16px] text-center mt-3 font-normal leading-7 max-w-sm lg:max-w-none lg:w-[70%] lg:text-left ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            As a UI/UX, Web designer and front-end software developer, I
            specialize in creating intuitive and engaging user experiences that
            bridge the gap between aesthetics and functionality.
          </motion.p>
          <motion.div
            className={`flex gap-7 pt-[40px] text-xl ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a href="https://www.facebook.com/daniel.sanu.16/">
              <FaFacebook
                className={`cursor-pointer ${
                  isDarkMode ? "active:text-[#fdc705]" : "active:text-[#02BDEA]"
                }`}
              />
            </a>
            <a href="https://x.com/daniel_san4975">
              <BsTwitterX
                className={`cursor-pointer ${
                  isDarkMode ? "active:text-[#FFD700]" : "active:text-[#02BDEA]"
                }`}
              />
            </a>
            <a href="https://www.linkedin.com/in/daniel-sanu-b89298374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <ImLinkedin
                className={`cursor-pointer ${
                  isDarkMode ? "active:text-[#FFD700]" : "active:text-[#02BDEA]"
                }`}
              />
            </a>
            <a href="https://www.instagram.com/danielsanu35/?hl=en">
              <FaInstagram
                className={`cursor-pointer ${
                  isDarkMode ? "active:text-[#FFD700]" : "active:text-[#02BDEA]"
                }`}
              />
            </a>
            <a href="https://github.com/DsDigitalz">
              <FaGithub
                className={`cursor-pointer ${
                  isDarkMode ? "active:text-[#FFD700]" : "active:text-[#02BDEA]"
                }`}
              />
            </a>
          </motion.div>
          <motion.button
            onClick={handleScrollToContact}
            className={`rounded-full w-[180px] p-3 mt-10 cursor-pointer active:bg-[#059fc6] flex items-center gap-2 justify-center text-white ${
              isDarkMode ? "bg-[#D3AF37] text-black" : "bg-[#02BDEA]"
            }`}
            id="contact"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
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
    </motion.section>
  );
}
