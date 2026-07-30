"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaArrowUpRightFromSquare, FaExpand } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";
import ProjectModal from "./ProjectModal";

// Physical, restrained animation configuration (Apple style)
const fadeSlideAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  viewport: { once: true, amount: 0.15 },
};

const portfolioData = [
  {
    id: "betternship",
    imgSrc: "Dashboard2.png",
    category: "UI/UX DESIGN",
    title: "Betternship Web App",
    description:
      "Designed an intuitive web application for contract recruiters, featuring streamlined candidate workflows and recruitment dashboard analytics.",
    link: "https://www.figma.com/design/zRR9fCYYANK2CAkterULb8/Betternship-recruiter-page",
    mockUrl: "figma.com/@betternship-app",
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
  {
    id: "helply",
    imgSrc: "AI.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "AI FAQ & Lead Capture Bot",
    description:
      "Developed a high-performance, multi-tenant AI SaaS application and embeddable chat widget for automated support.",
    link: "https://helplyai.vercel.app/",
  },
  {
    id: "data-dashboard",
    imgSrc: "data-dashboard.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "AI Data Dashboard",
    description:
      "Integrated external analytics APIs to build a real-time data dashboard with interactive chart visualizers and metrics.",
    link: "https://data-dashboard-henna-nu.vercel.app/",
  },
  {
    id: "audiophile",
    imgSrc: "audiophile.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "Audiophile E-Commerce Store",
    description:
      "Built a fully functional e-commerce web application featuring dynamic cart state, checkout flows, and responsive UI.",
    link: "https://audicommerce.netlify.app/",
  },
  {
    id: "procleaning",
    imgSrc: "Cover.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "ProCleaning Services Platform",
    description:
      "Developed a modern, responsive front-end website for professional cleaning services with interactive booking previews.",
    link: "https://procleaningservices.netlify.app/",
  },
  {
    id: "monkevent",
    imgSrc: "techimg.png",
    category: "FRONTEND WEB DEVELOPMENT",
    title: "MonkEvent Tech Platform",
    description:
      "Designed and developed a landing page for tech events featuring dynamic scheduling and smooth animations.",
    link: "https://monkevent.netlify.app/",
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const sliderRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -440 : 440;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

  return (
    <motion.section
      id="portfolio"
      className={`relative w-full py-28 md:py-36 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? "bg-[#08090a] text-white" : "bg-[#f8f9fa] text-slate-900"
      }`}
      {...fadeSlideAnim}
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Header */}
        <motion.header
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6"
          {...fadeSlideAnim}
        >
          <div className="max-w-2xl">
            <span
              className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
                isDarkMode
                  ? "bg-white/10 text-gray-300"
                  : "bg-slate-200/70 text-slate-700"
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
              A curated selection of my digital craftsmanship across UI/UX design and modern web development.
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <motion.nav
            {...fadeSlideAnim}
            className="flex gap-3 items-center"
            aria-label="Portfolio navigation"
          >
            <button
              onClick={() => scroll("left")}
              className={`p-3.5 rounded-full transition-all duration-200 border ${
                isDarkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/15 text-white"
                  : "border-slate-200 bg-white hover:bg-slate-100 text-slate-800 shadow-sm"
              }`}
              aria-label="Previous project"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-3.5 rounded-full transition-all duration-200 border ${
                isDarkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/15 text-white"
                  : "border-slate-200 bg-white hover:bg-slate-100 text-slate-800 shadow-sm"
              }`}
              aria-label="Next project"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </motion.nav>
        </motion.header>
      </div>

      {/* Project Cards Slider */}
      <div className="relative w-full">
        {/* Soft side gradient fades */}
        <div
          className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-20 z-10 bg-gradient-to-r ${
            isDarkMode ? "from-[#08090a]" : "from-[#f8f9fa]"
          } to-transparent`}
        />
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-20 z-10 bg-gradient-to-l ${
            isDarkMode ? "from-[#08090a]" : "from-[#f8f9fa]"
          } to-transparent`}
        />

        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-6 sm:px-8 max-w-7xl mx-auto"
        >
          {portfolioData.map((project) => {
            const uiUx = isUiUxProject(project);

            return (
              <motion.article
                key={project.id}
                onClick={() => handleCardClick(project)}
                className={`group relative flex-shrink-0 w-[310px] sm:w-[400px] md:w-[440px] rounded-3xl overflow-hidden snap-center cursor-pointer transition-all duration-300 ease-out border ${
                  isDarkMode
                    ? "bg-[#111215] border-white/10 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/80 hover:border-white/20"
                    : "bg-white border-slate-200/80 shadow-lg shadow-slate-200/60 hover:shadow-xl hover:shadow-slate-300/60 hover:border-slate-300"
                }`}
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/5">
                  <img
                    src={project.imgSrc}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md transition-all duration-200 ${
                        isDarkMode
                          ? "bg-black/60 text-gray-200 border border-white/10"
                          : "bg-white/80 text-slate-800 border border-slate-200/60 shadow-sm"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Indicator Icon (Figma modal vs External link) */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div
                      className={`p-2.5 rounded-full backdrop-blur-md shadow-md ${
                        isDarkMode
                          ? "bg-black/70 text-white border border-white/10"
                          : "bg-white/90 text-slate-900 border border-slate-200"
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

                {/* Card Info Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:opacity-90 transition-opacity">
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed line-clamp-3 mb-6 ${
                        isDarkMode ? "text-gray-400" : "text-slate-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-dashed border-slate-200 dark:border-white/10">
                    <span
                      className={`text-xs font-semibold tracking-tight inline-flex items-center gap-1.5 transition-colors ${
                        isDarkMode
                          ? "text-white group-hover:text-gray-300"
                          : "text-slate-900 group-hover:text-slate-700"
                      }`}
                    >
                      {uiUx ? "View Figma Mockups" : "Visit Live Site"}
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
          })}
        </div>
      </div>

      {/* Interactive UI/UX Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
}