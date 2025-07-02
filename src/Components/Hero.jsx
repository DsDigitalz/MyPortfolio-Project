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
      <div className="hero flex flex-col pt-30 pb-20  lg:justify-center gap-7">
        {/* <img src={rectangle} alt="" /> */}

        <div className="mx-auto lg:flex-1">
          <img src={Danny} alt="" className="shadow-2xl shadow-white" />
        </div>
        {/* Hero info */}
        <div className="hero font-semibold text-[40px] flex flex-col items-center  py-5  ">
          <div className="flex flex-col items-center bg-white w-full lg:flex lg:flex-col lg:items-center p-2 ">
            <div className="flex flex-col items-center ">
              <h1 className="lg:text-[70px]">Hi, I'm</h1>
              <h1 className="lg:text-[70px] text-[#02BDEA]">Daniel Sanu</h1>
            </div>
          </div>
          <p className="fade_text text-[18px] mt-3 w-70 text-center sm: lg:text-[24px] lg:w-full ">
            UIUX DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </p>
          <p className="text-[16px] w-[325px] text-center mt-3 font-normal leading-7 lg:w-[50%]">
            As a UI/UX designer and front-end software developer, I specialize
            in creating intuitive and engaging user experiences that bridge the
            gap between aesthetics and functionality.
          </p>
          <div className="flex gap-7 pt-[40px] text-xl ">
            <a href="https://web.facebook.com/?_rdc=1&_rdr#">
              <FaFacebook className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <a href="https://x.com/settings/profile">
              <BsTwitterX className="cursor-pointer active:text-[#02BDEA]" />
            </a>
            <ImLinkedin className="cursor-pointer active:text-[#02BDEA]" />
            <FaInstagram className="cursor-pointer active:text-[#02BDEA]" />
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
