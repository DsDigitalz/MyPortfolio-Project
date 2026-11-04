import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Code2,
  MessageSquare,
  Flame,
  ShieldCheck,
  Zap,
  Repeat,
  CheckCircle,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function WhyWorkWithMe() {
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

  const pillars = [
    {
      title: "Senior-Level Quality",
      icon: <Sparkles size={16} />,
      description:
        "Every curve, type size, and interaction is designed with high visual fidelity and meticulous attention to detail.",
    },
    {
      title: "Systems Thinking",
      icon: <Layers size={16} />,
      description:
        "Robust design tokens, modular components, and atomic structures that grow with your company without fracturing.",
    },
    {
      title: "Developer-Friendly Handoff",
      icon: <Code2 size={16} />,
      description:
        "Having deep software engineering expertise means my designs anticipate responsive edge-cases, states, and DOM hierarchy.",
    },
    {
      title: "Clear Communication",
      icon: <MessageSquare size={16} />,
      description:
        "Transparent updates, proactive asynchronous loom walkthroughs, and prompt collaboration across Figma and Slack.",
    },
    {
      title: "On-Brand, Every Time",
      icon: <Flame size={16} />,
      description:
        "No boilerplate templates. Every experience is custom-tailored to resonate with your unique market positioning.",
    },
    {
      title: "Reliable Partner",
      icon: <ShieldCheck size={16} />,
      description:
        "Honored deadlines, predictable milestones, and unwavering accountability from kickoff to post-launch monitoring.",
    },
    {
      title: "Fast Execution",
      icon: <Zap size={16} />,
      description:
        "Agile prototyping and rapid iteration loops that test assumptions quickly without stalling delivery cycles.",
    },
    {
      title: "Thoughtful Feedback",
      icon: <Repeat size={16} />,
      description:
        "Constructive collaboration focused on solving real user pain points and advancing measurable business metrics.",
    },
    {
      title: "Smooth Production Handoff",
      icon: <CheckCircle size={16} />,
      description:
        "Clean Figma component variants paired with production-grade React code and clean Git pull requests.",
    },
  ];

  return (
    <section
      id="why-me"
      className={`relative py-28 sm:py-36 px-6 sm:px-12 border-t transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#050505] border-white/5 text-white"
          : "bg-white border-black/5 text-black"
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
            Why Work With Me
          </motion.span>
          <motion.h2
            {...scrollReveal}
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            What You Can{" "}
            <span className="font-editorial italic font-normal text-4xl sm:text-6xl">
              Expect
            </span>
          </motion.h2>
          <motion.p
            {...scrollReveal}
            className={`mt-4 text-base ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A dedicated design and engineering partner committed to high
            standards, transparency, and product excellence.
          </motion.p>
        </div>

        {/* 3x3 Grid of Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              {...scrollReveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`p-7 rounded-3xl border transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#0b0c0f] border-white/10 hover:border-white/20 shadow-lg shadow-black/60"
                  : "bg-stone-50 border-black/10 hover:border-black/20 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-gray-400">
                  0{idx + 1}
                </span>
                <div
                  className={`p-2.5 rounded-full border ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-black/5 border-black/10 text-black"
                  }`}
                >
                  {pillar.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold tracking-tight mb-2">
                {pillar.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

