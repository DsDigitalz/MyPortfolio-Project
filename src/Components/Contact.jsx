"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_dohjj5e",
        "template_c8dgvxa",
        formRef.current,
        "mh5xhlhYMsRLqLOYR"
      )
      .then(() => {
        setIsSuccess(true);
        formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 6000);
      })
      .catch(() => {
        setErrorMessage("Failed to send message. Please reach out via email directly.");
      })
      .finally(() => setIsSending(false));
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    viewport: { once: true, amount: 0.15 },
  };

  const inputStyles = `w-full px-4 py-3 rounded-2xl text-sm transition-all outline-none border ${
    isDarkMode
      ? "bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 focus:border-white/40 focus:bg-white/[0.05]"
      : "bg-black/[0.02] border-black/10 text-black placeholder:text-gray-400 focus:border-black/40 focus:bg-white"
  }`;

  return (
    <section
      id="contact"
      className={`relative py-28 sm:py-36 px-6 sm:px-12 border-t transition-colors duration-500 overflow-hidden ${
        isDarkMode
          ? "bg-black border-white/5 text-white"
          : "bg-[#fafaf9] border-black/5 text-black"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] rounded-full blur-[180px] opacity-15 ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Massive Reference Signature CTA Header */}
        <motion.div
          {...scrollReveal}
          className="text-center max-w-4xl mx-auto mb-20 sm:mb-24"
        >
          <span
            className={`text-xs font-semibold tracking-widest uppercase block mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15]">
            Designed with intention.{" "}
            <span className="font-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl block sm:inline">
              Built for impact.
            </span>
          </h2>
          <p
            className={`mt-6 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Thanks for stopping by. I hope we get the chance to build something
            remarkable together.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:sanudaniel46@gmail.com"
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/5 hover:scale-[1.02]"
                  : "bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/10 hover:scale-[1.02]"
              }`}
            >
              <Calendar size={15} />
              <span>Book a Free Intro Call</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://wa.me/2349137846680"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25 text-white"
                  : "bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/25 text-black"
              }`}
            >
              <FaWhatsapp size={15} className="text-emerald-400" />
              <span>Quick WhatsApp Chat</span>
            </a>
          </div>
        </motion.div>

        {/* Dual Interaction Grid: Contact Information & Send Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Direct Reachout Info */}
          <motion.div
            {...scrollReveal}
            className={`lg:col-span-5 p-8 sm:p-10 rounded-3xl border flex flex-col justify-between ${
              isDarkMode
                ? "bg-[#0c0d10] border-white/10 shadow-xl shadow-black/70"
                : "bg-white border-black/10 shadow-md shadow-black/5"
            }`}
          >
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Let's start a conversation
              </h3>
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Whether you have an upcoming project, need a design audit, or
                want to explore full-time engineering contracts, I’m always open
                to discussing high-impact opportunities.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sanudaniel46@gmail.com"
                  className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-colors ${
                    isDarkMode
                      ? "bg-white/[0.02] border-white/5 hover:border-white/20 text-gray-300 hover:text-white"
                      : "bg-black/[0.02] border-black/5 hover:border-black/20 text-gray-700 hover:text-black"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 text-white"
                        : "bg-black/5 border-black/10 text-black"
                    }`}
                  >
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 block">
                      Email
                    </span>
                    <span className="text-sm font-semibold">
                      sanudaniel46@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+2349137846680"
                  className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-colors ${
                    isDarkMode
                      ? "bg-white/[0.02] border-white/5 hover:border-white/20 text-gray-300 hover:text-white"
                      : "bg-black/[0.02] border-black/5 hover:border-black/20 text-gray-700 hover:text-black"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 text-white"
                        : "bg-black/5 border-black/10 text-black"
                    }`}
                  >
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 block">
                      Phone & WhatsApp
                    </span>
                    <span className="text-sm font-semibold">
                      +234 913 784 6680
                    </span>
                  </div>
                </a>

                <div
                  className={`flex items-center gap-3.5 p-3 rounded-2xl border ${
                    isDarkMode
                      ? "bg-white/[0.02] border-white/5 text-gray-300"
                      : "bg-black/[0.02] border-black/5 text-gray-700"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 text-white"
                        : "bg-black/5 border-black/10 text-black"
                    }`}
                  >
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold">
                      Lagos, Nigeria (UTC+1 / Remote Worldwide)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Pill Links */}
            <div className="pt-8 border-t border-inherit mt-8">
              <span className="text-xs font-mono uppercase text-gray-500 block mb-3">
                Connect on Social
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/dsdigitalz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10 text-gray-300 hover:text-white"
                      : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
                  }`}
                >
                  <FaLinkedinIn size={12} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/DsDigitalz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10 text-gray-300 hover:text-white"
                      : "bg-black/5 border-black/10 hover:bg-black/10 text-gray-700 hover:text-black"
                  }`}
                >
                  <FaGithub size={12} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            {...scrollReveal}
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border ${
              isDarkMode
                ? "bg-[#0c0d10] border-white/10 shadow-xl shadow-black/70"
                : "bg-white border-black/10 shadow-md shadow-black/5"
            }`}
          >
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p
              className={`text-sm mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Fill out the brief below and I’ll get back to you within 24 hours.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold block mb-1.5 uppercase tracking-wider text-gray-400">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Alex Morgan"
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5 uppercase tracking-wider text-gray-400">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5 uppercase tracking-wider text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Design System & Web App Project"
                  className={inputStyles}
                />
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1.5 uppercase tracking-wider text-gray-400">
                  Project Brief & Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your product, timeline, and goals..."
                  className={`resize-none ${inputStyles}`}
                />
              </div>

              {isSuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Message sent successfully! I'll be in touch shortly.</span>
                </div>
              )}

              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-gray-200 disabled:opacity-50"
                    : "bg-black text-white hover:bg-gray-800 disabled:opacity-50"
                }`}
              >
                {isSending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
