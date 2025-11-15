import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { IoIosArrowRoundUp } from "react-icons/io";
import ScrollToTop from "./ScrollToTop";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

export default function Footer() {
  const { isDarkMode } = useTheme();

  // Create a ref for the element you want to track
  const ref = useRef(null);
  // useInView hook to detect if the element is visible
  const isInView = useInView(ref, { once: true });
  // useAnimation hook to control the animation
  const controls = useAnimation();

  // Define the animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Use useEffect to trigger the animation when the element is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      className="bg-black p-10 w-full mt-10"
      id="footer"
      ref={ref} // Attach the ref to the element
    >
      <div className="flex flex-col justify-center gap-10 items-center lg:flex-row lg:justify-between lg:px-20 lg:py-10">
        <motion.div
          className="font-bold text-[20px] lg:text-[24px] text-white"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          DS
          <span className={isDarkMode ? "text-[#D3AF37]" : "text-[#02BDEA]"}>
            DIGIT
          </span>
          <span className="text-white">ALZ</span>
        </motion.div>
        <motion.ul
          className="text-zinc-300 text-[12px] flex items-center gap-5 lg:flex lg:flex-row"
          variants={fadeInVariants}
        >
          <li
            className={`cursor-pointer ${
              isDarkMode
                ? "hover:text-amber-400 active:text-amber-500"
                : "hover:text-sky-400 active:text-sky-500"
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode
                ? "hover:text-amber-400 active:text-amber-500"
                : "hover:text-sky-400 active:text-sky-500"
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode
                ? "hover:text-amber-400 active:text-amber-500"
                : "hover:text-sky-400 active:text-sky-500"
            }`}
          >
            <a href="#services">Services</a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode
                ? "hover:text-amber-400 active:text-amber-500"
                : "hover:text-sky-400 active:text-sky-500"
            }`}
          >
            <a href="#portfolio">Portfolio</a>
          </li>
          <li
            className={`cursor-pointer ${
              isDarkMode
                ? "hover:text-amber-400 active:text-amber-500"
                : "hover:text-sky-400 active:text-sky-500"
            }`}
          >
            <a href="#con">Contact</a>
          </li>
        </motion.ul>
      </div>
      <motion.div
        className="text-center mt-10 border-t-1 pt-5 text-zinc-400 w-[85%] sm:w-[50%] lg:w-[85%] xl:w-[90%] mx-auto md"
        variants={fadeInVariants}
      >
        <h1 className="text-zinc-400 text-[12px] md:text-[14px] lg:text-[14px]">
          ©2025DSDigitalzPortfolio.All rights reserved.
        </h1>
      </motion.div>
      {/* <ScrollToTop /> */}
    </motion.section>
  );
}
