import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Palette, Sparkles, Layers, Cpu, Search, Server, Database, Workflow } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Intro() {
  const { isDarkMode } = useTheme();

 const capabilities = [
  { name: "Product Strategy", icon: <Compass size={14} /> },
  { name: "UI/UX Design", icon: <Palette size={14} /> },
  { name: "Prototyping", icon: <Layers size={14} /> },
  { name: "Design Systems", icon: <Sparkles size={14} /> },
  { name: "User Research", icon: <Search size={14} /> },
  { name: "Frontend Development", icon: <Cpu size={14} /> },
  { name: "Backend Engineering", icon: <Server size={14} /> },
  { name: "Database Architecture", icon: <Database size={14} /> },
  { name: "API & System Integration", icon: <Workflow size={14} /> },
];

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="intro"
      className={`relative py-16 sm:py-20 px-6 sm:px-12 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-[#fafaf9] text-black"
      }`}
    >
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] rounded-full blur-[160px] opacity-15 ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center text-center">
        {/* Flanked Tag: — Hellooo! — */}
        <motion.div
          {...scrollReveal}
          className="flex items-center gap-4 mb-8 sm:mb-10"
        >
          <div
            className={`w-12 sm:w-20 h-[1px] ${
              isDarkMode ? "bg-white/20" : "bg-black/20"
            }`}
          />
          <span className="font-editorial text-2xl sm:text-3xl text-gray-400 italic">
            Hellooo!
          </span>
          <div
            className={`w-12 sm:w-20 h-[1px] ${
              isDarkMode ? "bg-white/20" : "bg-black/20"
            }`}
          />
        </motion.div>

        {/* Prominent Positioning Headline */}
        <motion.h2
          {...scrollReveal}
          className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.3] max-w-3xl"
        >
          <span>I'm Daniel. I help startups and enterprises to establish an </span>
          <span className="font-editorial italic font-normal text-3xl sm:text-5xl md:text-6xl text-white dark:text-white">
            emotional connection
          </span>
          <span> between their products and happy, engaged customers.</span>
        </motion.h2>

        {/* Capabilities Pills Cloud */}
        <motion.div
          {...scrollReveal}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-2xl"
        >
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-default ${
                isDarkMode
                  ? "bg-white/[0.03] border-white/10 hover:border-white/30 text-gray-300 hover:text-white"
                  : "bg-black/[0.03] border-black/10 hover:border-black/30 text-gray-700 hover:text-black"
              }`}
            >
              <span className="text-gray-400">{cap.icon}</span>
              <span>{cap.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to explore recent work */}
        <motion.div {...scrollReveal} className="mt-12">
          <a
            href="#work"
            className={`inline-flex items-center gap-2 text-sm font-semibold tracking-tight group transition-colors ${
              isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
            }`}
          >
            <span>See Recent Work</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
