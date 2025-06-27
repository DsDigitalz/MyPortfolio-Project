import React from "react";
import portImage from "./public/portImage.png";

export default function Portfolio() {
  return (
    <section className="portfolio w-100% pt-10 pb-20 flex flex-col items-center">
      <div className="mt-10">
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          My <span className="text-[#02BDEA]">Portfolio</span>
        </h1>

        <div className="lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-10">
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Product Admin Dashboard
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Product Admin Dashboard
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Product Admin Dashboard
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Product Admin Dashboard
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Product Admin Dashboard
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Product Admin Dashboard
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
