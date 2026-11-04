import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  Maximize2,
  X,
  Play,
  Pause,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Palette,
  CheckCircle2,
} from "lucide-react";
import MacBookFrame from "./Mockups/MacBookFrame";
import IPhoneFrame from "./Mockups/IPhoneFrame";

export default function MockupShowcase() {
  // 3 Featured UI/UX Applications
  const applications = [
    {
      id: "skilconomy",
      name: "Skilconomy Digital Platform",
      client: "Skilconomy Ltd",
      tagline: "Own Human Value. Build What's Next.",
      subheadline:
        "Architecting an End-to-End Digital Value Ecosystem Unifying Enterprise Services, Venture Incubation, and Next-Gen Workforce Development.",
      category: "Enterprise SaaS & EdTech",
      deviceType: "macbook",
      accentColor: "from-blue-500/20 to-cyan-500/10",
      accentBorder: "border-blue-500/30",
      pillColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      description:
        "Traditional enterprise service delivery and workforce training operate in fragmented, disconnected silos that slow organizational growth and talent readiness. Skilconomy solves this by unifying complex B2B agency retainers, live cohort-based technical training, and venture lab showcases into a single, cohesive digital platform engineered for seamless client onboarding and career advancement.",
      highlights: [
        "Unified Token-Driven Design System with atomic Figma tokens & fluid typography",
        "Interactive B2B Service Marketplace with instant quote estimators & lead capture",
        "Cohort Learning & Curriculum Hub with live scheduling & milestone tracking",
      ],
      techStack: [
        "Figma",
        "Auto-Layout 5.0",
        "Design Tokens",
        "React",
        "Tailwind CSS",
        "Motion",
      ],
      screens: [
        {
          id: "skilconomy-core",
          title: "Core Platform Overview",
          caption: "Main ecosystem landing page connecting technology ventures, services, and innovation labs.",
          image: "images/skilleconomy/skilleconomy-main.jpg",
          alt: "Skilconomy Core Ecosystem Platform Mockup",
        },
        {
          id: "skilconomy-services",
          title: "Service Catalogue & B2B Suite",
          caption: "Structured B2B marketplace with tier breakdowns, estimation calculators, and client onboarding.",
          image: "images/Services.png",
          alt: "Skilconomy Service Catalogue Mockup",
        },
        {
          id: "skilconomy-academy",
          title: "Skills Academy & Cohort Hub",
          caption: "Cohort curriculum directory, interactive application flows, and modern career pathways.",
          image: "images/Training.png",
          alt: "Skilconomy Skills Academy Mockup",
        },
      ],
    },
    {
      id: "skileman",
      name: "Skileman App",
      client: "Skileman Inc.",
      tagline: "Human Skill Infrastructure & Smart Matching",
      subheadline:
        "Reimagining the Future of Work by Bridging Real-Time Skill Verification, Social Jobbing, and Escrow-Backed Commerce.",
      category: "Mobile Social Jobbing",
      deviceType: "iphone",
      accentColor: "from-indigo-500/20 to-purple-500/10",
      accentBorder: "border-indigo-500/30",
      pillColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      description:
        "Conventional gig platforms isolate job fulfillment from continuous professional growth, forcing skilled talent to contend with high intermediary fees, opaque bidding, and impersonal interactions. Skileman transforms talent exchange into an interactive social ecosystem, connecting verified specialists directly with clients through real-time algorithmic matching, transparent escrow milestones, and community-driven mentorship feeds.",
      highlights: [
        "Social Jobbing Discovery Feed with inline video skill validation & stories",
        "Algorithmic Smart-Matching Engine filtering by taxonomy, proximity & tiers",
        "Milestone Escrow & Order Tracking with progress visualizers & secure releases",
      ],
      techStack: [
        "Figma",
        "Mobile UI Kit (iOS HIG)",
        "Micro-Prototypes",
        "User Journey Mapping",
        "React Native",
      ],
      screens: [
        {
          id: "skileman-feed",
          title: "Social Jobbing Feed",
          caption: "Dynamic activity feed featuring peer skill stories, client inquiries, and verified talent spotlights.",
          image: "images/SFeed - Home page Screen.png",
          alt: "Skileman Social Jobbing Feed Screen",
        },
        {
          id: "skileman-matching",
          title: "Algorithmic Smart Matching",
          caption: "Real-time candidate recommendation engine matching verified plumbers and electricians with clients.",
          image: "images/Matching engine(searching).png",
          alt: "Skileman Algorithmic Matching Screen",
        },
        {
          id: "skileman-booking",
          title: "Category & Fast Booking",
          caption: "Instant search and booking onboarding with scheduled appointments, live contracts, and project estimates.",
          image: "images/Booking Onboarding.png",
          alt: "Skileman Fast Booking Screen",
        },
        {
          id: "skileman-choice",
          title: "Skileman Choice (Skill Reels)",
          caption: "Short-form video feeds showcasing authentic craft demonstrations, soundbites, and peer engagement.",
          image: "images/Choice video.png",
          alt: "Skileman Choice Video Screen",
        },
        {
          id: "skileman-onboarding",
          title: "Onboarding Environment",
          caption: "Branded splash interface preparing a secure, verified digital environment for connection and growth.",
          image: "images/Onboarding-Splash Screen.png",
          alt: "Skileman Onboarding Splash Screen",
        },
      ],
    },
    {
      id: "shaarix",
      name: "Shaarix App",
      client: "Shaarix Ecosystem",
      tagline: "Own Human Value. Fund the Future.",
      subheadline:
        "Democratizing Human Value Creation and Revenue Distribution for Builders, Contributors, and Believers.",
      category: "FinTech & Human Capital",
      deviceType: "iphone",
      accentColor: "from-emerald-500/20 to-teal-500/10",
      accentBorder: "border-emerald-500/30",
      pillColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      description:
        "Traditional capital distribution models lock everyday builders and talent out of early equity upside and decentralized revenue opportunities. Shaarix solves this with a mobile-first human-value economy—empowering users to tokenize their contributions via unique ShareTags, track portfolio yields in real time, and earn verified revenue distributions.",
      highlights: [
        "Dynamic Portfolio Telemetry (Total Portfolio, HVC coins, yield tracking)",
        "Unique ShareTag Identity Architecture for cross-ecosystem reputation",
        "Instant Revenue Distribution & Project Unit Acquisition Flows",
      ],
      techStack: [
        "Figma",
        "Mobile UI Kit",
        "FinTech Design System",
        "Interactive Prototyping",
        "React Native",
      ],
      screens: [
        {
          id: "shaarix-dashboard",
          title: "Portfolio & Revenue Dashboard",
          caption: "Real-time portfolio metrics (₦250,000), asset breakdowns (RU, VU, SU, HVC), and project yields.",
          image: "images/Dashboard-Home.png",
          alt: "Shaarix Portfolio Dashboard Screen",
        },
        {
          id: "shaarix-sharetag",
          title: "ShareTag Identity Creation",
          caption: "Frictionless identity setup allowing builders to claim unique @sharetag handles for ecosystem-wide attribution.",
          image: "images/Share tag.png",
          alt: "Shaarix ShareTag Creation Screen",
        },
        {
          id: "shaarix-auth",
          title: "Human-Value Authentication",
          caption: "High-trust sign-in and account creation funnel framing the platform's human-value mission.",
          image: "images/Auth Options.png",
          alt: "Shaarix Authentication Screen",
        },
        {
          id: "shaarix-splash",
          title: "Brand Splash Experience",
          caption: "Cinematic dark splash screen introducing the Shaarix ribbon mark and core value proposition.",
          image: "images/Onboarding Splash.png",
          alt: "Shaarix Brand Splash Screen",
        },
      ],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all"); // "all", "skilconomy", "skileman", "shaarix"
  const [selectedScreens, setSelectedScreens] = useState({
    skilconomy: 0,
    skileman: 0,
    shaarix: 0,
  });
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [lightboxScreen, setLightboxScreen] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  const filteredApps =
    activeFilter === "all"
      ? applications
      : applications.filter((app) => app.id === activeFilter);

  const handleSelectScreen = (appId, screenIndex) => {
    setSelectedScreens((prev) => ({
      ...prev,
      [appId]: screenIndex,
    }));
  };

  return (
    <section
      id="mockup-showcase"
      className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#080c14] text-slate-100 border-t border-slate-800/80"
    >
      {/* Studio Lighting Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Overhead Crisp Softbox Light */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[75rem] h-[40rem] pointer-events-none opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(203, 213, 225, 0.12) 0%, rgba(148, 163, 184, 0.04) 50%, transparent 80%)",
          }}
        />

        {/* Subtle Matte Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Bottom Slate Floor Bounce */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65rem] h-[22rem] pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 30% at 50% 100%, rgba(30, 41, 59, 0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800/60 border border-slate-700/60 mb-4 text-slate-300 shadow-sm backdrop-blur-md">
            <Sparkles size={13} className="text-slate-300" />
            <span>Featured Product Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Featured UI/UX{" "}
            <span className="font-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl text-slate-300">
              Applications
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Three signature digital platforms rendered flat inside realistic
            dark-framed Apple device mockups (MacBook Pro & iPhone 16 Pro) on a
            dark slate studio stage with crisp lighting.
          </p>
        </div>

        {/* Studio Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#111827]/80 backdrop-blur-xl border border-slate-800 shadow-xl mb-14">
          {/* App Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-slate-100 text-slate-900 font-semibold shadow-md"
                  : "bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-700/40"
              }`}
            >
              All Applications ({applications.length})
            </button>

            {applications.map((app) => {
              const isActive = activeFilter === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveFilter(app.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-semibold shadow-md"
                      : "bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-700/40"
                  }`}
                >
                  {app.name}
                </button>
              );
            })}
          </div>

          {/* Auto-Scroll Toggle */}
          <button
            onClick={() => setIsAutoScrolling((prev) => !prev)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-medium transition-all ${
              isAutoScrolling
                ? "bg-slate-700/50 border-slate-600 text-slate-100"
                : "bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-white"
            }`}
            title={isAutoScrolling ? "Pause Auto-Scroll" : "Resume Auto-Scroll"}
          >
            {isAutoScrolling ? <Pause size={13} /> : <Play size={13} />}
            <span>{isAutoScrolling ? "Auto-Scroll: ON" : "Auto-Scroll: OFF"}</span>
          </button>
        </div>

        {/* Featured Applications Grid Section */}
        <div className="space-y-16 lg:space-y-24">
          {filteredApps.map((app, appIdx) => {
            const currentScreenIdx = selectedScreens[app.id] || 0;
            const currentScreen = app.screens[currentScreenIdx] || app.screens[0];
            const isMacBook = app.deviceType === "macbook";

            return (
              <motion.article
                key={app.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: appIdx * 0.1 }}
                className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#0e1422]/80 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden"
              >
                {/* Subtle Ambient Backlight Glow for this card */}
                <div
                  className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 bg-gradient-to-br ${app.accentColor}`}
                />

                {/* Card Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-800/80 mb-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${app.pillColor}`}>
                        {app.category}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        {app.client}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                      {app.name}
                    </h3>
                  </div>

                  <span className="font-editorial italic text-base sm:text-xl text-slate-400">
                    "{app.tagline}"
                  </span>
                </div>

                {/* Dual Column Layout: Left Device Mockup / Right High-Impact Brief */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Interactive Apple Device Frame */}
                  <div className={`lg:col-span-7 flex flex-col items-center justify-center ${isMacBook ? "w-full" : "max-w-md mx-auto w-full"}`}>
                    {/* Device Viewport */}
                    <div className="w-full relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
                      {isMacBook ? (
                        <div className="w-full max-w-2xl">
                          <MacBookFrame
                            src={currentScreen.image}
                            alt={currentScreen.alt}
                            isAutoScrolling={isAutoScrolling}
                          />
                        </div>
                      ) : (
                        <div className="w-56 sm:w-64">
                          <IPhoneFrame
                            src={currentScreen.image}
                            alt={currentScreen.alt}
                            isAutoScrolling={isAutoScrolling}
                          />
                        </div>
                      )}
                    </div>

                    {/* Screen Switcher Pills */}
                    <div className="mt-8 w-full">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 text-center mb-3">
                        Switch Active Screen ({currentScreenIdx + 1}/{app.screens.length})
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {app.screens.map((screen, sIdx) => {
                          const isSelected = currentScreenIdx === sIdx;
                          return (
                            <button
                              key={screen.id}
                              onClick={() => handleSelectScreen(app.id, sIdx)}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-slate-200 text-slate-900 font-semibold shadow-sm scale-105"
                                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isSelected ? "bg-slate-900" : "bg-slate-500"
                                }`}
                              />
                              <span>{screen.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Compelling Brief & UI/UX Highlights */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    {/* Vision Subheadline */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                        Product Vision
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 leading-snug">
                        {app.subheadline}
                      </h4>
                    </div>

                    {/* 2-Sentence Impact Description */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                        Problem & Solution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    {/* Key UI/UX & Architectural Highlights */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                        Key UI/UX Highlights
                      </span>
                      <ul className="space-y-2.5">
                        {app.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-slate-400 shrink-0 mt-0.5"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Tech Stack */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2.5">
                        Core Tech Stack & Tools
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {app.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full-Screen 4K Inspection CTA */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {currentScreen.title}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {currentScreen.caption}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          setZoomScale(1);
                          setLightboxScreen(currentScreen);
                        }}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60 text-xs font-medium transition-all shadow-sm shrink-0"
                      >
                        <Maximize2 size={13} />
                        <span>Inspect 4K</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* 4K Ultra-Sharp Lightbox Modal */}
      <AnimatePresence>
        {lightboxScreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxScreen(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative z-10 max-w-6xl max-h-[92vh] w-full bg-[#0d131f] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header / Controls */}
              <div className="p-4 px-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-[#111827]/80">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{lightboxScreen.title}</span>
                    <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50">
                      Unaltered Screen
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lightboxScreen.caption}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-full p-1">
                    <button
                      onClick={() => setZoomScale((prev) => Math.max(0.75, prev - 0.25))}
                      className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut size={14} />
                    </button>
                    <span className="text-[11px] font-mono px-2 text-slate-300">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomScale((prev) => Math.min(2.5, prev + 0.25))}
                      className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn size={14} />
                    </button>
                    <button
                      onClick={() => setZoomScale(1)}
                      className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Reset Zoom"
                    >
                      <RotateCcw size={13} />
                    </button>
                  </div>

                  {/* Open / Download Raw File */}
                  <a
                    href={lightboxScreen.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Open Full Image"
                  >
                    <Download size={14} />
                  </a>

                  {/* Close Lightbox */}
                  <button
                    onClick={() => setLightboxScreen(null)}
                    className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Viewport */}
              <div className="flex-1 overflow-auto p-4 sm:p-8 bg-[#090d15] flex justify-center items-start">
                <div
                  style={{
                    transform: `scale(${zoomScale})`,
                    transformOrigin: "top center",
                    transition: "transform 0.2s ease-out",
                  }}
                  className="max-w-4xl w-full"
                >
                  <img
                    src={lightboxScreen.image}
                    alt={lightboxScreen.title}
                    className="w-full h-auto mx-auto rounded-lg shadow-2xl block"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
