import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, Server } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function TopServices() {
  const { isDarkMode } = useTheme();

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    viewport: { once: true, amount: 0.15 },
  };

  const services = [
    {
      icon: <Globe size={20} />,
      title: "Responsive Web Design",
      description:
        "Designing intuitive, accessible web interfaces that adapt gracefully across viewports. Creating aesthetically refined digital experiences that reflect brand identity and drive conversion.",
      deliverables: ["Figma Design Files", "Responsive Breakpoints", "Interactive Prototypes"],
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile App Design",
      description:
        "Crafting touch-first, ergonomic mobile user experiences for iOS and Android. Streamlining user flows, simplifying navigation, and adhering to platform design guidelines.",
      deliverables: ["User Journey Maps", "Mobile UI Kits", "Micro-Interactions"],
    },
    {
      icon: <Code2 size={20} />,
      title: "Frontend Engineering",
      description:
        "Building interactive, performant client applications with React, Next.js, and Tailwind CSS. Implementing complex animations with Motion and ensuring accessible DOM structure.",
      deliverables: ["Clean React Code", "Tailwind Component Systems", "API Integration"],
    },
    {
      icon: <Server size={20} />,
      title: "Backend & RESTful APIs",
      description:
        "Engineering reliable server-side architecture and RESTful APIs using Node.js and Express. Designing database schemas with PostgreSQL, MongoDB, and Supabase for high availability.",
      deliverables: ["RESTful API Endpoints", "Database Schemas", "Swagger Documentation"],
    },
  ];

  return (
    <section
      id="services"
      className={`relative py-28 sm:py-36 px-6 sm:px-12 border-t transition-colors duration-500 ${
        isDarkMode
          ? "bg-black border-white/5 text-white"
          : "bg-[#fafaf9] border-black/5 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 gap-4 border-b pb-8 border-inherit">
          <motion.div {...scrollReveal}>
            <span
              className={`text-xs font-semibold tracking-widest uppercase block mb-3 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Services & Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Design & Technical{" "}
              <span className="font-editorial italic font-normal text-4xl sm:text-6xl">
                Expertise
              </span>
            </h2>
          </motion.div>

          <motion.p
            {...scrollReveal}
            className={`text-sm sm:text-base max-w-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            End-to-end digital product design and engineering execution.
          </motion.p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              {...scrollReveal}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#0c0d10] border-white/10 hover:border-white/25 shadow-xl shadow-black/70"
                  : "bg-white border-black/10 hover:border-black/25 shadow-md shadow-black/5"
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-colors ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-black/5 border-black/10 text-black"
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-3">
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Deliverable pills */}
              <div className="pt-4 border-t border-inherit space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-gray-500 block mb-2">
                  Key Deliverables
                </span>
                <div className="flex flex-wrap gap-1">
                  {service.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className={`text-[11px] px-2 py-0.5 rounded-md border ${
                        isDarkMode
                          ? "bg-white/5 border-white/5 text-gray-300"
                          : "bg-black/5 border-black/5 text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
