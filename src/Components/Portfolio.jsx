import React from "react";
import portImage from "./public/portImage.png";
// import banner from "./public/Banner.png";
import homehaven from "./public/homehaven.png";
import banner from "./public/banner.jpg";
import dashboard from "./public/dashboard.jpg";
import estate from "./public/estate.png";
import food from "./public/food.png";
import ecommerce from "./public/ecommerce.png";
import travel from "./public/travel.png";
import { FaStreetView } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <section
      className="portfolio1 w-100% pt-10 pb-20 flex flex-col items-center"
      id="portfolio"
    >
      <div className="mt-10">
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          My <span className="text-[#02BDEA]">Portfolio</span>
        </h1>

        <div className="portfolio lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-10">
          <div className="mt-7 w-[332px] bg-white pb-3 mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div className="shadow-2xl p-1 w-full bg-zinc-100 rounded-t-2xl">
                <div>
                  <img
                    src={homehaven}
                    alt=""
                    className="rounded-t-2xl w-full h-[200px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  UX Case Study
                </h1>
                <p className="text-center w-[85%] text-[15px]">
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes to enhance user
                  experience and engagement.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea] flex items-center gap-3 justify-center">
                  <a
                    href="https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?node-id=420-1261&t=6xb14krBDy2q8LSU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView className="text-[24px] bg-sky-300 rounded-full p-1" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white pb-3 mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div className="shadow-2xl p-1 w-full bg-zinc-100 rounded-t-2xl">
                <div>
                  <img
                    src={banner}
                    alt=""
                    className="rounded-t-2xl w-[332px] h-[200px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Corporate Web Design
                </h1>
                <p className="text-center w-[85%] text-[15px]">
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes to enhance user
                  experience and engagement.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea] flex items-center gap-3 justify-center">
                  <a
                    href="https://www.figma.com/proto/ea3BmYTbhJQPRs5TX0zBOl/Corporate-Website?node-id=239-296&t=ho1Nutae5wjK12m3-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=273%3A841"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView className="text-[24px] bg-sky-300 rounded-full p-1" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white pb-3 mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div className="shadow-2xl p-1 w-full bg-zinc-100 rounded-t-2xl">
                <div>
                  <img
                    src={estate}
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Real Estate App Design
                </h1>
                <p className="text-center w-[85%] text-[15px]">
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes to enhance user
                  experience and engagement.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea] flex items-center gap-3 justify-center">
                  <a href=" https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?page-id=135%3A760&node-id=604-379&starting-point-node-id=135%3A761&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1&t=QQllQ0r9M5vF4LQM-1"className="flex items-center gap-3">
                    View
                    <FaStreetView className="text-[24px] bg-sky-300 rounded-full p-1" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white pb-3 mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div className="shadow-2xl p-1 w-full bg-zinc-100 rounded-t-2xl">
                <div>
                  <img
                    src={food}
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">FRONT-END WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Restaurant Food Land Page
                </h1>
                <p className="text-center w-[85%] text-[15px]">
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes to enhance user
                  experience and engagement.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea] flex items-center gap-3 justify-center">
                  <a href="https://foodienet.netlify.app/" className="flex items-center gap-3">
                    View
                    <FaStreetView className="text-[24px] bg-sky-300 rounded-full p-1" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white pb-3 mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div className="shadow-2xl p-1 w-full bg-zinc-100 rounded-t-2xl">
                <div>
                  <img
                    src={ecommerce}
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">FRONT-END WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Ecommerce Website
                </h1>
                <p className="text-center w-[85%] text-[15px]">
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes to enhance user
                  experience and engagement.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea] flex items-center gap-3 justify-center">
                  <a href="">
                    View
                    <FaStreetView className="text-[24px] bg-sky-300 rounded-full p-1" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 w-[332px] bg-white pb-3 mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div className="shadow-2xl p-1 w-full bg-zinc-100 rounded-t-2xl">
                <div>
                  <img
                    src={travel}
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">FRONT-END WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Travel Website Landing Page
                </h1>
                <p className="text-center w-[85%] text-[15px]">
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes to enhance user
                  experience and engagement.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea] flex items-center gap-3 justify-center">
                 <a href="https://jadootrav.netlify.app/" className="flex items-center gap-3">

                  View
                  <FaStreetView className="text-[24px] bg-sky-300 rounded-full p-1" />
                </a>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={banner} alt="" className="rounded-t-2xl h-[21.5vh]" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px] text-center">
                  Corporate UI Design
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea]">
                  View
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Real Estate App Design
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea]">
                  View
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">FRONTEND WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Travel Website
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea]">
                  View
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">FRONTEND WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                 Ecommerce Website
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea]">
                  View
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-7 w-[332px] bg-white h-[446px] mx-auto flex justify-center shadow-2xl  rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300">
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div>
                <img src={portImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center p-3">
                <p className="text-zinc-500">FRONTEND WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Blog Website
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor provident exercitationem quae.
                </p>
                <button className="bg-[#02BDEA] text-white rounded px-10 py-1.5 cursor-pointer active:bg-[#50cbea]">
                  View
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
