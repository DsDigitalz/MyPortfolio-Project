import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function WhatsAppButton() {
  const { isDarkMode } = useTheme();

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-5 z-40">
      <a
        href="https://wa.me/2349137846680"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full border shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isDarkMode
            ? "bg-[#0d0e12]/90 backdrop-blur-md border-white/15 text-white hover:border-emerald-500/40"
            : "bg-white/95 backdrop-blur-md border-black/10 text-black hover:border-emerald-500/40 shadow-black/10"
        }`}
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <FaWhatsapp className="text-emerald-400 text-lg" />
        <span className="hidden sm:inline text-xs font-semibold tracking-tight">
          Chat with Daniel
        </span>
      </a>
    </aside>
  );
}
