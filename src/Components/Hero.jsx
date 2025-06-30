import React from "react";
// import rectangle from "./public/Rectangle.png";
import Danny from "./public/Danny.png";
import facebook from "./public/facebook.png";
import x from "./public/x.png";
import linkedin from "./public/linkedin.png";
import instagram from "./public/instagram.png";
import github from "./public/github.png";

export default function Hero() {
  return (
    <section className="hero">
      {/* hero image */}
      <div className="flex flex-col pt-30 pb-20  lg:justify-center gap-7">
        {/* <img src={rectangle} alt="" /> */}
        
        <div className="mx-auto lg:flex-1">
          <img src={Danny} alt="" className="shadow-2xl shadow-white" />
        </div>
        {/* Hero info */}
        <div className="font-semibold text-[40px] flex flex-col items-center  py-5  ">
          <div className="flex flex-col items-center bg-white w-full lg:flex lg:flex-col lg:items-center p-2 ">
            <div className="flex flex-col items-center ">
              <h1 className="lg:text-[70px]">Hi, I'm</h1>
              <h1 className="lg:text-[70px] text-[#02BDEA]">Daniel Sanu</h1>
            </div>
          </div>
          <p className="text-[18px] mt-3 w-70 text-center sm: lg:text-[24px] lg:w-full ">
            UIUX DESIGNER/FRONTEND SOFTWARE DEVELOPER
          </p>
          <p className="text-[16px] w-[325px] text-center mt-3 font-normal leading-7 lg:w-[50%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            tenetur eveniet in dolorum? Sunt pariatur eveniet dolores
            perspiciatis voluptate rem nisi officiis ab laborum facilis! In
            ipsum facere quibusdam dignissimos eaque cum possimus amet, et
            impedit dicta adipisci. Debitis, sequi
          </p>
          <div className="flex gap-7 pt-[40px]">
            <img
              src={facebook}
              alt=""
              className="cursor-pointer active:bg-[#50cbea]"
            />
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
            <img src={github} alt="" />
          </div>
          <button className="rounded-full bg-[#02BDEA] w-[180px] p-3 mt-10 cursor-pointer active:bg-[#50cbea]">
            <p className="text-[16px] text-white font-semibold ">Contact Me</p>
          </button>
        </div>
      </div>
    </section>
  );
}
