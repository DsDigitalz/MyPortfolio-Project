import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward, MdArrowDownward } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  // --- Typewriter Logic States ---
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(
    () => ["Product Designer", "Software Engineer", "Web Instructor"],
    []
  );

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(500);
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

  const socials = [
    {
      icon: <ImLinkedin />,
      link: "https://www.linkedin.com/in/dsdigitalz/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/DsDigitalz",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#08090b] text-white" : "bg-[#fbfbfd] text-slate-900"
      }`}
    >
      {/* Background layer: dot grid + glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "opacity-[0.06]" : "opacity-[0.4]"
          }`}
          style={{
            backgroundImage: `radial-gradient(${
              isDarkMode ? "#ffffff" : "#94a3b8"
            } 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div
          className={`absolute -top-40 -left-32 w-[32rem] h-[32rem] blur-[130px] rounded-full opacity-25 ${
            isDarkMode ? "bg-yellow-500" : "bg-sky-400"
          }`}
        />
        <div
          className={`absolute -bottom-32 right-0 w-[36rem] h-[36rem] blur-[160px] rounded-full opacity-[0.12] ${
            isDarkMode ? "bg-blue-600" : "bg-purple-300"
          }`}
        />
      </div>

      <div className="container py-32 mx-auto max-w-7xl px-6 lg:px-12 z-10 w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 lg:gap-20">
          {/* Hero Image Section */}
          <aside className="relative flex-1 flex justify-center lg:justify-end">
            <motion.div className="relative group" {...fadeInSlideUp}>
              {/* Rotating dashed ring */}
              <motion.div
                className={`absolute -inset-6 rounded-[2rem] border border-dashed ${
                  isDarkMode ? "border-yellow-500/30" : "border-sky-400/40"
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              {/* Soft glow behind image */}
              <div
                className={`absolute -inset-4 rounded-[1.75rem] blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-50 ${
                  isDarkMode ? "bg-yellow-500" : "bg-sky-400"
                }`}
              />
              <div
                className={`relative rounded-[1.75rem] p-2 ${
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-sm border border-white/10"
                    : "bg-white border border-slate-200 shadow-xl"
                }`}
              >
                <motion.img
                  key={isDarkMode ? "dark" : "light"}
                  src={heroImageSrc}
                  alt="Daniel Sanu - Professional Portfolio Image"
                  className="relative z-10 w-60 md:w-72 lg:w-[360px] xl:w-[400px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Floating status badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className={`absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap ${
                  isDarkMode
                    ? "bg-[#111214] border border-white/10 text-gray-200"
                    : "bg-white border border-slate-200 text-slate-700"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to freelance work  
              </motion.div> */}
            </motion.div>
          </aside>

          {/* Hero Text Content */}
          <div className="flex-1 space-y-7 text-center lg:text-left max-w-2xl">
            <header>
              <motion.div {...fadeInSlideRight}>
                <span
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase ${
                    isDarkMode
                      ? "bg-white/5 border border-white/10 text-yellow-500"
                      : "bg-sky-50 border border-sky-100 text-sky-600"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDarkMode ? "bg-yellow-500" : "bg-sky-500"
                    }`}
                  />
                  Available for Freelance
                </span>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  Hi, I'm{" "}<br/>
                
                  <span
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${
                      isDarkMode
                        ? "from-yellow-400 via-yellow-200 to-yellow-500"
                        : "from-sky-600 via-teal-500 to-sky-600"
                    }`}
                  >
                    Daniel Sanu
                  </span>
                </h1>
              </motion.div> 

              {/* Typewriter Effect */}
              <motion.div
                className="mt-6 flex items-center justify-center lg:justify-start gap-2"
                {...fadeInSlideUp}
              >
                <p
                  className={`text-lg md:text-2xl font-semibold tracking-tight flex items-center ${
                    isDarkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  <span
                    className={isDarkMode ? "text-white" : "text-slate-900"}
                  >
                    I'm a&nbsp;
                  </span>
                  <span
                    className={
                      isDarkMode ? "text-yellow-500" : "text-sky-500"
                    }
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
              className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
              {...fadeInSlideUp}
            >
              I design clean, easy-to-use apps and websites. I use both my
              design skills and coding knowledge to turn hard problems into
              simple, working digital tools.
            </motion.p>

            {/* CTA & Socials */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-8 pt-2 justify-center lg:justify-start"
              {...fadeInSlideUp}
            >
              <button
                onClick={handleScrollToContact}
                className={`group relative overflow-hidden rounded-full px-8 py-4 font-bold text-base transition-all duration-300 ${
                  isDarkMode
                    ? "bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.6)]"
                    : "bg-sky-600 text-white hover:bg-sky-700 hover:shadow-[0_0_30px_-5px_rgba(2,132,199,0.5)]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Let's Collaborate
                  <MdArrowOutward className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </button>

              <div className="flex items-center gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex items-center justify-center w-11 h-11 rounded-full text-xl transition-all duration-300 hover:-translate-y-1 ${
                      isDarkMode
                        ? "bg-white/5 border border-white/10 text-gray-300 hover:text-yellow-500 hover:border-yellow-500/40"
                        : "bg-white border border-slate-200 text-slate-500 hover:text-sky-600 hover:border-sky-300 shadow-sm"
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className={`hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase ${
          isDarkMode ? "text-gray-500" : "text-slate-400"
        }`}
      >
        Scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <MdArrowDownward />
        </motion.div>
      </motion.div>
    </section>
  );
}