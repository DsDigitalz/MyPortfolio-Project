import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";

// Define animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of child elements
    },
  },
};

// Define variants for the individual service cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Array of card data
const cards = [
  {
    icon: CgWebsite,
    title: "Responsive Web Design",
    description:
      "Ensuring that designs are adaptable across various devices and screen sizes for a consistent user experience. Crafting aesthetically pleasing interfaces that align with brand identity and enhance user engagement.",
  },
  {
    icon: MdOutlineAppSettingsAlt,
    title: "Mobile App Design",
    description:
      "Ensuring the app is optimized for various screen sizes and orientations, providing a seamless experience across devices. Crafting visually appealing interfaces that align with brand identity and enhance user engagement",
  },
  {
    icon: IoCodeSlash,
    title: "Web (Front-end) Development",
    description:
      "Creating responsive and interactive web applications that deliver seamless user experiences across all devices. By leveraging modern technologies such as HTML, CSS, and JavaScript framework (like React)",
  },
];

export default function TopServices() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`pt-10 lg:pt-20 flex flex-col items-center pb-30 ${
        isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
      }`}
      id="services"
    >
      <div>
        <motion.h1
          className={`mb-7 text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Top{" "}
          <span className={isDarkMode ? "text-[#FFD700]" : "text-[#02BDEA]" } >
            Services
          </span>
        </motion.h1>

        <motion.div
          className="top_services grid lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-10 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Map through the cards array and render each card */}
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className={` w-[332px] h-[446px] mx-auto flex justify-center py-10 rounded-2xl hover:shadow-2xl hover:scale-103 hover:transition-all duration-300 ${
                  isDarkMode
                    ? "bg-zinc-900 text-white border border-zinc-600 hover:shadow-zinc-700"
                    : "bg-white text-black hover:shadow-sky-200"
                }`}
                variants={cardVariants}
              >
                <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
                  <div>
                    <IconComponent
                      className={`text-4xl p-2 rounded-full ${
                        isDarkMode
                          ? "text-[#FFD700] bg-[#ffd9002e]"
                          : "text-[#02BDEA] bg-[#b1e8f77e]"
                      }`}
                    />
                  </div>
                  <h1 className="font-semibold text-2xl text-center">
                    {card.title}
                  </h1>
                  <p className="text-center">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
