import React, { useState } from "react";
// import hamburger from "./public/hamburger.png";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  function toggleNavbar() {
    setOpenNavbar((prev) => !prev);
  }
  return (
    <header className=" px-5 scroll-smooth fixed top-0 z-50 bg-white right-0 left-0 md:flex md:justify-between md:px-10">
      <div className="flex justify-between  py-3 items-center">
        <div className="font-bold text-[20px] lg:text-[24px]">
          DS<span className="text-[#02BDEA]">DIGIT</span>
          <span>ALZ</span>
        </div>
        <div className="flex justify-between items-center p-5"></div>

        <button
          onClick={toggleNavbar}
          className="flex flex-col gap-1 justify-center relative md:hidden"
        >
          <div className="bg-black rounded px-4 py-0.5"></div>
          <div className="bg-black rounded px-4 py-0.5"></div>
          <div className="bg-black rounded px-4 py-0.5"></div>
          {/* <img src={hamburger} alt="" /> */}
        </button>
      </div>

      <nav
        className={`flex justify-between items-center ${
          openNavbar ? "max-h-[500px]" : "max-h-0"
        } transition-all duration-300 ease-in md:block md:max-h-full overflow-hidden`}
      >
        <ul className="flex flex-col p-5 gap-[25px] text-[16px] font-medium md:flex-row">
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="|#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="|#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="|#services">Services</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

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
