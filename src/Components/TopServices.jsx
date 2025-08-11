import React from "react";
import { motion } from "framer-motion"; // Import motion
// import web from "./public/web.png";
// import mobile from "./public/mobile.png";
// import code from "./public/code.png";

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

export default function TopServices() {
  return (
    <section
      className="bg-zinc-100  pt-10 flex flex-col items-center pb-30"
      id="services"
    >
      <div className="mt-10">
        {/* Animate the main heading */}
        <motion.h1
          className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Top <span className="text-[#02BDEA]">Services</span>
        </motion.h1>

        {/* Animate the grid container and stagger its children */}
        <motion.div
          className="top_services lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-10 mt-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animate each service card */}
          <motion.div
            className="w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300"
            variants={cardVariants}
          >
            <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
              <div>
                <img src="web.png" alt="" />
              </div>
              <h1 className="font-semibold text-2xl text-center">
                Responsive Web Design
              </h1>
              <p className="text-center">
                Ensuring that designs are adaptable across various devices and
                screen sizes for a consistent user experience. Crafting
                aesthetically pleasing interfaces that align with brand identity
                and enhance user engagement.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300"
            variants={cardVariants}
          >
            <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
              <div>
                <img src="mobile.png" alt="" />
              </div>
              <h1 className="font-semibold text-2xl text-center">
                Mobile App Design
              </h1>
              <p className="text-center">
                Ensuring the app is optimized for various screen sizes and
                orientations, providing a seamless experience across devices.
                Crafting visually appealing interfaces that align with brand
                identity and enhance user engagement
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-[332px] bg-white h-[446px] mx-auto flex justify-center py-10 rounded-2xl hover:shadow-2xl hover:shadow-sky-200 hover:scale-103 hover:transition-all duration-300"
            variants={cardVariants}
          >
            <div className="w-[270px] flex flex-col items-center gap-5 leading-7">
              <div>
                <img src="code.png" alt="" />
              </div>
              <h1 className="font-semibold text-2xl text-center">
                Web (Front-end) Development
              </h1>
              <p className="text-center">
                Creating responsive and interactive web applications that
                deliver seamless user experiences across all devices. By
                leveraging modern technologies such as HTML, CSS, and JavaScript
                framework (like React)
              </p>
            </div>
          </motion.div>
          {/* ... (The commented-out code is omitted) ... */}
        </motion.div>
      </div>
    </section>
  );
}