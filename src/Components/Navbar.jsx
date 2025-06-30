import React from "react";
import hamburger from "./public/hamburger.png";

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

      <div className="flex justify-between px-10 py-5">
        <div className="font-bold">DSDIGITALZ</div>
        <div className="flex justify-between items-center p-5"></div>
        <div>
          <img src={hamburger} alt="" />
        </div>
      </div>
    </section>
  );
}
