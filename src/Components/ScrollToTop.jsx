import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ScrollToTop() {
  const { isDarkMode } = useTheme();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-5 z-40 p-3 rounded-full border shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
        isDarkMode
          ? "bg-[#111216] border-white/15 text-white hover:bg-white/10"
          : "bg-white border-black/15 text-black hover:bg-black/5"
      }`}
    >
      <ArrowUp size={16} />
    </button>
  );
}
