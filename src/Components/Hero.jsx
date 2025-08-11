import React from "react";
// import rectangle from "./public/Rectangle.png";
// import Danny from "./public/Danny.png";
// // import facebook from "./public/facebook.png";
// import x from "./public/x.png";
// import linkedin from "./public/linkedin.png";
// import instagram from "./public/instagram.png";
// import github from "./public/github.png"veinw
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("con");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1.5 }}
      className="hero"
      id="home"
    >
      {/* hero image */}
      <div className="h-screen mx-auto max-w-[1440px] pt-45 lg:px-30 flex flex-col items-center lg:pt-50 pb-20        lg:flex-row-reverse lg:justify-between lg:gap-7">
        {/* <img src={rectangle} alt="" /> */}

        {/* <div className=" w-[40%] lg:flex- "> */}
        <img
          src="danny.png"
          alt=""
          className="mx-auto shadow-2xl w-[40%] lg:w-[40%] xl:w-[30%]  lg:mx-0"
        />
        {/* </div> */}
        {/* Hero info */}
        <motion.div className="mt-10 lg:mt-0  font-semibold text-[40px] flex flex-col items-center lg:items-start pb-5 lg:flex-1 lg:flex lg:flex-col ">
          <div className="  w-full  lg:flex- lg:text-left">
            <div className="  lg:flex-none text-center lg:text-left ">
              {/* Turn to motion element */}
              <motion.h1 animate={{}} className="lg:text-[50px] xl:text-[60px]">
                Hi, I'm
              </motion.h1>
              <h1 className="lg:text-[50px] text-[#02BDEA] xl:text-[64px]">
                Daniel Sanu
              </h1>
            </div>
          </div>
          <p className="fade_text text-[16px] w-[70%] mt-3 text-center lg:text-left sm: lg:text-[18px] lg:w-full ">
            UIUX/WEB DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </p>
          <p className="text-[16px] w-[325px] text-center mt-3 font-normal leading-7 lg:w-[70%] lg:text-left">
            As a UI/UX, Web designer and front-end software developer, I
            specialize in creating intuitive and engaging user experiences that
            bridge the gap between aesthetics and functionality.
          </p>
          <div className="flex gap-7 pt-[40px] text-xl ">
            <a href="https://www.facebook.com/daniel.sanu.16/">
              <FaFacebook className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://x.com/daniel_san4975">
              <BsTwitterX className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-sanu-b89298374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <ImLinkedin className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://www.instagram.com/danielsanu35/?hl=en">
              <FaInstagram className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://github.com/DsDigitalz">
              <FaGithub className="cursor-pointer active:text-[#02BDEA]" />
            </a>
          </div>
          <motion.button
            onClick={handleScrollToContact}
            className="rounded-full bg-[#02BDEA] w-[180px] p-3 mt-10 cursor-pointer active:bg-[#50cbea] flex items-center gap-2 justify-center text-white"
            id="contact"
            // initial={{ x: "-100vw" }}
            // animate={{ x: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <p className="text-[16px] text-white font-semibold ">Contact Me</p>
            <MdArrowOutward className="text-[24px] bg-sky-300 rounded-full p-1" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
