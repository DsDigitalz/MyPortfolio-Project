import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { FaFigma, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Hero() {
  const { isDarkMode } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  // Slideshow frames for the inline pill
  const mockupSlides = [
    { src: "images/skilleconomy/skilleconomy-main.jpg", alt: "Skilleconomy Platform" },
    { src: "images/Dashboard-Home.png", alt: "Shaarix App" },
    { src: "images/SFeed - Home page Screen.png", alt: "Skileman App" },
    { src: "images/skilleconomy/skilleconomy-services.jpg", alt: "Service Catalogue" },
    { src: "images/skilleconomy/skilleconomy-academy.jpg", alt: "Skills Academy" },
    { src: "skileman/Frame 1228.png", alt: "Skileman Platform" },
    { src: "Dashboard2.png", alt: "Betternship App" },
    { src: "Dashboard.png", alt: "Healthcare App" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockupSlides.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, mockupSlides.length]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tickerIcons = [
    { icon: <FaFigma className="text-violet-400" />, name: "Figma" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
  ];

  return (
    <section
      id="home"
      className={`relative pt-36 sm:pt-44 pb-14 md:pb-20 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-[#fafaf9] text-black"
      }`}
    >
      {/* Editorial delicate background grain and soft lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "editorial-grain opacity-40" : "editorial-grain-light opacity-50"
          }`}
        />
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[50rem] h-[20rem] rounded-full blur-[140px] pointer-events-none opacity-20 ${
            isDarkMode ? "bg-white/10" : "bg-black/5"
          }`}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10 flex flex-col items-center text-center">
        {/* Top Status Pill: HIRE ME 👋🏽 */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-transform hover:scale-105 border ${
              isDarkMode
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "bg-black text-white border-black shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            }`}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>HIRE ME 👋🏽</span>
          </a>
        </motion.div>

        {/* Large Signature Animated Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight leading-[1.12] sm:leading-[1.1] selection:bg-white selection:text-black">
            <span>Designing Products</span>

            {/* Inline Tilted Slideshow Pill */}
            <span
              className={`inline-flex items-center justify-center align-middle mx-2 sm:mx-3.5 my-1 w-[68px] sm:w-[96px] md:w-[124px] h-[34px] sm:h-[48px] md:h-[60px] rounded-full overflow-hidden border shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 relative ${
                isDarkMode
                  ? "bg-zinc-900 border-white/20 shadow-black/80"
                  : "bg-zinc-100 border-black/15 shadow-black/10"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={mockupSlides[currentSlide].src}
                  alt={mockupSlides[currentSlide].alt}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </span>

            <span className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
              That Users
            </span>

            {/* Inline Tilted Ticker Pill */}
            <span
              className={`inline-flex items-center align-middle mx-2 sm:mx-3.5 my-1 w-[72px] sm:w-[102px] md:w-[130px] h-[34px] sm:h-[48px] md:h-[60px] rounded-full overflow-hidden border shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 relative ${
                isDarkMode
                  ? "bg-zinc-900 border-white/20 shadow-black/80"
                  : "bg-zinc-100 border-black/15 shadow-black/10"
              }`}
            >
              <div className="flex items-center gap-3 animate-marquee-left px-2">
                {[...tickerIcons, ...tickerIcons].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-base sm:text-xl flex-shrink-0"
                    title={item.name}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </span>

            <span className="font-editorial font-normal italic tracking-normal ml-1">
              Love
            </span>
            <br className="hidden sm:inline" />
            <span className="block sm:inline sm:mt-1 font-bold">
              and Businesses Grow With
            </span>
          </h1>
        </motion.div>

        {/* Short Professional Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className={`mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Helping businesses turn ambitious ideas into user-centered products that
          are functional, scalable, and built for growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-200 shadow-md shadow-white/5 hover:scale-[1.02]"
                : "bg-black text-white hover:bg-gray-800 shadow-md shadow-black/10 hover:scale-[1.02]"
            }`}
          >
            <span>Contact Me</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>

          <button
            onClick={() => scrollToSection("work")}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              isDarkMode
                ? "bg-white/[0.04] border-white/15 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30"
                : "bg-black/[0.03] border-black/15 text-gray-700 hover:text-black hover:bg-black/5 hover:border-black/30"
            }`}
          >
            <span>View Projects</span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
