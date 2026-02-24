"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsTwitterX, BsSend } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      });
  };

  // Scroll Animation: Fade + Slide Up
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

  return (
    <section
      id="con"
      className={`py-20 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact{" "}
            <span className={isDarkMode ? "text-yellow-500" : "text-sky-500"}>
              Me
            </span>
          </motion.h2>
          <motion.div
            className={`h-1.5 w-20 mx-auto mt-4 rounded-full ${
              isDarkMode ? "bg-yellow-500" : "bg-sky-500"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1 }}
          />
        </header>

        <motion.div
          className={`grid lg:grid-cols-2 gap-12 p-8 md:p-14 rounded-3xl border transition-all ${
            isDarkMode
              ? "bg-zinc-900/50 border-white/10 shadow-2xl shadow-black"
              : "bg-white border-slate-200 shadow-xl shadow-slate-200"
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
                opportunities? I'd love to hear from you! Let’s build something
                amazing together.
              </p>
            </div>

            <address className="not-italic space-y-6">
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
                <div key={idx} className="flex items-center gap-4 group">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isDarkMode
                        ? "bg-white/5 text-yellow-500"
                        : "bg-sky-50 text-sky-500"
                    }`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 block">
                      {info.label}
                    </span>
                    <span className="font-semibold text-lg">{info.value}</span>
                  </div>
                </div>
              ))}
            </address>

            {/* Social Links */}
            <nav className="flex gap-5 pt-6">
              {[
                { icon: <BsTwitterX />, link: "https://x.com/daniel_san4975" },
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
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`text-2xl p-3 rounded-full transition-all ${
                    isDarkMode
                      ? "bg-white/5 hover:text-yellow-500"
                      : "bg-slate-100 hover:text-sky-500"
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
                  className={`p-3 rounded-xl border transition-all outline-none ${
                    isDarkMode
                      ? "bg-zinc-800/50 border-white/10 focus:border-yellow-500"
                      : "bg-slate-50 border-slate-200 focus:border-sky-500"
                  }`}
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
                  className={`p-3 rounded-xl border transition-all outline-none ${
                    isDarkMode
                      ? "bg-zinc-800/50 border-white/10 focus:border-yellow-500"
                      : "bg-slate-50 border-slate-200 focus:border-sky-500"
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                className={`p-3 rounded-xl border transition-all outline-none ${
                  isDarkMode
                    ? "bg-zinc-800/50 border-white/10 focus:border-yellow-500"
                    : "bg-slate-50 border-slate-200 focus:border-sky-500"
                }`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                className={`p-3 rounded-xl border transition-all outline-none resize-none ${
                  isDarkMode
                    ? "bg-zinc-800/50 border-white/10 focus:border-yellow-500"
                    : "bg-slate-50 border-slate-200 focus:border-sky-500"
                }`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-4 py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${
                isDarkMode
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-sky-500 text-white hover:bg-sky-600 shadow-sky-100"
              }`}
            >
              Send Message
              <BsSend className="text-xl" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
