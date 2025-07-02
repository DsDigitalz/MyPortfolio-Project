import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <section className="bg-black p-15 w-full mt-10" id="footer">
      <div className="flex justify-center gap-30 items-center lg:flex lg:justify-between lg:px-20 lg:py-10 ">
        <div className="font-bold text-[20px] lg:text-[24px] text-white">
          DS<span className="text-[#02BDEA]">DIGIT</span>
          <span className="text-white">ALZ</span>
        </div>
        <div className="text-white flex flex-col gap-5 lg:flex lg:flex-row">
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
        </div>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-zinc-400">
          ©2025DSDigitalzPortfolio.All rights reserved.
        </h1>
      </div>
      <ScrollToTop />
    </section>
  );
}
