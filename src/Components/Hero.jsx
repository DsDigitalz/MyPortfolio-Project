import React from "react";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useTheme } from "./ThemeContext"; // Assuming this hook provides isDarkMode

export default function Hero() {
  const { isDarkMode } = useTheme();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("con");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine the correct image source based on the theme
  const heroImageSrc = isDarkMode ? "heroimg.png" : "heroimg3.png";

  // Framer Motion variants for the scroll effect (slide-in and fade-in)
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  // Sub-component for a single Motion Image with animation
  const MotionHeroImage = ({ src, className }) => (
    <motion.img
      key={src} // Key is essential to force a re-render and re-animate when the source changes
      src={src}
      alt="Hero Image"
      className={className}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible" // Animate on scroll (when in view)
      viewport={{ once: true, amount: 0.3 }} // Once in view, trigger animation
    />
  );

  return (
    <motion.main // Changed to <main> for better semantic structure
      className={`hero ${
        isDarkMode
          ? "bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-purple-100 via-teal-50 to-white text-black"
      }`}
      id="home"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate the section itself on scroll
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-[1440px] pt-35 lg:pt-50 pb-20 px-4 flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-7 lg:px-40 h-full lg:h-screen ">
        {/* Conditional Image Rendering */}
        <MotionHeroImage
          src={heroImageSrc}
          className="mx-auto shadow-2xl w-[45%] md:w-[35%] lg:w-[50%] xl:w-[30%] lg:mx-0"
        />

        <motion.div
          className="mt-10 lg:mt-0 font-semibold text-[40px] flex flex-col items-center lg:items-start pb-5 lg:flex-1 lg:flex lg:flex-col"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible" // Animate content on scroll
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full text-center lg:text-left">
            <motion.h1
              className={`lg:text-[50px] xl:text-[60px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hi, I'm
            </motion.h1>
            <motion.h1
              className={`lg:text-[50px] xl:text-[64px] ${
                isDarkMode ? "text-[#D3AF37]" : "text-[#02BDEA]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            UI/UX/WEB DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </motion.p>
          <motion.p
            className={`text-[16px] text-center mt-3 font-normal leading-7 max-w-sm lg:max-w-none lg:w-[70%] lg:text-left ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a href="https://x.com/daniel_san4975">
              <BsTwitterX
                className={`cursor-pointer ${
                  isDarkMode ? "active:text-[#FFD700]" : "active:text-[#02BDEA]"
                }`}
              />
            </a>
            <a href="https://www.linkedin.com/in/dsdigitalz/">
              <ImLinkedin
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
            className={`rounded-full w-[180px] p-3 mt-10 cursor-pointer flex items-center gap-2 justify-center text-white ${
              isDarkMode
                ? "bg-[#D3AF37] text-black active:bg-[#FFD700]"
                : "bg-[#02BDEA] active:bg-[#50cbea]"
            }`}
            id="contact"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
    </motion.main>
  );
}
