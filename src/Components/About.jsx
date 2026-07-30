"use client";

import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { HiCode, HiChip, HiServer, HiSparkles } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export default function About() {
  const { isDarkMode } = useTheme();

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true, amount: 0.1 },
  };

 const skillCategories = [
  {
    title: "Basic",
    icon: <HiCode />,
    skills: ["Figma", "Html", "Css", "Javascript", "Typescript", "Excel", "PowerBI"],
  },
  {
    title: "Framework/Library",
    icon: <HiChip />,
    skills: ["React.js", "Vue.js", "Next.js", "Bootstrap", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: <HiServer />,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Extra",
    icon: <HiSparkles />,
    skills: ["Git", "Github", "Adobe XD", "Wordpress", "Photoshop"],
  },
];
  return (
    <section
      id="about"
      className={`relative py-24 px-6 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute inset-0 ${isDarkMode ? "opacity-[0.05]" : "opacity-[0.35]"}`}
          style={{
            backgroundImage: `radial-gradient(${
              isDarkMode ? "#ffffff" : "#94a3b8"
            } 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        <div
          className={`absolute top-1/3 -right-40 w-[28rem] h-[28rem] blur-[140px] rounded-full opacity-10 ${
            isDarkMode ? "bg-yellow-500" : "bg-sky-400"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wider uppercase ${
              isDarkMode
                ? "bg-white/5 border border-white/10 text-yellow-500"
                : "bg-sky-50 border border-sky-100 text-sky-600"
            }`}
            {...scrollReveal}
          >
            Get to know me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            {...scrollReveal}
          >
            About{" "}
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
              Me
            </span>
          </motion.h2>
        </header>

        {/* Biography Article */}
        <article className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <motion.p
            className={`text-lg md:text-xl font-semibold ${
              isDarkMode ? "text-gray-200" : "text-slate-800"
            }`}
            {...scrollReveal}
          >
            I am a Product (UI/UX) Designer and Software Engineer
          </motion.p>
          <motion.p
            className={`text-base leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-slate-600"
            }`}
            {...scrollReveal}
          >
            I am a multidisciplinary Product Designer and Software Engineer.
            My core expertise lies in designing high-fidelity, accessible
            interfaces and translating them into clean, high-performing code.
            I leverage data-backed insights to solve complex product
            challenges, ensuring that every dynamic application I build
            delivers a seamless user experience and measurable business
            value.
          </motion.p>
        </article>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.article
              key={idx}
              {...scrollReveal}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                isDarkMode
                  ? "bg-white/[0.03] border-white/10 hover:border-yellow-500/40 hover:bg-white/[0.05]"
                  : "bg-white border-slate-200 hover:border-sky-400/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/70"
              }`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-6 transition-colors ${
                  isDarkMode
                    ? "bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/15"
                    : "bg-sky-50 text-sky-600 group-hover:bg-sky-100"
                }`}
              >
                {cat.icon}
              </div>

              <h3 className="text-lg font-bold mb-5">{cat.title}</h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      isDarkMode
                        ? "bg-white/5 text-gray-300 border border-white/10"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Experience & Download Footer */}
        <div className="mt-24 flex flex-col items-center gap-10">
          <motion.div
            className={`relative max-w-3xl text-center p-8 md:p-10 rounded-3xl border ${
              isDarkMode
                ? "bg-white/[0.03] border-white/10"
                : "bg-white border-slate-200 shadow-sm"
            }`}
            {...scrollReveal}
          >
            <div
              className={`flex items-center justify-center w-11 h-11 rounded-full text-xl mx-auto mb-5 ${
                isDarkMode
                  ? "bg-yellow-500/10 text-yellow-500"
                  : "bg-sky-50 text-sky-600"
              }`}
            >
              <HiOutlineChatBubbleBottomCenterText />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My Experience
            </h3>
            <p
              className={`leading-relaxed italic ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              "As a Software Engineer and Product Designer, I bridge the gap
              between complex logic and intuitive UX. From architecting the
              app flow with modern tools like Figma to engineering
              high-performance interfaces with libraries like React, I
              transform high-fidelity Figma prototypes into scalable,
              user-centered applications that drive engagement."
            </p>
          </motion.div>

          {/* <motion.a
            href="Sanu_Daniel_CV.pdf"
            download="Sanu_Daniel_CV.pdf"
            className={`group flex items-center gap-3 px-9 py-4 rounded-full font-bold transition-all ${
              isDarkMode
                ? "bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.6)]"
                : "bg-sky-600 text-white hover:bg-sky-700 hover:shadow-[0_0_30px_-5px_rgba(2,132,199,0.5)]"
            }`}
            {...scrollReveal}
            whileHover={{ scale: 1.05 }}
          >
            Download CV
            <IoDownloadOutline className="text-2xl group-hover:translate-y-1 transition-transform" />
          </motion.a> */}
        </div>
      </div>
    </section>
  );
}