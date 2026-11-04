"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Layers,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import ProjectModal from "./ProjectModal";
import MockupShowcase from "./MockupShowcase";

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    viewport: { once: true, amount: 0.1 },
  };

  const projects = [
    {
      id: "skilleconomy",
      imgSrc: "images/skilleconomy/skilleconomy-main.jpg",
      category: "UI/UX & PRODUCT DESIGN",
      type: "uiux",
      title: "Skilleconomy Digital Value Platform",
      client: "Skilleconomy Ltd",
      description:
        "End-to-end digital product ecosystem featuring the core platform architecture, enterprise B2B service catalogue, and cohort-based skills learning academy.",
      link: "https://www.figma.com/",
      mockUrl: "skilleconomy.com",
      tags: ["Figma", "Design System", "Enterprise SaaS", "EdTech", "B2B Marketplace"],
      screens: [
        {
          src: "images/skilleconomy/skilleconomy-main.jpg",
          title: "Core Ecosystem & Value Platform",
          caption: "Main ecosystem landing page connecting digital skills, technology ventures, and innovation programs.",
        },
        {
          src: "images/skilleconomy/skilleconomy-services.jpg",
          title: "Service Catalogue & B2B Solutions",
          caption: "Comprehensive service marketplace featuring retainer packages, quote estimators, and client onboarding.",
        },
        {
          src: "images/skilleconomy/skilleconomy-academy.jpg",
          title: "Skills Academy & Cohort Hub",
          caption: "Cohort curriculum directory, interactive application flows, and modern career development pathways.",
        },
      ],
    },
    {
      id: "skileman",
      imgSrc: "skileman/Frame 1228.png",
      category: "UI/UX DESIGN",
      type: "uiux",
      title: "Skileman Skill Platform",
      client: "Human Skill Infrastructure",
      description:
        "A social jobbing and talent infrastructure platform connecting skilled professionals with clients across learning, service commerce, and networking.",
      link: "https://www.figma.com/",
      mockUrl: "figma.com/@skileman-platform",
      tags: ["Figma", "Design System", "Social Jobbing", "UI/UX"],
      screens: [
        {
          src: "skileman/Frame 1228.png",
          title: "Platform Feed & Discovery",
          caption: "Main jobbing feed connecting talent requests and client service offerings.",
        },
        {
          src: "skileman/Frame 1229.png",
          title: "Skill Directory & Profiles",
          caption: "Structured taxonomy enabling professionals to showcase verified skillsets.",
        },
        {
          src: "skileman/Frame 1230.png",
          title: "Smart Talent Matching",
          caption: "Algorithmic recommendation connecting client projects with verified experts.",
        },
        {
          src: "skileman/Frame 1231.png",
          title: "Learning & Mentorship Hub",
          caption: "Collaborative learning modules, certifications, and career tracking.",
        },
        {
          src: "skileman/Frame 1232.png",
          title: "Service Commerce & Escrow",
          caption: "Transparent milestone payments and order fulfillment workflows.",
        },
        {
          src: "skileman/Frame 1233.png",
          title: "Professional Community Network",
          caption: "Interactive forum for knowledge sharing, project showcases, and peer reviews.",
        },
        {
          src: "skileman/Frame 1234.png",
          title: "Talent Analytics Dashboard",
          caption: "Operational metrics for profile engagement, client inquiries, and earnings.",
        },
      ],
    },
    {
      id: "shaarix",
      imgSrc: "images/Dashboard-Home.png",
      category: "FINTECH & UI/UX DESIGN",
      type: "uiux",
      title: "Shaarix Human-Value Platform",
      client: "Shaarix Ecosystem",
      description:
        "A decentralized human-value economy and revenue distribution mobile app empowering builders to tokenize contributions via unique ShareTags and track portfolio yields.",
      link: "https://www.figma.com/",
      mockUrl: "shaarix.app",
      tags: ["Figma", "FinTech", "Mobile UI", "Design System", "Escrow"],
      screens: [
        {
          src: "images/Dashboard-Home.png",
          title: "Portfolio & Yield Telemetry",
          caption: "Live dashboard tracking portfolio performance (₦250,000), token breakdowns (RU, VU, SU, HVC), and revenue distributions.",
        },
        {
          src: "images/Share tag.png",
          title: "ShareTag Identity Setup",
          caption: "Intuitive verification flow allowing users to claim unique @sharetag handles for cross-ecosystem reputation.",
        },
        {
          src: "images/Auth Options.png",
          title: "Human-Value Authentication",
          caption: "High-trust sign-in and account registration experience framing the human-value mission.",
        },
        {
          src: "images/Onboarding Splash.png",
          title: "Brand Splash Screen",
          caption: "Cinematic dark-mode splash screen showcasing the Shaarix brand identity and mission.",
        },
      ],
    },
    {
      id: "helply",
      imgSrc: "helpliq.png",
      category: "FULLSTACK WEB DEV",
      type: "frontend",
      title: "Helply AI Support & Lead Bot",
      client: "AI Customer Support",
      description:
        "High-performance, multi-tenant AI SaaS application and embeddable chat widget for automated FAQ responses and customer lead capture.",
      link: "https://helplyai.vercel.app/",
      tags: ["React", "TailwindCSS", "AI SaaS", "Supabase", "PostgreSQL", "Vercel"],
    },
    {
      id: "savvyshopper",
      imgSrc: "savvyshopper.png",
      category: "FRONTEND WEB DEV",
      type: "frontend",
      title: "SavvyShopper E-Commerce",
      client: "Modern Retail",
      description:
        "An e-commerce accessories platform featuring seamless product filtering, interactive cart state, and fluid animations powered by Motion.",
      link: "https://savvyshopper.netlify.app/",
      tags: ["React", "TailwindCSS", "Framer Motion", "Netlify"],
    },
    {
      id: "data-dashboard",
      imgSrc: "data-dashboard.png",
      category: "FRONTEND WEB DEV",
      type: "frontend",
      title: "AI Analytics Dashboard",
      client: "Data Analytics Platform",
      description:
        "Integrated external analytics APIs to build a real-time data dashboard with interactive visualizers, metric cards, and responsive controls.",
      link: "https://data-dashboard-henna-nu.vercel.app/",
      tags: ["React", "Analytics API", "Recharts", "TailwindCSS"],
    },
    {
      id: "library-management-api",
      imgSrc: "library management RestAPI.png",
      category: "BACKEND DEVELOPMENT",
      type: "frontend",
      title: "Library Management System API",
      client: "Backend Infrastructure",
      description:
        "Comprehensive RESTful API for resource cataloging, member subscriptions, and borrowing workflows with interactive Swagger documentation.",
      link: "https://library-management-api-xaum.onrender.com/api-docs/",
      tags: ["Node.js", "Express", "Swagger API", "REST API", "Render"],
    },
  ];

  const categories = [
    { id: "uiux", label: "UI/UX Design" },
    { id: "frontend", label: "Web Development" },
  ];

  const filteredProjects =
    activeCategory === "frontend"
      ? projects.filter((project) => project.type === "frontend")
      : [];

  const handleCardClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="work"
      className={`relative py-28 sm:py-36 px-6 sm:px-12 border-t transition-colors duration-500 ${
        isDarkMode
          ? "bg-black border-white/5 text-white"
          : "bg-[#fafaf9] border-black/5 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b pb-8 border-inherit">
          <motion.div {...scrollReveal}>
            <span
              className={`text-xs font-semibold tracking-widest uppercase block mb-3 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              My Projects
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Recent{" "}
              <span className="font-editorial italic font-normal text-4xl sm:text-6xl">
                Case Studies
              </span>
            </h2>
          </motion.div>

          {/* Filter Tabs Pills */}
          <motion.div
            {...scrollReveal}
            className="flex items-center gap-1.5 p-1 rounded-full border self-start md:self-end"
            style={{
              borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              backgroundColor: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? isDarkMode
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "bg-black text-white font-semibold shadow-sm"
                      : isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {activeCategory === "uiux" && <MockupShowcase />}

        {/* Projects Grid (Matching Reference 2-Column Responsive Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleCardClick(project)}
                  className={`group relative rounded-3xl overflow-hidden border cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                    isDarkMode
                      ? "bg-[#0c0d10] border-white/10 hover:border-white/30 shadow-xl shadow-black/80 hover:shadow-2xl"
                      : "bg-white border-black/10 hover:border-black/30 shadow-md shadow-black/5 hover:shadow-xl"
                  }`}
                >
                  {/* Image Viewport */}
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/10">
                      <img
                        src={project.imgSrc}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Category Tag Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border ${
                            isDarkMode
                              ? "bg-black/70 text-gray-200 border-white/15"
                              : "bg-white/85 text-black border-black/10 shadow-sm"
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Top-Right Indicator Icon */}
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div
                          className={`p-2.5 rounded-full backdrop-blur-md shadow-md border ${
                            isDarkMode
                              ? "bg-black/80 text-white border-white/20"
                              : "bg-white/90 text-black border-black/10"
                          }`}
                        >
                          <ExternalLink size={13} />
                        </div>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-mono uppercase tracking-wider ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {project.client}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5 group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${
                              isDarkMode
                                ? "bg-white/5 border-white/5 text-gray-400"
                                : "bg-black/5 border-black/5 text-gray-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA Bar */}
                  <div className="px-6 sm:px-7 pb-6 pt-2">
                    <div className="flex items-center justify-between pt-4 border-t border-dashed border-white/10 dark:border-white/10">
                      <span
                        className={`text-xs font-semibold tracking-tight inline-flex items-center gap-1.5 ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Explore Live Product
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Screens Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
