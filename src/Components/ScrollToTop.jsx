import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(true);
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
      {/* {showScrollButton && ( Conditonal rendering of the button */}
      <button
        onClick={scrollToTop}
        className={`bg-zinc-50 w-fit rounded-full text-3xl text-zinc-500 p-1 right-4 bottom-4 shadow-2xl fixed cursor-pointer active:bg-zinc-200 transition duration-500 ${
          showScrollButton ? "opacity-100": "opacity-0"
        }`}
      >
        <IoIosArrowRoundUp />
      </button>
    </div>
  );
}
