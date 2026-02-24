import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  // --- Typewriter Logic States ---
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = [
    "Product Designer",
    "Frontend Engineer",
    "Frontend Instructor",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1),
      );

      // Speed up when deleting, slow down when typing
      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Brief pause before next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("con");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroImageSrc = isDarkMode ? "heroimg.png" : "heroimg3.png";

  // --- Animation Variants (Fade + Slide) ---
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true, amount: 0.2 },
  };

  const fadeInSlideRight = {
    initial: { opacity: 0, x: -50 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
    viewport: { once: true },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#0a0a0a] text-white" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* Decorative Background Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className={`absolute -top-24 -left-24 w-96 h-96 blur-[120px] rounded-full opacity-20 ${
            isDarkMode ? "bg-yellow-500" : "bg-sky-400"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] blur-[150px] rounded-full opacity-10 ${
            isDarkMode ? "bg-blue-600" : "bg-purple-300"
          }`}
        />
      </div>

      <div className="container py-40 mx-auto max-w-7xl px-6 lg:px-12 z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
          {/* Hero Image Section */}
          <aside className="relative flex-1 flex justify-center lg:justify-end">
            <motion.div className="relative group" {...fadeInSlideUp}>
              <div
                className={`absolute -inset-4 border-2 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                  isDarkMode ? "border-yellow-500" : "border-sky-500"
                }`}
              />
              <motion.img
                key={isDarkMode ? "dark" : "light"}
                src={heroImageSrc}
                alt="Daniel Sanu - Professional Portfolio Image"
                className="relative z-10 w-64 md:w-80 lg:w-[400px] xl:w-[450px] object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </aside>

          {/* Hero Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <header>
              <motion.div {...fadeInSlideRight}>
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 tracking-wider uppercase ${
                    isDarkMode
                      ? "bg-white/5 text-yellow-500"
                      : "bg-sky-100 text-sky-600"
                  }`}
                >
                  Available for Freelance
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  Hi, I'm <br />
                  <span
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${
                      isDarkMode
                        ? "from-yellow-400 via-yellow-200 to-yellow-600"
                        : "from-sky-600 to-teal-500"
                    }`}
                  >
                    Daniel Sanu
                  </span>
                </h1>
              </motion.div>

              {/* Character Typewriter Effect */}
              <motion.div
                className="mt-6 flex items-center justify-center lg:justify-start gap-2"
                {...fadeInSlideUp}
              >
                <p
                  className={`text-lg md:text-xl font-bold tracking-tight uppercase flex items-center ${
                    isDarkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    I'm a
                  </span>
                  <span
                    className={isDarkMode ? "text-yellow-500" : "text-sky-500"}
                  >
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className={`inline-block ml-1 w-[3px] h-[1.1em] align-middle ${
                      isDarkMode ? "bg-yellow-500" : "bg-sky-500"
                    }`}
                  />
                </p>
              </motion.div>
            </header>

            <motion.p
              className={`text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
              {...fadeInSlideUp}
            >
              I specialize in crafting high-fidelity digital interfaces and
              seamless user experiences. By blending technical expertise with
              creative intuition, I turn complex problems into elegant
              solutions.
            </motion.p>

            {/* CTA & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 justify-center lg:justify-start">
              <motion.button
                onClick={handleScrollToContact}
                className={`group relative overflow-hidden rounded-full px-8 py-4 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "bg-sky-600 text-white hover:bg-sky-700"
                }`}
                {...fadeInSlideUp}
              >
                <span className="relative z-10 flex items-center gap-3 font-bold text-base">
                  Let's Collaborate
                  <MdArrowOutward className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </motion.button>

              <nav className="flex items-center gap-6">
                {[
                  // {
                  //   icon: <BsTwitterX />,
                  //   link: "https://x.com/daniel_san4975",
                  // },
                  {
                    icon: <ImLinkedin />,
                    link: "https://www.linkedin.com/in/dsdigitalz/",
                  },
                  { icon: <FaGithub />, link: "https://github.com/DsDigitalz" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-colors duration-300 hover:scale-110 transform ${
                      isDarkMode
                        ? "text-gray-400 hover:text-yellow-500"
                        : "text-slate-400 hover:text-sky-600"
                    }`}
                    {...fadeInSlideUp}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
