import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

export default function ScrollToTop() {
  const { isDarkMode } = useTheme();
  const [showScrollButton, setShowScrollButton] = useState(false); // Changed to false

  function toggleScrollButton() {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollButton);

    return () => window.removeEventListener("scroll", toggleScrollButton);
  }, []);

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`w-fit rounded-full text-3xl text-white p-1 md:p-3 right-5 bottom-25 shadow-2xl fixed cursor-pointer transition duration-500 ${
          showScrollButton ? "opacity-100" : "opacity-0"
        } ${
          isDarkMode
            ? "bg-[#D3AF37] active:bg-amber-300"
            : "bg-sky-400 active:bg-sky-200"
        }`}
      >
        <IoIosArrowRoundUp
          className={isDarkMode ? "text-black" : "text-white"}
        />
      </button>
    </div>
  );
}