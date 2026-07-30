import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";
import BrowserFrame from "./BrowserFrame";

export default function ProjectModal({ project, onClose }) {
  const { isDarkMode } = useTheme();
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Lock body scroll and register Escape key listener
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Reset active screen when project changes
  useEffect(() => {
    setActiveScreenIndex(0);
  }, [project]);

  if (!project) return null;

  const screens = project.screens || project.gallery || [];
  const currentScreen = screens[activeScreenIndex] || {
    src: project.imgSrc,
    title: project.title,
    caption: project.description,
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border z-10 ${
            isDarkMode
              ? "bg-[#0b0c0e] border-white/10 text-white"
              : "bg-white border-slate-200 text-slate-900"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between px-6 py-5 md:px-8 md:py-6 border-b flex-shrink-0 ${
              isDarkMode ? "border-white/10 bg-[#0d0e12]" : "border-slate-100 bg-slate-50/80"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${
                    isDarkMode
                      ? "bg-white/10 text-gray-300"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {project.category}
                </span>
                {screens.length > 1 && (
                  <span className="text-xs text-gray-400 font-mono">
                    {activeScreenIndex + 1} of {screens.length} screens
                  </span>
                )}
              </div>
              <h2 id="modal-title" className="text-xl md:text-2xl font-bold tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 border ${
                    isDarkMode
                      ? "border-white/15 bg-white/5 hover:bg-white/10 text-white"
                      : "border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  <span>Open in Figma</span>
                  <FaArrowUpRightFromSquare className="text-[11px]" />
                </a>
              )} */}

              <button
                onClick={onClose}
                className={`p-2.5 rounded-full transition-all duration-200 ${
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
                    : "bg-slate-200/80 hover:bg-slate-300 text-slate-600 hover:text-slate-900"
                }`}
                aria-label="Close modal"
              >
                <FaXmark className="text-lg" />
              </button>
            </div>
          </div>

          {/* Modal Content Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-hide">
            {/* Project Overview */}
            <div className="max-w-3xl">
              <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-slate-600"}`}>
                {project.description}
              </p>

              {/* Mobile-only Figma Link */}
              {project.link && (
                <div className="mt-4 sm:hidden">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                      isDarkMode
                        ? "border-white/15 bg-white/5 hover:bg-white/10 text-white"
                        : "border-slate-300 bg-slate-100 text-slate-800"
                    }`}
                  >
                    <span>Open in Figma</span>
                    <FaArrowUpRightFromSquare className="text-[11px]" />
                  </a>
                </div>
              )}
            </div>

            {/* Screen Browser Mockup Display */}
            <div className="relative group">
              <BrowserFrame
                src={currentScreen.src}
                alt={currentScreen.title || project.title}
                url={project.mockUrl || "figma.com/design"}
              />

              {/* Screen Nav Buttons (if multiple screens) */}
              {screens.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-200 ${
                      isDarkMode
                        ? "bg-black/60 hover:bg-black/80 text-white border border-white/10"
                        : "bg-white/80 hover:bg-white text-slate-800 border border-slate-200"
                    }`}
                    aria-label="Previous screen"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={handleNext}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-200 ${
                      isDarkMode
                        ? "bg-black/60 hover:bg-black/80 text-white border border-white/10"
                        : "bg-white/80 hover:bg-white text-slate-800 border border-slate-200"
                    }`}
                    aria-label="Next screen"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </>
              )}
            </div>

            {/* Screen Caption & Navigation Dots */}
            {screens.length > 0 && (
              <div className="space-y-4">
                {/* Dots / Tabs indicator */}
                {screens.length > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-2">
                    {screens.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === activeScreenIndex
                            ? isDarkMode
                              ? "w-8 bg-white"
                              : "w-8 bg-slate-900"
                            : isDarkMode
                            ? "w-2 bg-white/20 hover:bg-white/40"
                            : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to screen ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Screen metadata */}
                {currentScreen.title && (
                  <div
                    className={`p-5 rounded-2xl border ${
                      isDarkMode
                        ? "bg-white/[0.03] border-white/5"
                        : "bg-slate-50 border-slate-200/60"
                    }`}
                  >
                    <h4 className="text-base font-semibold mb-1 tracking-tight">
                      {currentScreen.title}
                    </h4>
                    {currentScreen.caption && (
                      <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
                        {currentScreen.caption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
