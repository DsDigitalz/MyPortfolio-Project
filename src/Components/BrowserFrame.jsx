import React from "react";
import { FaLock } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

export default function BrowserFrame({ src, alt, url = "app.design.internal", className = "" }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border ${
        isDarkMode
          ? "bg-[#0d0e12] border-white/10 shadow-black/60"
          : "bg-white border-slate-200/80 shadow-slate-300/50"
      } ${className}`}
    >
      {/* Browser Chrome Header */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b select-none ${
          isDarkMode
            ? "bg-[#16181d] border-white/10 text-gray-400"
            : "bg-slate-100 border-slate-200 text-slate-500"
        }`}
      >
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2 w-16">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-sm" />
        </div>

        {/* Mock Address Bar */}
        <div
          className={`flex items-center justify-center gap-2 px-4 py-1 rounded-md text-xs font-mono tracking-tight max-w-md w-full mx-4 overflow-hidden border ${
            isDarkMode
              ? "bg-black/30 border-white/5 text-gray-400"
              : "bg-white border-slate-200 text-slate-600 shadow-inner"
          }`}
        >
          <FaLock className="text-[10px] opacity-60 flex-shrink-0" />
          <span className="truncate opacity-85">{url}</span>
        </div>

        {/* Empty flex balance element */}
        <div className="w-16 hidden sm:block" />
      </div>

      {/* Screen Content Container */}
      <div className="relative w-full overflow-hidden bg-black/5">
        <img
          src={src}
          alt={alt || "Project Screen Mockup"}
          className="w-full h-auto object-cover block"
          loading="lazy"
        />
      </div>
    </div>
  );
}
