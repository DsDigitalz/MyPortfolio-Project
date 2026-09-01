"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowUpRightFromSquare,
  FaExpand,
  FaPalette,
  FaCode,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa6";
import { useTheme } from "./ThemeContext";
import ProjectModal from "./ProjectModal";

// Animation configuration
const fadeSlideAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  viewport: { once: true, amount: 0.15 },
};

function SkilemanMockupVisual({ isDarkMode }) {
  const shouldReduceMotion = useReducedMotion();
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [
    "skileman/Frame 1228.png",
    "skileman/Frame 1229.png",
    "skileman/Frame 1230.png",
    "skileman/Frame 1231.png",
    "skileman/Frame 1232.png",
    "skileman/Frame 1233.png",
    "skileman/Frame 1234.png",
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, frames.length]);

  const nextFrameIndex = (currentFrame + 1) % frames.length;

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-zinc-900 to-indigo-950 flex items-center justify-center p-3">
      {/* Ambient background glow */}
      <div
        className={`absolute inset-0 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40 ${
          isDarkMode ? "bg-amber-500/25" : "bg-sky-400/25"
        }`}
      />

      {/* Layered floating mockups container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background depth screen */}
        <motion.img
          src={frames[nextFrameIndex]}
          alt="Skileman Interface Depth View"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [4, -4, 4],
                  rotate: [1, -1, 1],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[85%] h-[85%] object-cover rounded-xl shadow-2xl opacity-40 translate-x-3 -translate-y-2 scale-95 transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-4 group-hover:opacity-60"
        />

        {/* Primary active mockup */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentFrame}
            src={frames[currentFrame]}
            alt="Skileman UI Mockup"
            initial={{ opacity: 0.7, scale: 0.97 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [-4, 4, -4],
                  }
            }
            exit={{ opacity: 0.7, scale: 0.97 }}
            transition={{
              opacity: { duration: 0.7 },
              scale: { duration: 0.7 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 w-[90%] h-[90%] object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
        {frames.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentFrame
                ? isDarkMode
                  ? "w-4 bg-yellow-500"
                  : "w-4 bg-sky-400"
                : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const uiuxProjects = [
  {
    id: "skileman",
    imgSrc: "skileman/Frame 1228.png",
    category: "UI/UX DESIGN",
    title: "Skileman Skill Platform",
    description:
      "A human skill infrastructure and social jobbing platform designed to connect skilled professionals with clients, unlocking opportunities across skills, services, learning, commerce, and networking.",
    link: "https://www.figma.com/",
    mockUrl: "figma.com/@skileman-platform",
    tags: ["Figma", "Skill Infrastructure", "Social Jobbing", "UI/UX"],
    animatedMockups: true,
    screens: [
      {
        src: "skileman/Frame 1228.png",
        title: "Platform Feed & Opportunity Discovery",
        caption:
          "Main social jobbing stream connecting skilled professionals, client requests, and service offerings.",
      },
      {
        src: "skileman/Frame 1229.png",
        title: "Skill Directory & Services",
        caption:
          "Structured skills taxonomy enabling users to showcase capabilities, publish courses, and list services.",
      },
      {
        src: "skileman/Frame 1230.png",
        title: "Smart Talent & Job Matching",
        caption:
          "Algorithmic matching connecting client projects with verified skilled talent and domain experts.",
      },
      {
        src: "skileman/Frame 1231.png",
        title: "Learning & Mentorship Suite",
        caption:
          "Collaborative learning modules, skill verification pathways, and continuous career growth tracking.",
      },
      {
        src: "skileman/Frame 1232.png",
        title: "Service Commerce & Transactions",
        caption:
          "Transparent service ordering, contract term negotiation, and secure milestone payment workflows.",
      },
      {
        src: "skileman/Frame 1233.png",
        title: "Professional Community Network",
        caption:
          "Interactive feed for knowledge sharing, peer endorsements, project showcases, and industry discussions.",
      },
      {
        src: "skileman/Frame 1234.png",
        title: "Analytics & Growth Dashboard",
        caption:
          "Operational metrics for talent engagement, earnings, profile visibility, and active client inquiries.",
      },
    ],
  },
  {
    id: "betternship",
    imgSrc: "Dashboard2.png",
    category: "UI/UX DESIGN",
    title: "Betternship Web App",
    description:
      "Designed an intuitive web application for contract recruiters, featuring streamlined candidate workflows and recruitment dashboard analytics.",
    link: "https://www.figma.com/design/zRR9fCYYANK2CAkterULb8/Betternship-recruiter-page",
    mockUrl: "figma.com/@betternship-app",
    tags: ["Figma", "Design System", "Prototyping", "UX Research"],
    screens: [
      {
        src: "Dashboard2.png",
        title: "Recruiter Dashboard",
        caption:
          "Minimalist operational dashboard utilizing clear typography, high-contrast metrics, and intuitive candidate pipeline status indicators.",
      },
      {
        src: "Contract Recruiter Page.png",
        title: "Contract Recruiter Management",
        caption:
          "Focused recruitment layout designed to streamline contract job postings, application reviews, and client communication.",
      },
    ],
  },
  {
    id: "healthcare",
    imgSrc: "Dashboard.png",
    category: "UI/UX DESIGN",
    title: "Healthcare Research Web App",
    description:
      "A comprehensive Clinical Research Suite designed to monitor trials, manage study catalog data, and generate compliance reports.",
    link: "https://www.figma.com/design/K4zgLwzg3BJRt56IwS7LHt/Healthcare-research-web-app",
    mockUrl: "figma.com/@healthcare-suite",
    tags: ["Figma", "Healthcare UX", "Data Grid", "Dashboard"],
    screens: [
      {
        src: "Research Dashboard.png",
        title: "Clinical Overview Dashboard",
        caption:
          "Central operational hub for clinical trials, tracking ongoing patient metrics, active study milestones, and compliance alerts.",
      },
      {
        src: "Study Catalog.png",
        title: "Study Catalog Directory",
        caption:
          "Filterable catalog enabling research leads to quickly search, categorize, and launch new trial protocols.",
      },
      {
        src: "Study Detail Overview.png",
        title: "Study Detail & Protocol View",
        caption:
          "Granular overview of trial parameters, investigator assignments, and patient group demographics.",
      },
      {
        src: "Participant Data Grid.png",
        title: "Participant Data Grid",
        caption:
          "High-density data grid with custom filters, multi-column sorting, and export capabilities for clinical researchers.",
      },
      {
        src: "Report Generator.png",
        title: "Automated Report Generator",
        caption:
          "Automated suite for generating regulatory compliance documents and trial summaries with visual data exports.",
      },
      {
        src: "Analytics & Trends.png",
        title: "Analytics & Outcomes Visualizer",
        caption:
          "Interactive trend charts and statistical breakdown of clinical study outcome metrics across participant demographics.",
      },
    ],
  },
];

const frontendProjects = [
  {
    id: "helply",
    imgSrc: "helpliq.png",
    category: "FULLSTACK WEB DEVELOPMENT",
    title: "AI FAQ & Lead Capture Bot",
    description:
      "Developed a high-performance, multi-tenant AI SaaS application and embeddable chat widget for automated support.",
    link: "https://helplyai.vercel.app/",
    tags: ["React", "TailwindCSS", "AI SaaS", 'Supabase', 'PostgreSQL', "Vercel"],
  },
  {
    id: "ecommerce",
    imgSrc: "savvyshopper.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "Savvyshopper Ecommerce Web ",
    description:
      "Built an e-commerce accessories website featuring product browsing, shopping interactions, and smooth animations powered by Framer Motion.",
    link: "https://savvyshopper.netlify.app/",
    tags: ["React", "TailwindCSS", "Framer Motion" ],
  },
  {
    id: "data-dashboard",
    imgSrc: "data-dashboard.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "AI Data Dashboard",
    description:
      "Integrated external analytics APIs to build a real-time data dashboard with interactive chart visualizers and metrics.",
    link: "https://data-dashboard-henna-nu.vercel.app/",
    tags: ["React", "Analytics API", "Recharts", "TailwindCSS"],
  },
  {
    id: "audiophile",
    imgSrc: "audiophile.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "Audiophile E-Commerce Store",
    description:
      "Built a fully functional e-commerce web application featuring dynamic cart state, checkout flows, and responsive UI.",
    link: "https://audicommerce.netlify.app/",
    tags: ["React", "E-Commerce", "State Management", "Netlify"],
  },
  {
    id: "procleaning",
    imgSrc: "Cover.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "ProCleaning Services Platform",
    description:
      "Developed a modern, responsive front-end website for professional cleaning services with interactive booking previews.",
    link: "https://procleaningservices.netlify.app/",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive"],
  },
  {
    id: "monkevent",
    imgSrc: "techimg.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "MonkEvent Tech Platform",
    description:
      "Designed and developed a landing page for tech events featuring dynamic scheduling and smooth animations.",
    link: "https://monkevent.netlify.app/",
    tags: ["React", "Framer Motion", "Landing Page"],
  },

   {
    id: "library-management-api",
    imgSrc: "library management RestAPI.png",
    category: "BACKEND DEVELOPMENT",
    title: "Library Management System API",
    description:
      "A comprehensive RESTful API for library resource management, book cataloging, member subscriptions, and borrowing workflows with interactive Swagger documentation.",
    link: "https://library-management-api-xaum.onrender.com/api-docs/",
    tags: ["Node.js", "Express", "Swagger API", "REST API", "Render"],
  },
];

const backendProjects = [
  {
    id: "library-management-api",
    imgSrc: "library management RestAPI.png",
    category: "BACKEND DEVELOPMENT",
    title: "Library Management System API",
    description:
      "A comprehensive RESTful API for library resource management, book cataloging, member subscriptions, and borrowing workflows with interactive Swagger documentation.",
    link: "https://library-management-api-xaum.onrender.com/api-docs/",
    tags: ["Node.js", "Express", "Swagger API", "REST API", "Render"],
  },
  {
    id: "rest-api-auth",
    imgSrc: "techimg.png",
    category: "BACKEND DEVELOPMENT",
    title: "RESTful API & Auth Microservice",
    description:
      "Engineered secure Node.js & Express API microservices with JWT authentication, rate limiting, and role-based access control.",
    link: "https://github.com/",
    tags: ["Node.js", "Express", "JWT", "MongoDB", "REST API"],
  },
  {
    id: "ecommerce-backend",
    imgSrc: "ecommerce.png",
    category: "BACKEND DEVELOPMENT",
    title: "E-Commerce Payment & Order API",
    description:
      "Architected backend server handling Stripe webhook integrations, SQL transaction locks, automated invoicing, and inventory tracking.",
    link: "https://github.com/",
    tags: ["Node.js", "PostgreSQL", "Stripe API", "Express"],
  },
  {
    id: "websocket-broker",
    imgSrc: "data-dashboard.png",
    category: "BACKEND DEVELOPMENT",
    title: "Real-Time WebSocket Event Broker",
    description:
      "Developed high-concurrency event broadcasting system utilizing WebSockets and Redis pub/sub for real-time notification streams.",
    link: "https://github.com/",
    tags: ["WebSockets", "Redis", "Node.js", "Pub/Sub"],
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const uiuxSliderRef = useRef(null);
  const frontendSliderRef = useRef(null);
  const backendSliderRef = useRef(null);

  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const isUiUxProject = (project) => {
    return (project.category || "").toUpperCase().includes("UI/UX");
  };

  const handleCardClick = (project) => {
    if (isUiUxProject(project)) {
      setSelectedProject(project);
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const categories = [
    // { id: "all", label: "All Work", icon: FaLayerGroup },
    { id: "uiux", label: "UI/UX Design", icon: FaPalette },
    { id: "frontend", label: "Web Development", icon: FaCode },
    // { id: "frontend", label: "Frontend Web Dev", icon: FaCode },
    // { id: "backend", label: "Backend Development", icon: FaServer },
  ];

  const renderProjectCard = (project) => {
    const uiUx = isUiUxProject(project);

    return (
      <motion.article
        key={project.id}
        onClick={() => handleCardClick(project)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className={`group relative flex-shrink-0 w-[310px] sm:w-[380px] md:w-[410px] rounded-3xl overflow-hidden snap-center cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
          isDarkMode
            ? "bg-[#111215] border-white/10 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/70 hover:border-yellow-500/30"
            : "bg-white border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/60 hover:border-sky-400/60"
        }`}
      >
        {/* Thumbnail Container */}
        <div>
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/5">
            {project.animatedMockups ? (
              <SkilemanMockupVisual isDarkMode={isDarkMode} />
            ) : (
              <img
                src={project.imgSrc}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            )}

            {/* Category Pill Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md transition-all duration-200 ${
                  isDarkMode
                    ? "bg-black/70 text-gray-200 border border-white/10"
                    : "bg-white/90 text-slate-800 border border-slate-200/70 shadow-sm"
                }`}
              >
                {project.category}
              </span>
            </div>

            {/* Indicator Icon */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div
                className={`p-2.5 rounded-full backdrop-blur-md shadow-md ${
                  isDarkMode
                    ? "bg-black/80 text-yellow-500 border border-white/15"
                    : "bg-white/90 text-sky-600 border border-slate-200"
                }`}
              >
                {uiUx ? (
                  <FaExpand className="text-xs" />
                ) : (
                  <FaArrowUpRightFromSquare className="text-xs" />
                )}
              </div>
            </div>
          </div>

          {/* Card Details */}
          <div className="p-6">
            <h4 className="text-xl font-bold tracking-tight mb-2.5 group-hover:opacity-90 transition-opacity">
              {project.title}
            </h4>
            <p
              className={`text-sm leading-relaxed line-clamp-3 mb-4 ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              {project.description}
            </p>

            {/* Tech Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium ${
                      isDarkMode
                        ? "bg-white/5 text-gray-300 border border-white/5"
                        : "bg-slate-100 text-slate-600 border border-slate-200/60"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center justify-between pt-3 border-t border-dashed border-slate-200 dark:border-white/10">
            <span
              className={`text-xs font-semibold tracking-tight inline-flex items-center gap-1.5 transition-colors ${
                isDarkMode
                  ? "text-yellow-500 group-hover:text-yellow-400"
                  : "text-sky-600 group-hover:text-sky-700"
              }`}
            >
              {uiUx ? "View Figma Screens" : "Visit Project"}
            </span>

            <span
              className={`text-xs font-mono transition-transform duration-200 group-hover:translate-x-1 ${
                isDarkMode ? "text-gray-400" : "text-slate-500"
              }`}
            >
              {uiUx ? "Modal →" : "Live ↗"}
            </span>
          </div>
        </div>
      </motion.article>
    );
  };

  const renderSectionHeader = (
    title,
    subtitle,
    badge,
    IconComponent,
    sliderRef
  ) => (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`p-2 rounded-xl text-base ${
              isDarkMode
                ? "bg-yellow-500/10 text-yellow-500"
                : "bg-sky-50 text-sky-600"
            }`}
          >
            <IconComponent />
          </div>
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              isDarkMode ? "text-yellow-500" : "text-sky-600"
            }`}
          >
            {badge}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h3>
        <p
          className={`mt-1.5 text-sm sm:text-base max-w-2xl leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2.5 items-center self-start md:self-end">
        <button
          onClick={() => scrollSlider(sliderRef, "left")}
          className={`p-3 rounded-full transition-all duration-200 border ${
            isDarkMode
              ? "border-white/10 bg-white/5 hover:bg-white/15 text-white"
              : "border-slate-200 bg-white hover:bg-slate-100 text-slate-800 shadow-sm"
          }`}
          aria-label="Previous project"
        >
          <FaChevronLeft className="text-xs" />
        </button>
        <button
          onClick={() => scrollSlider(sliderRef, "right")}
          className={`p-3 rounded-full transition-all duration-200 border ${
            isDarkMode
              ? "border-white/10 bg-white/5 hover:bg-white/15 text-white"
              : "border-slate-200 bg-white hover:bg-slate-100 text-slate-800 shadow-sm"
          }`}
          aria-label="Next project"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );

  return (
    <motion.section
      id="portfolio"
      className={`relative w-full py-28 md:py-36 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? "bg-[#08090a] text-white" : "bg-[#f8f9fa] text-slate-900"
      }`}
      {...fadeSlideAnim}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "opacity-[0.03]" : "opacity-[0.25]"
          }`}
          style={{
            backgroundImage: `radial-gradient(${
              isDarkMode ? "#ffffff" : "#94a3b8"
            } 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Main Section Header */}
        <motion.header className="text-center max-w-3xl mx-auto mb-14" {...fadeSlideAnim}>
          <span
            className={`inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 ${
              isDarkMode
                ? "bg-white/10 text-yellow-500 border border-white/10"
                : "bg-sky-50 text-sky-600 border border-sky-100"
            }`}
          >
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Featured Projects
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            A curated showcase of my digital craftsmanship across UI/UX design, frontend web development, and backend systems.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                    isActive
                      ? isDarkMode
                        ? "bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/20"
                        : "bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-600/20"
                      : isDarkMode
                      ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <Icon className="text-xs" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.header>

        {/* --- SECTION 1: UI/UX DESIGN --- */}
        {(activeCategory === "all" || activeCategory === "uiux") && (
          <motion.div className="mb-20" {...fadeSlideAnim}>
            {renderSectionHeader(
              "UI/UX Design",
              "User-centered interface designs, high-fidelity Figma prototypes, and interactive clinical workflows.",
              "Interface & Product Design",
              FaPalette,
              uiuxSliderRef
            )}

            <div className="relative w-full">
              <div
                ref={uiuxSliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-1"
              >
                {uiuxProjects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </motion.div>
        )}

        {/* --- SECTION 2: FRONTEND WEB DEVELOPMENT --- */}
        {(activeCategory === "all" || activeCategory === "frontend") && (
          <motion.div className="mb-20" {...fadeSlideAnim}>
            {renderSectionHeader(
              "Web Development",
              // "Frontend Web Development",
              "Interactive, modern web applications built with React, Next.js, and high-performance frontend tools.",
              "Client-Side Engineering",
              FaCode,
              frontendSliderRef
            )}

            <div className="relative w-full">
              <div
                ref={frontendSliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-1"
              >
                {frontendProjects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </motion.div>
        )}

        {/* --- SECTION 3: BACKEND DEVELOPMENT --- */}
        {(activeCategory === "all" || activeCategory === "backend") && (
          <motion.div className="mb-12" {...fadeSlideAnim}>
            {renderSectionHeader(
              "Backend Development",
              "Scalable server architectures, RESTful APIs, authentication systems, and real-time event engines.",
              "Server-Side & API Engineering",
              FaServer,
              backendSliderRef
            )}

            <div className="relative w-full">
              <div
                ref={backendSliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-1"
              >
                {backendProjects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Interactive UI/UX Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
}