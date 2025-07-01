import React from "react";
// import hamburger from "./public/hamburger.png";

export default function Navbar() {
  return (
    <section>
      {/* <div className="lg:flex justify-between px-10 py-5"> */}
      {/* <div className="font-bold">DSDIGITALZ</div> */}
      {/* <div className="flex justify-between items-center p-5"> */}
      {/* <ul className="flex gap-[55px] text-[16px] font-medium pr-20">
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Home
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            About
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Services
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Portfolio
          </li>
          <li className="cursor-pointer hover:text-sky-400  active:text-sky-500">
            Contact
          </li>
        </ul> */}
      {/* </div> */}

      <div className="flex justify-between px-5 py-3 items-center">
        <div className="font-bold text-[20px] lg:text-[24px]">
          DS<span className="text-[#02BDEA]">DIGIT</span><span>ALZ</span>
        </div>
        <div className="flex justify-between items-center p-5"></div>

        <div className="flex flex-col gap-1 justify-center relative">
          <div className="bg-black rounded px-4 py-0.5"></div>
          <div className="bg-black rounded px-4 py-0.5"></div>
          <div className="bg-black rounded px-4 py-0.5"></div>
          {/* <img src={hamburger} alt="" /> */}
        </div>
      </div>
      {/* <div className="absolute right-5 top-15 font-semibold bg-white rounded-2xl px-10 py-6 shadow-2xl leading-10">
            <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">Home</p>
            <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">About</p>
            <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">Services</p>
            <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">Portfolio</p>
            <p className="cursor-pointer hover:text-sky-400  active:text-sky-500">Contact</p>
          </div> */}
    </section>
  );
}
