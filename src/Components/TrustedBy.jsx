import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiSupabase, 
  SiVercel, 
  SiNetlify,
  SiMongodb, 
  SiExpress, 
  SiPostgresql, 
  SiFramer, 
  SiAdobexd 
} from 'react-icons/si';

export default function TrustedBy() {
  const { isDarkMode } = useTheme();

  const brands = [
  // Design & Prototyping
  { name: "Figma", tag: "Design Systems", icon: <FaFigma /> },
  { name: "Adobe XD", tag: "UI/UX Design", icon: <SiAdobexd /> },
  
  // Frontend & Animation
  { name: "React", tag: "Frontend", icon: <FaReact /> },
  { name: "Next.js", tag: "Framework", icon: <SiNextdotjs /> },
  { name: "TypeScript", tag: "Language", icon: <SiTypescript /> },
  { name: "Tailwind CSS", tag: "Styling", icon: <SiTailwindcss /> },
  { name: "Framer Motion", tag: "Animation", icon: <SiFramer /> },

  // Backend & APIs
  { name: "Node.js", tag: "Backend", icon: <FaNodeJs /> },
  { name: "Express", tag: "API Framework", icon: <SiExpress /> },

  // Databases & BaaS
  { name: "MongoDB", tag: "NoSQL Database", icon: <SiMongodb /> },
  { name: "PostgreSQL", tag: "SQL Database", icon: <SiPostgresql /> },
  { name: "Supabase", tag: "BaaS & Database", icon: <SiSupabase /> },

  // Cloud & Deployment
  { name: "Vercel", tag: "Cloud", icon: <SiVercel /> },
  { name: "Netlify", tag: "Hosting & CI/CD", icon: <SiNetlify /> },
];

  return (
    <section
      className={`py-12 sm:py-16 overflow-hidden border-y transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#050505] border-white/5 text-white"
          : "bg-white border-black/5 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 mb-6 sm:mb-8 text-center">
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Crafting Experiences With
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="flex animate-marquee-left gap-4 sm:gap-6 py-2">
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full border transition-colors ${
                isDarkMode
                  ? "bg-white/[0.02] border-white/10 hover:border-white/20 text-gray-300 hover:text-white"
                  : "bg-black/[0.02] border-black/10 hover:border-black/20 text-gray-700 hover:text-black"
              }`}
            >
              {brand.icon && (
                <span className="text-base text-gray-400">{brand.icon}</span>
              )}
              <span className="text-sm font-semibold tracking-tight">
                {brand.name}
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isDarkMode
                    ? "bg-white/5 text-gray-400"
                    : "bg-black/5 text-gray-500"
                }`}
              >
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

