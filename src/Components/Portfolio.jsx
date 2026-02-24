"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaStreetView, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

const portfolioData = [
  {
    imgSrc: "skileman.png",
    category: "UI/UX DESIGN",
    title: "Skileman App",
    description:
      "Designed an end-to-end UX/UI design, translating the 'Moving Train' vision Jobbing platform into a high-fidelity interactive prototype using figma",
    link: "https://www.figma.com/design/Mjqf7qt1jZphxZQhDZRs12/Skileman-App?node-id=0-1&m=dev&t=YQyfjBP4Y5wMIB0X-1",
  },

  {
    imgSrc: "AI.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "AI FAQ/Lead Capture Bot",
    description:
      "Developed a high-performance, multi-tenant AI SaaS and embeddable chat widget focused on dynamic personalization and fluid user experience using React, TailwindCSS, and Framer Motion.",
    link: "https://helplyai.vercel.app/",
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
    title: "ProCleaning Services Landing Page",
    description:
      "Developed a responsive front-end cleaning services website with React.JS and Tailwind",
    link: "https://procleaningservices.netlify.app/",
  },

  {
    imgSrc: "techimg.png",
    category: "FRONT-END WEB DEVELOPMENT",
    title: "Event Landing Page",
    description:
      "Designed a travel website with React, TailwindCSS and Framer Motion",
    link: "https://monkevent.netlify.app/",
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const sliderRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Animation Variant: Slide + Fade In
  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true, amount: 0.1 },
  };

  return (
    <section
      id="portfolio"
      className={`relative w-full py-20 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? "bg-[#0a0a0a] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div {...scrollReveal}>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured{" "}
              <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
                Projects
              </span>
            </h2>
            <p
              className={`mt-4 max-w-lg ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              A curated selection of my digital craftsmanship across UI/UX
              design and modern web development.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className={`p-4 rounded-full border transition-all ${
                isDarkMode
                  ? "border-white/10 hover:bg-white/5"
                  : "border-slate-200 hover:bg-slate-100"
              }`}
              aria-label="Scroll Left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-4 rounded-full border transition-all ${
                isDarkMode
                  ? "border-white/10 hover:bg-white/5"
                  : "border-slate-200 hover:bg-slate-100"
              }`}
              aria-label="Scroll Right"
            >
              <FaChevronRight />
            </button>
          </div>
        </header>

        {/* Project Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
          {...scrollReveal}
        >
          {portfolioData.map((project, index) => (
            <article
              key={index}
              className="group relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[3/3] sm:aspect-[4/3] rounded-3xl overflow-hidden snap-center cursor-pointer shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <figure className="w-full h-full">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </figure>

              {/* Sophisticated Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 bg-gradient-to-t ${
                  isDarkMode
                    ? "from-black via-black/80 to-black/50 "
                    : "from-white via-white/95 to-white/90 "
                } ${
                  hoveredIndex === index
                    ? "opacity-100"
                    : "opacity-0 md:opacity-0 lg:group-hover:opacity-100"
                }`}
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase mb-2 block ${
                      isDarkMode ? "text-yellow-500" : "text-sky-600"
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-6 line-clamp-4 ${
                      isDarkMode ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      isDarkMode
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "bg-sky-500 text-white hover:bg-sky-600"
                    }`}
                  >
                    Explore Project <FaStreetView className="text-lg" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
