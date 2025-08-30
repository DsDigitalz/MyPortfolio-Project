import React from "react";
import { motion } from "framer-motion";
import { FaStreetView } from "react-icons/fa6";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

// Define variants for the main container to stagger children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of child elements
    },
  },
};

// Define variants for the individual portfolio cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`portfolio1 w-100% pt-10 pb-30 flex flex-col items-center ${
        isDarkMode
          ? "bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-purple-100 via-teal-50 to-white text-black"
      }`}
      id="portfolio"
    >
      <div className="mt-10">
        <motion.h1
          className={`text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My{" "}
          <span className={isDarkMode ? "text-[#FFD700]" : "text-[#02BDEA]"}>
            Projects
          </span>
        </motion.h1>

        <motion.div
          className="portfolio lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className={`mt-7 w-[332px] pb-3 mx-auto flex justify-center shadow-2xl rounded-2xl hover:scale-103 hover:transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 hover:shadow-zinc-700"
                : "bg-white hover:shadow-sky-200"
            }`}
            variants={cardVariants}
          >
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div
                className={`shadow-2xl p-1 w-full rounded-t-2xl ${
                  isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
                }`}
              >
                <div>
                  <img
                    src="homehaven.png"
                    alt=""
                    className="rounded-t-2xl w-full h-[200px]"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 items-center p-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  UX Case Study
                </h1>
                <p
                  className={`text-center w-[85%] text-[15px] ${
                    isDarkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Designed a real estate ux case study highlighting user
                  research, wireframes, and prototypes
                </p>
                <button
                  className={`rounded px-10 py-1.5 cursor-pointer flex items-center gap-3 justify-center ${
                    isDarkMode
                      ? "bg-[#D3AF37] text-black active:bg-yellow-500"
                      : "bg-[#02BDEA] text-white active:bg-[#50cbea]"
                  }`}
                >
                  <a
                    href="https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?node-id=420-1261&t=6xb14krBDy2q8LSU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView
                      className={`text-[24px] rounded-full p-1 ${
                        isDarkMode ? "bg-amber-300" : "bg-sky-300"
                      }`}
                    />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={`mt-7 w-[332px] pb-3 mx-auto flex justify-center shadow-2xl rounded-2xl hover:scale-103 hover:transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 hover:shadow-zinc-700"
                : "bg-white hover:shadow-sky-200"
            }`}
            variants={cardVariants}
          >
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div
                className={`shadow-2xl p-1 w-full rounded-t-2xl ${
                  isDarkMode ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              >
                <div>
                  <img
                    src="banner.jpg"
                    alt=""
                    className="rounded-t-2xl w-[332px] h-[200px]"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 items-center p-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Corporate Web Design
                </h1>
                <p
                  className={`text-center w-[85%] text-[15px] ${
                    isDarkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Designed a corporate website UI design with a focus on
                  simplicity and professionalism
                </p>
                <button
                  className={`rounded px-10 py-1.5 cursor-pointer flex items-center gap-3 justify-center ${
                    isDarkMode
                      ? "bg-[#D3AF37] text-black active:bg-yellow-500"
                      : "bg-[#02BDEA] text-white active:bg-[#50cbea]"
                  }`}
                >
                  <a
                    href="https://www.figma.com/proto/ea3BmYTbhJQPRs5TX0zBOl/Corporate-Website?node-id=239-296&t=ho1Nutae5wjK12m3-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=273%3A841"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView
                      className={`text-[24px] rounded-full p-1 ${
                        isDarkMode ? "bg-amber-300" : "bg-sky-300"
                      }`}
                    />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`mt-7 w-[332px] pb-3 mx-auto flex justify-center shadow-2xl rounded-2xl hover:scale-103 hover:transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 hover:shadow-zinc-700"
                : "bg-white hover:shadow-sky-200"
            }`}
            variants={cardVariants}
          >
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div
                className={`shadow-2xl p-1 w-full rounded-t-2xl ${
                  isDarkMode ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              >
                <div>
                  <img
                    src="estate.png"
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 items-center p-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <p className="text-zinc-500">UI/UX DESIGN</p>
                <h1 className="font-semibold text-2xl text-[18px]">
                  Real Estate App Design
                </h1>
                <p
                  className={`text-center w-[85%] text-[15px] ${
                    isDarkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Designed a real estate app, providing a seamless platform for
                  buyers, sellers, and agents.
                </p>
                <button
                  className={`rounded px-10 py-1.5 cursor-pointer flex items-center gap-3 justify-center ${
                    isDarkMode
                      ? "bg-[#D3AF37] text-black active:bg-yellow-500"
                      : "bg-[#02BDEA] text-white active:bg-[#50cbea]"
                  }`}
                >
                  <a
                    href="https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?page-id=135%3A760&node-id=135-761&viewport=1261%2C587%2C0.12&t=Qn2qqzVtwL4ylQBt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=135%3A761&show-proto-side  bar=1"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView
                      className={`text-[24px] rounded-full p-1 ${
                        isDarkMode ? "bg-amber-300" : "bg-sky-300"
                      }`}
                    />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`mt-7 w-[332px] pb-3 mx-auto flex justify-center shadow-2xl rounded-2xl hover:scale-103 hover:transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 hover:shadow-zinc-700"
                : "bg-white hover:shadow-sky-200"
            }`}
            variants={cardVariants}
          >
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div
                className={`shadow-2xl p-1 w-full rounded-t-2xl ${
                  isDarkMode ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              >
                <div>
                  <img
                    src="Cover.png"
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 items-center p-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <p className="text-zinc-500">FRONT-END WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px] text-center">
                  ProCleaning Services Website
                </h1>
                <p
                  className={`text-center w-[85%] text-[15px] ${
                    isDarkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Developed a responsive front-end cleaning services website
                  with React.JS and Tailwind
                </p>
                <button
                  className={`rounded px-10 py-1.5 cursor-pointer flex items-center gap-3 justify-center ${
                    isDarkMode
                      ? "bg-[#D3AF37] text-black active:bg-yellow-500"
                      : "bg-[#02BDEA] text-white active:bg-[#50cbea]"
                  }`}
                >
                  <a
                    href="https://procleaningservices.netlify.app/"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView
                      className={`text-[24px] rounded-full p-1 ${
                        isDarkMode ? "bg-amber-300" : "bg-sky-300"
                      }`}
                    />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`mt-7 w-[332px] pb-3 mx-auto flex justify-center shadow-2xl rounded-2xl hover:scale-103 hover:transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 hover:shadow-zinc-700"
                : "bg-white hover:shadow-sky-200"
            }`}
            variants={cardVariants}
          >
            <div className="w-full flex flex-col items-center gap-2 leading-7">
              <div
                className={`shadow-2xl p-1 w-full rounded-t-2xl ${
                  isDarkMode ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              >
                <div>
                  <img
                    src="travel.png"
                    alt=""
                    className="rounded-t-2xl w-full h-50"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 items-center p-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <p className="text-zinc-500">FRONT-END WEB DEVELOPMENT</p>
                <h1 className="font-semibold text-2xl text-[18px] text-center">
                  Travel Website Landing Page(Desktop Screen Only)
                </h1>
                <p
                  className={`text-center w-[85%] text-[15px] ${
                    isDarkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  Designed a travel website with HTML and CSS
                </p>
                <button
                  className={`rounded px-10 py-1.5 cursor-pointer flex items-center gap-3 justify-center ${
                    isDarkMode
                      ? "bg-[#D3AF37] text-black active:bg-yellow-400"
                      : "bg-[#02BDEA] text-white active:bg-[#50cbea]"
                  }`}
                >
                  <a
                    href="https://jadootrav.netlify.app/"
                    className="flex items-center gap-3"
                  >
                    View
                    <FaStreetView
                      className={`text-[24px] rounded-full p-1 ${
                        isDarkMode ? "bg-amber-300" : "bg-sky-300"
                      }`}
                    />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
