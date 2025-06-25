import React from "react";
import rectangle from "./public/Rectangle.png";
import Danny from "./public/Danny.png";

export default function Hero() {
  return (
    <section className="hero">
      {/* hero image */}
      <div className="flex flex-col py-30">
        {/* <img src={rectangle} alt="" /> */}
        <div className="mx-auto">
          <img src={Danny} alt="" className="shadow-2xl shadow-white" />
        </div>
        {/* Hero info */}
        <div className="font-semibold text-[40px] flex flex-col items-center mt-[30px] bg-white py-10">
          <h1>Hi, I'm</h1>
          <h1>Daniel Sanu</h1>
          <p className="text-[14px] mt-3">UIUX DESIGNER/FRONT-END DEVELOPER</p>
          <p className="text-[12px] w-[325px] text-center mt-3 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            tenetur eveniet in dolorum? Sunt pariatur eveniet dolores
            perspiciatis voluptate rem nisi officiis ab laborum facilis! In
            ipsum facere quibusdam dignissimos eaque cum possimus amet, et
            impedit dicta adipisci. Debitis, sequi
          </p>
        </div>
      </div>
    </section>
  );
}
