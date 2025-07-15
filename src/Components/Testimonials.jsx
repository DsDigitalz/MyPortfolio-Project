import React, { useState } from "react";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";

const testimonials = [
  {
    text: "I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing.",
    name: "James Brown",
  },
  {
    text: "Daniel's attention to detail is unmatched. He revamped our website and increased our conversions by 40%.",
    name: "Sarah Collins",
  },
  {
    text: "Amazing work! Clean code, great communication, and timely delivery. Highly recommended.",
    name: "Michael Osei",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full pt-10 pb-20 flex flex-col items-center bg-zinc-50">
      <div className="mt-10">
        <h1 className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center">
          My <span className="text-[#02BDEA]">Testimonials</span>
        </h1>

        <div className="mt-10 w-[80%] mx-auto border-y-1 py-3 relative transition-all duration-300 ease-in-out">
          <p className="text-center transition-opacity duration-300 ease-in-out">
            {testimonials[currentIndex].text}
          </p>
          <p className="text-center mt-7 font-semibold">
            {testimonials[currentIndex].name}
          </p>

          {/* Right Arrow */}
          <button onClick={handleNext}>
            <IoArrowForwardOutline className="bg-zinc-200 text-zinc-600 text-[45px] rounded-full p-3 absolute top-12 -right-7 cursor-pointer active:bg-zinc-100" />
          </button>

          {/* Left Arrow */}
          <button onClick={handlePrev}>
            <IoArrowBack className="bg-zinc-200 text-zinc-600 text-[45px] rounded-full p-3 absolute top-12 -left-7 cursor-pointer active:bg-zinc-100" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
