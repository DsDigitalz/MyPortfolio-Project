import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <section className="bg-black p-10 w-full mt-10" id="footer">
      <div className="flex flex-col justify-center gap-10  items-center lg:flex-row lg:justify-between lg:px-20 lg:py-10 ">
        <div className="font-bold text-[20px] lg:text-[24px] text-white">
          DS<span className="text-[#02BDEA]">DIGIT</span>
          <span className="text-white">ALZ</span>
        </div>
        <ul className="text-zinc-300 text-[12px] flex items-center gap-5 lg:flex lg:flex-row">
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#home"> Home</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#home">Services</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#portfolio"> Portfolio</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="text-center mt-10 border-t-1 pt-5 text-zinc-400 w-[85%]  sm:w-[50%] lg:w-[85%] xl:w-[90%] mx-auto md">
        <h1 className="text-zinc-400 text-[12px] md:text-[14px] lg:text-[14px]">
          ©2025DSDigitalzPortfolio.All rights reserved.
        </h1>
      </div>
      {/* <ScrollToTop /> */}
    </section>
  );
}
