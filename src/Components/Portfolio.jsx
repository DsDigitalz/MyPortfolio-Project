"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaStreetView } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

const portfolioData = [
  {
    imgSrc: "homehaven.png",
    category: "UI/UX DESIGN",
    title: "UX Case Study",
    description:
      "Designed a real estate UX case study highlighting user research, wireframes, and prototypes",
    link: "https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?node-id=420-1261",
  },
  {
    imgSrc: "banner.jpg",
    category: "UI/UX DESIGN",
    title: "Corporate Web Design",
    description:
      "Designed a corporate website UI design with a focus on simplicity and professionalism",
    link: "https://www.figma.com/proto/ea3BmYTbhJQPRs5TX0zBOl/Corporate-Website?node-id=239-296",
  },
  {
    imgSrc: "estate.png",
    category: "UI/UX DESIGN",
    title: "Real Estate App Design",
    description:
      "Designed a real estate app, providing a seamless platform for buyers, sellers, and agents.",
    link: "https://www.figma.com/proto/EFRlnaxtR3hojBTzLvN5X7/UIUX-case-study?page-id=135%3A760&node-id=135-761",
  },
  {
    imgSrc: "audiophile.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "Audiophile Ecommerce Website",
    description:
      "Built a fully functional Audiophile e-commerce web app using Next.js and TailwindCSS",
    link: "https://audicommerce.netlify.app/",
  },
  {
    imgSrc: "ticketrax.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "Ticket Management Web Application",
    description:
      "A full-featured ticket management system built with VueJS and TailwindCSS",
    link: "https://ticketrax-vue.netlify.app/",
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
    imgSrc: "moviestrap.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "Moviestrap Landing Page",
    description: "Developed a travel website with HTML, CSS and Bootstrap",
    link: "https://moviestrap.netlify.app/",
  },
  {
    imgSrc: "techimg.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "Event Website Page",
    description:
      "Designed a travel website with React, TailwindCSS and Framer Motion",
    link: "https://monkevent.netlify.app/",
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".card");
      const cardWidth = card.offsetWidth + 16; // 16px gap
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".card");
      const cardWidth = card.offsetWidth + 16;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`portfolio1 w-full pt-10 lg:pt-20 pb-20 flex flex-col items-center ${
        isDarkMode
          ? "bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-purple-100 via-teal-50 to-white text-black"
      }`}
      id="portfolio"
    >
      <motion.h1
        className={`text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center mb-8 ${
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

      <div className="relative w-full max-w-[1140px] mx-auto flex items-center">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 h-10 w-10 bg-gray-500/70 hover:bg-gray-600/70 rounded-full flex items-center justify-center text-white"
        >
          &#8249;
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-2 py-4 w-full"
        >
          {portfolioData.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`card relative h-70 min-w-[260px] sm:min-w-[280px]   rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ${
                  isDarkMode
                    ? "bg-zinc-900 hover:shadow-zinc-700"
                    : "bg-white hover:shadow-sky-200"
                }`}
                onClick={() => handleCardClick(index)}
              >
                {/* Overlay */}
                <motion.div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center rounded-2xl transition-opacity duration-300 ${
                    isDarkMode
                      ? "bg-black/70 text-white"
                      : "bg-white/80 text-black"
                  } ${isActive ? "opacity-100" : "opacity-0"}`}
                  variants={overlayVariants}
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p className="text-zinc-300">{project.category}</p>
                  <h1 className="font-semibold text-lg">{project.title}</h1>
                  <p className="text-[14px] mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 rounded px-6 py-1.5 flex items-center gap-2 justify-center ${
                      isDarkMode
                        ? "bg-[#D3AF37] text-black hover:bg-yellow-400"
                        : "bg-[#02BDEA] text-white hover:bg-sky-400"
                    }`}
                  >
                    View <FaStreetView className="text-[20px]" />
                  </a>
                </motion.div>

                {/* Image */}
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 h-10 w-10 bg-gray-500/70 hover:bg-gray-600/70 rounded-full flex items-center justify-center text-white"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
