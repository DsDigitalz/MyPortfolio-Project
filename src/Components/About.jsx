import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Code2,
  Server,
  Briefcase,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function About() {
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

  const experiences = [
    {
      role: "Lead Product Designer & Frontend Engineer",
      company: "Skileman Platform",
      period: "2024 → Present",
      description:
        "Architecting human skill infrastructure UX, Figma component libraries, and interactive React client feeds.",
    },
    {
      role: "UI/UX & Web Designer",
      company: "Betternship",
      period: "2023 → 2024",
      description:
        "Designed contract recruiter dashboards, pipeline visualizers, and streamlined candidate application flows.",
    },
    {
      role: "Fullstack Web Developer & Designer",
      company: "Helply AI & Freelance",
      period: "2022 → 2023",
      description:
        "Engineered multi-tenant AI customer support widget, Supabase database schemas, and animated marketing pages.",
    },
    {
      role: "User Interface Designer & Instructor",
      company: "ESSL Tech",
      period: "2020 → 2022",
      description:
        "Created user-centered interfaces and instructed 100+ aspiring developers in modern web design principles.",
    },
    {
      role: "UI/UX Designer",
      company: "Freelance Practice",
      period: "2019 → 2020",
      description:
        "Delivered web apps, design audits, and interactive mobile prototypes for early-stage startup founders.",
    },
  ];

  const skillGroups = [
    {
      title: "UI/UX & Design Systems",
      icon: <Layers size={14} />,
      skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "User Research", "Wireframing"],
    },
    {
      title: "Frontend Engineering",
      icon: <Code2 size={14} />,
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Motion"],
    },
    {
      title: "Backend & Systems",
      icon: <Server size={14} />,
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Supabase"],
    },
  ];

  const heroImage = isDarkMode ? "heroimg.png" : "heroimg3.png";

  return (
    <section
      id="about"
      className={`relative py-16 sm:py-20 px-6 sm:px-12 border-t transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#050505] border-white/5 text-white"
          : "bg-white border-black/5 text-black"
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
              About Me
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Designing seamless interfaces & {" "}
              <span className="font-editorial italic font-normal text-4xl sm:text-6xl">
                engineering solid systems
              </span>
            </h2>
          </motion.div>

          <motion.p
            {...scrollReveal}
            className={`text-sm sm:text-base max-w-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Bridging high-fidelity product design with clean, scalable code.
          </motion.p>
        </div>

        {/* Asymmetric 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Designer Card & Profile */}
          <motion.div
            {...scrollReveal}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div
              className={`relative rounded-3xl overflow-hidden p-3 border shadow-2xl ${
                isDarkMode
                  ? "bg-[#0b0c0e] border-white/10 shadow-black/80"
                  : "bg-stone-50 border-black/10 shadow-black/5"
              }`}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                <img
                  src={heroImage}
                  alt="Daniel Sanu - Product Designer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-70 ${
                    isDarkMode ? "from-black/90" : "from-black/60"
                  }`}
                />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight">
                    Daniel Sanu
                  </h3>
                  <p className="text-xs text-gray-300">
                    DsDigitalz — Product Designer & Software Engineer
                  </p>
                </div>
              </div>

              {/* Quick Social Buttons */}
              <div className="mt-4 flex items-center justify-between px-2 pt-1 pb-1">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/dsdigitalz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={`p-2.5 rounded-full border transition-colors ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/15 text-gray-300 hover:text-white"
                        : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
                    }`}
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href="https://github.com/DsDigitalz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={`p-2.5 rounded-full border transition-colors ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/15 text-gray-300 hover:text-white"
                        : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
                    }`}
                  >
                    <FaGithub size={14} />
                  </a>
                  <a
                    href="mailto:sanudaniel46@gmail.com"
                    aria-label="Email"
                    className={`p-2.5 rounded-full border transition-colors ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/15 text-gray-300 hover:text-white"
                        : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
                    }`}
                  >
                    <MdEmail size={16} />
                  </a>
                  <a
                    href="https://wa.me/2349137846680"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className={`p-2.5 rounded-full border transition-colors ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/15 text-gray-300 hover:text-white"
                        : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
                    }`}
                  >
                    <FaWhatsapp size={15} />
                  </a>
                </div>

                <span
                  className={`text-[11px] font-mono ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Lagos, NG
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Bio Narrative & Experience Timeline */}
          <motion.div
            {...scrollReveal}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            {/* Biography Article */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Crafting interfaces that are easier to use, easier to build, and
                easier to scale.
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {/* Over the past five years, I’ve worked with startups, founders,
                and growing companies to design and build digital products
                across multiple industries including FinTech, AI, Healthcare,
                Foodtech, SaaS, and eCommerce. */}
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                As a multidisciplinary designer and software engineer, I bridge
                the gap between complex business logic and intuitive UX. From
                early concepts, user flow mapping, and design systems in Figma to
                engineering high-performance interfaces in React/Nextjs, I turn hard
                problems into simple, usable digital tools.
              </p>
            </div>

            {/* Core Skills Categorized Pills */}
            <div className="space-y-4">
              {skillGroups.map((group, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${
                    isDarkMode
                      ? "bg-white/[0.02] border-white/10"
                      : "bg-stone-50 border-black/10"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {group.icon}
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                          isDarkMode
                            ? "bg-white/5 border-white/5 text-gray-300"
                            : "bg-white border-black/5 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Experience Timeline Rows (Matching Reference) */}
            {/* <div className="mt-4">
              <div className="flex items-center justify-between pb-4 border-b border-inherit mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Briefcase size={13} />
                  Professional Experience
                </span>
                <span className="text-xs font-mono text-gray-500">
                  Timeline
                </span>
              </div>

              <div className="divide-y divide-inherit">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group transition-colors rounded-xl px-2.5 -mx-2.5 ${
                      isDarkMode
                        ? "hover:bg-white/[0.03]"
                        : "hover:bg-black/[0.02]"
                    }`}
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold tracking-tight flex items-center gap-2">
                        <span>{exp.role}</span>
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400"
                        />
                      </h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                      <p
                        className={`text-xs mt-1 max-w-md ${
                          isDarkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                          isDarkMode
                            ? "bg-white/5 border-white/10 text-gray-400"
                            : "bg-black/5 border-black/10 text-gray-500"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
