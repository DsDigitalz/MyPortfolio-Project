import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

// Define animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

// Define variants for child elements (e.g., text, skills)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { isDarkMode } = useTheme(); // Access the dark mode state

  return (
    <section
      className={` flex flex-col items-center pt-10 lg:pt-20 pb-20 px-4 ${
        isDarkMode ? "bg-slate-950 text-white" : "bg-zinc-50 text-black"
      }`}
      id="about"
    >
      <motion.h1
        className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About{" "}
        <span className={isDarkMode ? "text-[#D3AF37]" : "text-[#02BDEA]"}>
          Me
        </span>
      </motion.h1>

      <motion.div
        className={` w-full max-w-[1140px]  rounded-2xl flex flex-col items-center p-8 md:p-10 ${
          isDarkMode ? "bg-zinc-900 shadow-zinc-700" : "bg-white shadow-sky-200"
        } shadow-2xl`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className={`text-lg font-semibold text-center mt-5 w-full max-w-2xl ${
            isDarkMode ? "text-gray-300" : "text-black"
          }`}
          variants={itemVariants}
        >
          I am a UI/UX, Web Designer and front-end software developer based in
          Nigeria. Has a background in Graphic Design
        </motion.p>
        <motion.p
          className={`text-base text-center mt-5 leading-7 w-full max-w-3xl ${
            isDarkMode ? "text-gray-400" : "text-black"
          }`}
          variants={itemVariants}
        >
          I am a UI/UX, Web designer and front-end software developer based in
          Nigeria looking for exciting opportunities. Has Graphic Design
          background and likes to focus on accessibility when designing or
          developing, i am passionate and curious about solving problems and
          giving nothing but the best. Driven by a commitment to continuous
          learning and staying updated with industry trends, I am dedicated to
          delivering high-quality work that exceeds expectations. Whether it's
          developing a dynamic web application or designing a seamless user
          experience, I am passionate about creating solutions that make a
          positive impact.
        </motion.p>

        <div className="flex flex-col items-center gap-5 mt-10 w-full">
          <motion.h1
            className={`font-semibold text-2xl md:text-3xl lg:text-4xl text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            variants={itemVariants}
          >
            My Skills
          </motion.h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "HTML5",
              "CSS",
              "Javascript",
              "Typescript",
              "Bootstrap",
              "TailwindCSS",
              "React.JS",
              "Figma",
              "Adobe Xd",
              "Framer",
              "Photoshop",
              "WordPress",
              "Elementor",
              "Git/Github",
            ].map((skill, index) => (
              <motion.p
                key={index}
                className={`rounded-lg py-1 px-4 ${
                  isDarkMode
                    ? "bg-zinc-800 text-gray-300"
                    : "bg-sky-50 text-black"
                }`}
                variants={itemVariants}
              >
                {skill}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-10 w-full">
          <motion.h1
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            variants={itemVariants}
          >
            My Experience
          </motion.h1>
          <motion.p
            className={`text-base text-center mt-5 leading-7 w-full max-w-3xl ${
              isDarkMode ? "text-gray-400" : "text-black"
            }`}
            variants={itemVariants}
          >
            Collaborated with cross-functional teams to design and develop
            user-friendly web applications, ensuring a seamless integration of
            UI/UX principles with front-end development. Conducted user research
            and usability testing to gather insights, which informed design
            decisions and improved overall user satisfaction. Created
            wireframes, prototypes, and high-fidelity mockups using tools such
            as Figma and Adobe XD, translating complex ideas into intuitive
            interfaces.
          </motion.p>
        </div>

        <motion.a
          href="My-CV.pdf"
          download="My-CV.pdf"
          className={`rounded-full w-[180px] p-3 mt-10 active:bg-[#059fc6] cursor-pointer flex items-center gap-2 justify-center text-white ${
            isDarkMode ? "bg-[#D3AF37] text-black" : "bg-[#02BDEA]"
          }`}
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <p
            className={`text-base font-semibold ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          >
            Download CV
          </p>
          <IoDownloadOutline
            className={`text-2xl rounded-full p-1 ${
              isDarkMode ? "bg-[#D3AF37] text-black" : "bg-sky-300"
            }`}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
