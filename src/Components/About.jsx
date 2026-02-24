"use client";

import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import {
  HiCode,
  HiChip,
  // HiLibrary,
  // HiDatabase,
  // HiTerminal,
  HiSparkles,
} from "react-icons/hi";

export default function About() {
  const { isDarkMode } = useTheme();

  // Animation variants: Fade + Slide Up for scroll effect
  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true, amount: 0.1 },
  };

  // is tailwind a frontend framework?
  // ye
  const skillCategories = [
    {
      title: "Basic",
      icon: <HiCode />,
      skills: ["Figma", "Html", "Css", "Javascript", "Typescript"],
    },
    {
      title: "Framework/Library",
      icon: <HiChip />,
      skills: ["React.js", "Vue.js", "Next.js", "Bootstrap", "TailwindCSS"],
    },
    // { title: "Library", icon: <HiLibrary />, skills: ["jQuery", "React.js"] },
    // {
    //   title: "Backend",
    //   icon: <HiTerminal />,
    //   skills: ["Node.js", "Express.js"],
    // },
    // { title: "Database", icon: <HiDatabase />, skills: ["MySQL", "MongoDB"] },
    {
      title: "Extra",
      icon: <HiSparkles />,
      skills: ["Git", "Github", "Adobe XD", "Wordpress", "Photoshop"],
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            {...scrollReveal}
          >
            About{" "}
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
              Me
            </span>
          </motion.h2>
          <motion.div
            className={`h-1.5 w-20 mx-auto mt-4 rounded-full ${isDarkMode ? "bg-yellow-500" : "bg-sky-500"}`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1 }}
          />
        </header>

        {/* Biography Article */}
        <article className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <motion.p
            className={`text-lg md:text-xl font-medium ${isDarkMode ? "text-gray-300" : "text-slate-700"}`}
            {...scrollReveal}
          >
            I am a Product Designer and Front-end Engineer based in Nigeria with
            a background in Graphic Design.
          </motion.p>
          <motion.p
            className={`text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
            {...scrollReveal}
          >
            I focus on accessibility, solving complex problems, and delivering
            high-quality digital solutions. Whether it's a dynamic web
            application or a seamless user experience, I am dedicated to
            creating impactful work through continuous learning and industry
            trends.
          </motion.p>
        </article>

        {/* Skills Grid - Integrated from Image Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.article
              key={idx}
              {...scrollReveal}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                isDarkMode
                  ? "bg-zinc-900/50 border-white/10 hover:border-yellow-500/50 shadow-2xl shadow-black"
                  : "bg-white border-slate-200 hover:border-sky-500/50 shadow-xl shadow-slate-200"
              }`}
            >
              <div
                className={`text-3xl mb-4 ${isDarkMode ? "text-yellow-500" : "text-sky-500"}`}
              >
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 border-b pb-2 border-current/10">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className={`flex items-center gap-3 text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? "bg-yellow-500" : "bg-sky-500"}`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Experience & Download Footer */}
        <div className="mt-20 flex flex-col items-center gap-10">
          <motion.div className="max-w-3xl text-center" {...scrollReveal}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My Experience
            </h3>
            <p
              className={`leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
            >
              "As a Frontend Engineer and Product Designer, I bridge the gap
              between complex logic and intuitive UX. From architecting the app
              flow with modern tools like Figma to engineering high-performance
              interfaces with libraries like React, I transform high-fidelity
              Figma prototypes into scalable, user-centered applications that
              drive engagement."
            </p>
          </motion.div>

          <motion.a
            href="Dan_CV.pdf"
            download="Dan-CV.pdf"
            className={`group flex items-center gap-3 px-10 py-4 rounded-full font-bold transition-all shadow-lg ${
              isDarkMode
                ? "bg-yellow-500 text-black hover:bg-yellow-400"
                : "bg-sky-500 text-white hover:bg-sky-600"
            }`}
            {...scrollReveal}
            whileHover={{ scale: 1.05 }}
          >
            Download CV
            <IoDownloadOutline className="text-2xl group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
