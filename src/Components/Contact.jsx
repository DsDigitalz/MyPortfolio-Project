import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
export default function Contact() {
  return (
    <section
      className="w-100% pt-10  flex flex-col justify-center bg-white relative lg:flex lg:flex-1"
      id="con"
    >
      <div className="mt-10">
        <div className="">
          <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
            Contact <span className="text-sky-300">Me</span>
          </h1>
          <div className=" bg-white shadow-2xl p-10 lg:px-30 shadow-sky-200 lg:flex lg:justify-center gap-[100px] lg:mt-10">
            <div className="lg:w-[50%] xl:w-[50%] 2xl:w-[40%] ">
              <div className="lg:w-[70%]">
                <h1 className="font-semibold text-2xl mt-5 mb-5 lg:mt-0">
                  Lets's Connect
                </h1>
                <p>
                  Have a project in mind or want to discuss potential
                  opportunities? I'd love to hear from you!
                </p>
              </div>
              <div className="flex flex-col mt-10 gap-5">
                <div className="flex gap-3">
                  <MdEmail className="mt-[2px] text-xl" />
                  <div>
                    <h1 className="text-zinc-500 text-[14px]">Email: </h1>
                    <p className="font-semibold">sanudaniel46@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-[2px]" />
                  <div>
                    <h1 className="text-zinc-500 text-[14px]">Phone No:</h1>
                    <p className="font-semibold">+2349137846680</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <IoLocationSharp className="mt-[2px] text-xl" />
                  <div>
                    <h1 className="text-zinc-500 text-[14px]">Location:</h1>
                    <p className="font-semibold">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
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
            </div>

            <form className="mt-15 flex flex-col border-zinc-400 gap-3 sm:w-[50%] md:w-[70%] lg:w-[50%] lg:mt-0 xl:w-[30%] 2xl:w-[20%] ">
              <label htmlFor="">
                Name <span className="text-sky-300">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
              />
              <label htmlFor="">
                Email <span className="text-sky-300">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
              />
              <label htmlFor="">Subject </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
              />
              <label htmlFor="">Message </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
              ></textarea>
              <div className="bg-[#02BDEA] p-3 text-white font-semibold gap-3 flex justify-center rounded-full w-[50%] mt-10 cursor-pointer active:bg-[#50cbea]">
                Submit
                <BsSend className="text-[24px] bg-sky-300 rounded-full p-1" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
