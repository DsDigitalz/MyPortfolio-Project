import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";

const cards = [
  {
    icon: CgWebsite,
    title: "Responsive Web Design",
    description:
      "Ensuring that designs are adaptable across various devices and screen sizes for a consistent user experience. Crafting aesthetically pleasing interfaces that align with brand identity and enhance user engagement.",
  },
  {
    icon: MdOutlineAppSettingsAlt,
    title: "Mobile App Design",
    description:
      "Ensuring the app is optimized for various screen sizes and orientations, providing a seamless experience across devices. Crafting visually appealing interfaces that align with brand identity and enhance user engagement",
  },
  {
    icon: IoCodeSlash,
    title: "Web (Front-end) Development",
    description:
      "Creating responsive and interactive web applications that deliver seamless user experiences across all devices. By leveraging modern technologies such as HTML, CSS, and JavaScript libraries like React.",
  },
];

export default function TopServices() {
  const { isDarkMode } = useTheme();

  // Scroll animation: Combined Fade + Slide Up
  const scrollReveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="services"
      className={`py-20 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-[#0a0a0a]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Top{" "}
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
              Services
            </span>
          </motion.h2>
          <motion.div
            className={`h-1.5 w-24 mx-auto mt-4 rounded-full ${isDarkMode ? "bg-yellow-500" : "bg-sky-500"}`}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
          />
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.article
                key={index}
                {...scrollReveal}
                whileHover={{ y: -12 }}
                className={`relative group p-10 rounded-3xl border transition-all duration-500 flex flex-col items-center text-center ${
                  isDarkMode
                    ? "bg-zinc-900/50 border-white/5 hover:border-yellow-500/30 hover:shadow-[0_20px_50px_rgba(234,179,8,0.1)]"
                    : "bg-white border-slate-200 hover:border-sky-500/30 hover:shadow-[0_20px_50px_rgba(2,189,234,0.1)]"
                }`}
              >
                {/* Decorative Background Glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-3xl ${
                    isDarkMode ? "bg-yellow-500" : "bg-sky-400"
                  }`}
                />

                {/* Icon Container */}
                <div className="relative z-10 mb-8">
                  <div
                    className={`p-5 rounded-2xl transform transition-transform duration-500 group-hover:rotate-12 ${
                      isDarkMode
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-sky-50 text-sky-500"
                    }`}
                  >
                    <IconComponent className="text-5xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3
                    className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 transition-all duration-500 group-hover:w-1/2 rounded-full ${
                    isDarkMode ? "bg-yellow-500" : "bg-sky-500"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
