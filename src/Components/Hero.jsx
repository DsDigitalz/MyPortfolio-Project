import React from "react";
// import rectangle from "./public/Rectangle.png";
import Danny from "./public/Danny.png";
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

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* hero image */}
      <div className="mx-auto max-w-[1440px] pt-45 lg:px-30 flex flex-col items-center lg:pt-50 pb-20  lg:flex-row-reverse lg:justify-between lg:gap-7">
        {/* <img src={rectangle} alt="" /> */}

        {/* <div className=" w-[40%] lg:flex- "> */}
          <img
            src={Danny}
            alt=""
            className="mx-auto shadow-white w-[40%] lg:w-[40%] xl:w-[30%] border-5 border-white lg:mx-0"
          />
        {/* </div> */}
        {/* Hero info */}
        <div className="mt-10 lg:mt-0  font-semibold text-[40px] flex flex-col items-center lg:items-start pb-5 lg:flex-1 lg:flex lg:flex-col    ">
          <div className="  w-full  lg:flex- lg:text-left">
            <div className="  lg:flex-none text-center lg:text-left ">
              <h1 className="lg:text-[50px] ">Hi, I'm</h1>
              <h1 className="lg:text-[50px] text-[#02BDEA]">Daniel Sanu</h1>
            </div>
          </div>
          <p className="fade_text text-[16px] w-[70%] mt-3 text-center lg:text-left sm: lg:text-[18px] lg:w-full ">
            UIUX DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </p>
          <p className="text-[16px] w-[325px] text-center mt-3 font-normal leading-7 lg:w-[70%] lg:text-left">
            As a UI/UX designer and front-end software developer, I specialize
            in creating intuitive and engaging user experiences that bridge the
            gap between aesthetics and functionality.
          </p>
          <div className="flex gap-7 pt-[40px] text-xl ">
            <a href="https://www.facebook.com/daniel.sanu.16/">
              <FaFacebook className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://x.com/settings/profile">
              <BsTwitterX className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <ImLinkedin className="cursor-pointer active:text-[#02BDEA]" />
            <a href="https://www.instagram.com/danielsanu35/?hl=en">
            <FaInstagram className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://github.com/DsDigitalz">
              <FaGithub className="cursor-pointer active:text-[#02BDEA]" />
            </a>
          </div>
          <button className="rounded-full bg-[#02BDEA] w-[180px] p-3 mt-10 cursor-pointer active:bg-[#50cbea] flex items-center gap-2 justify-center text-white">
            <p className="text-[16px] text-white font-semibold ">Contact Me</p>
            <MdArrowOutward className="text-[24px] bg-sky-300 rounded-full p-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
