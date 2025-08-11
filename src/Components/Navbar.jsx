import React, { useState } from "react";
import { motion } from "framer-motion";
// import hamburger from "./public/hamburger.png";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  function toggleNavbar() {
    setOpenNavbar((prev) => !prev);
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <header className=" px-5 scroll-smooth fixed top-0 z-50 bg-white right-0 left-0 md:flex md:justify-between md:px-10">
      <div className="flex justify-between  py-3 items-center">
        <motion.div
          className="font-bold text-[20px] lg:text-[24px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          DS<span className="text-[#02BDEA]">DIGIT</span>
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
          <div className="bg-black rounded px-4 py-0.5"></div>
          <div className="bg-black rounded px-4 py-0.5"></div>
          <div className="bg-black rounded px-4 py-0.5"></div>
          {/* <img src={hamburger} alt="" /> */}
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
        className="flex flex-col p-5 gap-[25px] text-[16px] font-medium md:flex-row">
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#home" onClick={() => setOpenNavbar(false)}>
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#about" onClick={() => setOpenNavbar(false)}>
              About
            </a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#services" onClick={() => setOpenNavbar(false)}>
              Services
            </a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#portfolio" onClick={() => setOpenNavbar(false)}>
              Projects
            </a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#con" onClick={() => setOpenNavbar(false)}>
              Contact
            </a>
          </li>
        </motion.ul>
      </motion.nav>

      {/* <div className="absolute right-5 top-15 font-semibold bg-white rounded-2xl px-10 py-6 shadow-2xl leading-10">
          <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Home
          </p>
          <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            About
          </p>
          <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Services
          </p>
          <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Portfolio
          </p>
          <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Contact
          </p>
        </div> */}
    </header>
  );
}
