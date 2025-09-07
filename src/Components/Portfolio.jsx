import React from "react";
import { motion } from "framer-motion";
import { FaStreetView } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

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

// Data array for portfolio items
const portfolioData = [
  {
    imgSrc: "homehaven.png",
    category: "UI/UX DESIGN",
    title: "UX Case Study",
    description:
      "Designed a real estate UX case study highlighting user research, wireframes, and prototypes",
    link: "https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?node-id=420-1261&t=6xb14krBDy2q8LSU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    imgSrc: "banner.jpg",
    category: "UI/UX DESIGN",
    title: "Corporate Web Design",
    description:
      "Designed a corporate website UI design with a focus on simplicity and professionalism",
    link: "https://www.figma.com/proto/ea3BmYTbhJQPRs5TX0zBOl/Corporate-Website?node-id=239-296&t=ho1Nutae5wjK12m3-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=273%3A841",
  },
  {
    imgSrc: "estate.png",
    category: "UI/UX DESIGN",
    title: "Real Estate App Design",
    description:
      "Designed a real estate app, providing a seamless platform for buyers, sellers, and agents.",
    link: "https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?page-id=135%3A760&node-id=135-761&viewport=1261%2C587%2C0.12&t=Qn2qqzVtwL4ylQBt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=135%3A761&show-proto-side%20bar=1",
  },
  {
    imgSrc: "Cover.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "ProCleaning Services Website",
    description:
      "Developed a responsive front-end cleaning services website with React.JS and Tailwind",
    link: "https://procleaningservices.netlify.app/",
  },
  {
    imgSrc: "travel.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "Travel Website Landing Page(Desktop Screen Only)",
    description: "Designed a travel website with HTML and CSS",
    link: "https://jadootrav.netlify.app/",
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`portfolio1 w-100% pt-10 lg:pt-20  pb-20 flex flex-col items-center ${
        isDarkMode
          ? "bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-purple-100 via-teal-50 to-white text-black"
      }`}
      id="portfolio"
    >
      <div>
        <motion.h1
          className={`text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
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
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
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
                      src={project.imgSrc}
                      alt={project.title}
                      className="rounded-t-2xl w-full h-[200px]"
                    />
                  </div>
                </div>
                <div
                  className={`flex flex-col gap-2 items-center p-3 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  <p className="text-zinc-500">{project.category}</p>
                  <h1 className="font-semibold text-2xl text-[18px]">
                    {project.title}
                  </h1>
                  <p
                    className={`text-center w-[85%] text-[15px] ${
                      isDarkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    {project.description}
                  </p>
                  <button
                    className={`rounded px-10 py-1.5 cursor-pointer flex items-center gap-3 justify-center ${
                      isDarkMode
                        ? "bg-[#D3AF37] text-black active:bg-yellow-500"
                        : "bg-[#02BDEA] text-white active:bg-[#50cbea]"
                    }`}
                  >
                    <a href={project.link} className="flex items-center gap-3">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
