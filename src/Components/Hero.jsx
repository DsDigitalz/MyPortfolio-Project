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
      <div className="flex flex-col py-20">
        {/* <img src={rectangle} alt="" /> */}
        <div className="mx-auto">
          <img src={Danny} alt="" className="shadow-2xl shadow-white" />
        </div>
        {/* Hero info */}
        <div className="font-semibold text-[40px] flex flex-col items-center mt-[30px] bg-white py-10">
          <h1>Hi, I'm</h1>
          <h1>Daniel Sanu</h1>
          <p className="text-[18px] mt-3 w-70 text-center">UIUX DESIGNER/FRONTEND SOFTWARE DEVELOPER</p>
          <p className="text-[16px] w-[325px] text-center mt-3 font-normal leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            tenetur eveniet in dolorum? Sunt pariatur eveniet dolores
            perspiciatis voluptate rem nisi officiis ab laborum facilis! In
            ipsum facere quibusdam dignissimos eaque cum possimus amet, et
            impedit dicta adipisci. Debitis, sequi
          </p>
        <div className="flex gap-7 pt-[40px]">
          <img src={facebook} alt="" />
          <img src={x} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
          <img src={github} alt="" />
        </div>
          <button className="rounded-full bg-[#02BDEA] w-[180px] p-3 mt-10">
            <p className="text-[16px] text-white font-semibold">Contact Me</p>
          </button>
        </div>
      </div>
    </section>
  );
}
