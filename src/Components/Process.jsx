import React from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, CheckCircle2, Rocket } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Process() {
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

  const steps = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Problem Discovery",
      icon: <Target size={18} />,
      description:
        "Every project starts with understanding the business, the target audience, and the core problem worth solving. No assumptions — just clear objectives and user empathy.",
    },
    {
      num: "02",
      title: "Simplify",
      subtitle: "UX Architecture",
      icon: <Sparkles size={18} />,
      description:
        "I remove unnecessary complexities and design experiences that feel intuitive from the first interaction. Clean information architecture and focused user flows.",
    },
    {
      num: "03",
      title: "Validate",
      subtitle: "Interactive Prototyping",
      icon: <CheckCircle2 size={18} />,
      description:
        "I prototype, test, and refine ideas with real interaction patterns before development. This reduces risk, accelerates alignment, and guarantees high usability.",
    },
    {
      num: "04",
      title: "Deliver & Scale",
      subtitle: "Design Systems & Code",
      icon: <Rocket size={18} />,
      description:
        "Production-ready Figma tokens, reusable React component systems, and clean code that ensure frictionless developer handoff and long-term maintainability.",
    },
  ];

  return (
    <section
      id="approach"
      className={`relative py-28 sm:py-36 px-6 sm:px-12 border-t transition-colors duration-500 ${
        isDarkMode
          ? "bg-black border-white/5 text-white"
          : "bg-[#fafaf9] border-black/5 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.span
            {...scrollReveal}
            className={`text-xs font-semibold tracking-widest uppercase block mb-3 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            My Approach, Explained
          </motion.span>
          <motion.h2
            {...scrollReveal}
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            Here's How I{" "}
            <span className="font-editorial italic font-normal text-4xl sm:text-6xl">
              Design & Build
            </span>
          </motion.h2>
          <motion.p
            {...scrollReveal}
            className={`mt-4 text-base ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A deliberate, user-centered methodology engineered to turn concepts
            into resilient digital products.
          </motion.p>
        </div>

        {/* 4 Cards Grid (Matching Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.article
              key={idx}
              {...scrollReveal}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`relative p-7 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
                isDarkMode
                  ? "bg-[#0c0d10] border-white/10 hover:border-white/25 shadow-xl shadow-black/60"
                  : "bg-white border-black/10 hover:border-black/25 shadow-md shadow-black/5"
              }`}
            >
              <div>
                {/* Header: Numeral & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-editorial text-4xl font-normal text-gray-400 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <div
                    className={`p-2.5 rounded-full border transition-colors ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/10"
                        : "bg-black/5 border-black/10 text-gray-700 group-hover:text-black group-hover:bg-black/10"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold tracking-tight mb-1">
                  {step.title}
                </h3>
                <span
                  className={`text-xs font-mono uppercase tracking-wider block mb-4 ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {step.subtitle}
                </span>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div
                className={`mt-8 h-[2px] w-full rounded-full transition-all duration-500 ${
                  isDarkMode
                    ? "bg-white/5 group-hover:bg-white/30"
                    : "bg-black/5 group-hover:bg-black/30"
                }`}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

