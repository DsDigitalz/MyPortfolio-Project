"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_dohjj5e",
        "template_c8dgvxa",
        form.current,
        "mh5xhlhYMsRLqLOYR"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message, please try again. Error: " + error.text);
      })
      .finally(() => setIsSending(false));
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    viewport: { once: true, amount: 0.2 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const inputClasses = (dark) =>
    `p-3.5 rounded-xl border transition-all outline-none ${
      dark
        ? "bg-white/[0.03] border-white/10 focus:border-yellow-500 focus:bg-white/[0.06] placeholder:text-gray-600"
        : "bg-slate-50 border-slate-200 focus:border-sky-500 focus:bg-white placeholder:text-slate-400"
    }`;

  return (
    <section
      id="con"
      className={`relative py-24 px-6 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute inset-0 ${isDarkMode ? "opacity-[0.05]" : "opacity-[0.35]"}`}
          style={{
            backgroundImage: `radial-gradient(${
              isDarkMode ? "#ffffff" : "#94a3b8"
            } 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        <div
          className={`absolute bottom-0 right-0 w-[28rem] h-[28rem] blur-[140px] rounded-full opacity-10 ${
            isDarkMode ? "bg-yellow-500" : "bg-sky-400"
          }`}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wider uppercase ${
              isDarkMode
                ? "bg-white/5 border border-white/10 text-yellow-500"
                : "bg-sky-50 border border-sky-100 text-sky-600"
            }`}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact{" "}
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
              Me
            </span>
          </motion.h2>
        </header>

        <motion.div
          className={`grid lg:grid-cols-2 gap-12 p-8 md:p-14 rounded-3xl border transition-all ${
            isDarkMode
              ? "bg-white/[0.03] border-white/10 shadow-2xl shadow-black/40"
              : "bg-white border-slate-200 shadow-xl shadow-slate-200/70"
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side: Contact Information */}
          <motion.div variants={scrollReveal} className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-yellow-500" : "text-sky-600"
                }`}
              >
                Let's Connect
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Have a project in mind or want to discuss potential
                opportunities? I'd love to hear from you! Let's build
                something amazing together.
              </p>
            </div>

            <address className="not-italic space-y-5">
              {[
                {
                  icon: <MdEmail />,
                  label: "Email",
                  value: "sanudaniel46@gmail.com",
                },
                {
                  icon: <FaPhoneAlt />,
                  label: "Phone No",
                  value: "+2349137846680",
                },
                {
                  icon: <IoLocationSharp />,
                  label: "Location",
                  value: "Lagos, Nigeria",
                },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-3 rounded-2xl transition-colors ${
                    isDarkMode ? "hover:bg-white/[0.04]" : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl text-lg shrink-0 ${
                      isDarkMode
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-sky-50 text-sky-500"
                    }`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <span
                      className={`text-xs uppercase tracking-wider block ${
                        isDarkMode ? "text-gray-500" : "text-slate-400"
                      }`}
                    >
                      {info.label}
                    </span>
                    <span className="font-semibold text-base md:text-lg">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </address>

            {/* Social Links */}
            <nav className="flex gap-4 pt-4">
              {[
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
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-xl transition-all ${
                    isDarkMode
                      ? "bg-white/5 border border-white/10 hover:text-yellow-500 hover:border-yellow-500/40"
                      : "bg-slate-100 border border-slate-200 hover:text-sky-500 hover:border-sky-300"
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={scrollReveal}
            className="flex flex-col gap-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Your Name"
                  className={inputClasses(isDarkMode)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className={inputClasses(isDarkMode)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                className={inputClasses(isDarkMode)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                className={`resize-none ${inputClasses(isDarkMode)}`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: isSending ? 1 : 0.98 }}
              className={`mt-4 py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                isDarkMode
                  ? "bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-60"
                  : "bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-60"
              } ${
                isSending
                  ? ""
                  : isDarkMode
                    ? "hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.6)]"
                    : "hover:shadow-[0_0_30px_-5px_rgba(2,132,199,0.5)]"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
              <BsSend className={`text-xl ${isSending ? "animate-pulse" : ""}`} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}