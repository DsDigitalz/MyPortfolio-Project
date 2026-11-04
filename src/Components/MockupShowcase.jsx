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
import { useTheme } from "./ThemeContext";

export default function MockupShowcase() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode
    ? {
        section: "bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#080c14] text-slate-100 border-slate-800/80",
        badge: "bg-slate-800/60 border-slate-700/60 text-slate-300",
        heading: "text-white",
        headingAccent: "text-slate-300",
        body: "text-slate-400",
        controls: "bg-[#111827]/80 border-slate-800",
        activeControl: "bg-slate-100 text-slate-900",
        inactiveControl: "bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800/80 border-slate-700/40",
        activeScroll: "bg-slate-700/50 border-slate-600 text-slate-100",
        inactiveScroll: "bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-white",
        card: "bg-[#0e1422]/80 border-slate-800",
        divider: "border-slate-800/80",
        muted: "text-slate-400",
        title: "text-white",
        panel: "bg-slate-900/60 border-slate-800",
        panelLabel: "text-slate-500",
        panelText: "text-slate-300",
        chip: "bg-slate-900/90 border-slate-800 text-slate-300",
        action: "bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border-slate-700/60",
        lightbox: "bg-[#0d131f] border-slate-800",
        lightboxHeader: "bg-[#111827]/80 border-slate-800",
        lightboxBadge: "bg-slate-800 text-slate-300 border-slate-700/50",
        lightboxControls: "bg-slate-900 border-slate-800",
        lightboxButton: "text-slate-400 hover:text-white hover:bg-slate-800",
        lightboxViewport: "bg-[#090d15]",
        lightboxLink: "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700",
      }
    : {
        section: "bg-gradient-to-b from-stone-50 via-white to-stone-100 text-slate-900 border-stone-200",
        badge: "bg-white/80 border-slate-200 text-slate-700",
        heading: "text-slate-950",
        headingAccent: "text-slate-600",
        body: "text-slate-600",
        controls: "bg-white/85 border-slate-200",
        activeControl: "bg-slate-900 text-white",
        inactiveControl: "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 border-slate-200",
        activeScroll: "bg-slate-200 border-slate-300 text-slate-900",
        inactiveScroll: "bg-white border-slate-300 text-slate-600 hover:text-slate-950",
        card: "bg-white/85 border-slate-200",
        divider: "border-slate-200",
        muted: "text-slate-600",
        title: "text-slate-950",
        panel: "bg-slate-50 border-slate-200",
        panelLabel: "text-slate-500",
        panelText: "text-slate-700",
        chip: "bg-white border-slate-200 text-slate-700",
        action: "bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-950 border-slate-300",
        lightbox: "bg-white border-slate-200",
        lightboxHeader: "bg-slate-50 border-slate-200",
        lightboxBadge: "bg-slate-100 text-slate-700 border-slate-200",
        lightboxControls: "bg-slate-100 border-slate-200",
        lightboxButton: "text-slate-600 hover:text-slate-950 hover:bg-slate-200",
        lightboxViewport: "bg-slate-100",
        lightboxLink: "bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200",
      };
  // 3 Featured UI/UX Applications
  const applications = [
  {
    id: "skilconomy",
    name: "Skilconomy Digital Platform",
    client: "Skilconomy Ltd",
    tagline: "Building Skills. Enabling Technology. Creating Opportunities.",
    subheadline:
      "A Digital Ecosystem Connecting Technology Services, Practical Skills Development, and Innovation to Unlock Human Potential and Business Growth.",
    category: "Digital Services & Skills Development",
    deviceType: "macbook",
    accentColor: "from-blue-500/20 to-cyan-500/10",
    accentBorder: "border-blue-500/30",
    pillColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    description:
      "Businesses often struggle to access reliable digital solutions, while individuals face fragmented pathways to developing practical technology skills and participating in the digital economy. Skilconomy addresses these challenges through a connected digital platform that brings together business technology services, structured skills training, and innovation initiatives. It creates a foundation where organizations can solve digital challenges, individuals can build relevant capabilities, and emerging opportunities can grow within a wider ecosystem.",
    highlights: [
      "Digital Services Platform for discovering technology solutions and submitting business service requests",
      "Skills Development Platform for programme discovery, cohort applications, admission, and student onboarding",
      "Labs & Innovation Showcase introducing projects, initiatives, and the wider Skilconomy ecosystem",
    ],
    techStack: [
      "Figma",
      "Design Systems",
      "Responsive UI/UX",
      "User Journey Mapping",
      "Interactive Prototyping",
    ],
    screens: [
      {
        id: "skilconomy-core",
        title: "Skilconomy Ecosystem Homepage",
        caption:
          "The central digital entry point introducing Skilconomy's services, training, innovation initiatives, and wider ecosystem vision.",
        image: "images/Homepage.png",
        alt: "Skilconomy Digital Ecosystem Homepage",
      },
      {
        id: "skilconomy-services",
        title: "Digital Services Platform",
        caption:
          "A structured service discovery experience helping businesses explore technology solutions, understand service offerings, and submit enquiries.",
        image: "images/Services.png",
        alt: "Skilconomy Digital Services Platform",
      },
      {
        id: "skilconomy-training",
        title: "Skills Development Platform",
        caption:
          "A programme and cohort discovery experience supporting prospective learners through programme exploration, applications, and the admission journey.",
        image: "images/Training.png",
        alt: "Skilconomy Training Platform",
      },
    ],
  },

  {
    id: "skileman",
    name: "Skileman App",
    client: "Skileman",
    tagline: "Connecting Skills to Opportunities.",
    subheadline:
      "A Human-Centered Skilled Collaboration Ecosystem Connecting Skilled Professionals, Clients, Projects, and Opportunities.",
    category: "Skilled Collaboration & Opportunity Platform",
    deviceType: "iphone",
    accentColor: "from-indigo-500/20 to-purple-500/10",
    accentBorder: "border-indigo-500/30",
    pillColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    description:
      "Skilled professionals often struggle to access consistent work opportunities, demonstrate their capabilities, and connect with clients who need their services. At the same time, clients face challenges identifying suitable professionals and building trust before engaging them. Skileman is envisioned as a skilled collaboration ecosystem that bridges this gap by helping professionals showcase their skills, connect with potential clients, discover opportunities, and participate in meaningful projects. It aims to transform human skills into visible, accessible, and economically valuable opportunities.",
    highlights: [
      "Social Jobbing Experience for discovering skilled professionals, work opportunities, and community activity",
      "Skills Discovery & Matching Concepts designed to connect client needs with relevant professional capabilities",
      "Professional Identity & Skill Showcase enabling skilled people to demonstrate their expertise, work, and value",
    ],
    techStack: [
      "Figma",
      "Mobile UI/UX Design",
      "User Journey Mapping",
      "Interactive Prototyping",
      "Mobile Design System",
    ],
    screens: [
      {
        id: "skileman-feed",
        title: "Social Jobbing Feed",
        caption:
          "A community-driven discovery experience showcasing skilled professionals, their activities, capabilities, and opportunities for collaboration.",
        image: "images/SFeed - Home page Screen.png",
        alt: "Skileman Social Jobbing Feed Screen",
      },
      {
        id: "skileman-matching",
        title: "Skills Discovery & Matching",
        caption:
          "A skills-focused discovery concept designed to help clients identify professionals whose capabilities align with their needs.",
        image: "images/Matching engine(searching).png",
        alt: "Skileman Skills Discovery and Matching Screen",
      },
      {
        id: "skileman-booking",
        title: "Service Discovery & Booking",
        caption:
          "A guided experience for exploring service categories, discovering professionals, and initiating engagement for work opportunities.",
        image: "images/Booking Onboarding.png",
        alt: "Skileman Service Discovery and Booking Screen",
      },
      {
        id: "skileman-choice",
        title: "Skileman Choice",
        caption:
          "A short-form visual showcase concept allowing skilled professionals to demonstrate their work, practical abilities, and craft.",
        image: "images/Choice video.png",
        alt: "Skileman Choice Skill Showcase Screen",
      },
      {
        id: "skileman-onboarding",
        title: "Onboarding Experience",
        caption:
          "A welcoming mobile onboarding experience introducing Skileman's vision of connecting skilled people with clients and opportunities.",
        image: "images/Onboarding-Splash Screen.png",
        alt: "Skileman Onboarding Screen",
      },
    ],
  },

  {
    id: "shaarix",
    name: "Shaarix Platform",
    client: "Shaarix Ecosystem",
    tagline: "Human Value. Shared Participation. Collective Growth.",
    subheadline:
      "The Human Value, Project Participation, and Revenue Distribution Platform of the Skilconomy Ecosystem.",
    category: "Human Value & Revenue Distribution",
    deviceType: "iphone",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    accentBorder: "border-emerald-500/30",
    pillColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    description:
      "Human contributions create value across businesses, projects, and collaborative ecosystems, yet the people who contribute do not always have clear visibility into how that value is recognized, tracked, or shared. Shaarix is designed to address this through a structured human-value and project-participation framework within the Skilconomy ecosystem. It provides a way to represent participation, track revenue generated through ecosystem activities, and support transparent revenue distribution among eligible contributors. While Skileman creates opportunities for skilled professionals to deliver value, Shaarix focuses on tracking and distributing the revenue generated from qualifying ecosystem activities.",
    highlights: [
      "Human Value Contribution (HVC) Framework for representing and recognizing contributions within the ecosystem",
      "Project Participation Architecture using RU, VU, and SU participation units",
      "Revenue Tracking & Distribution Framework connecting generated ecosystem revenue with eligible participant allocations",
    ],
    techStack: [
      "Figma",
      "Mobile UI/UX Design",
      "Human Value Design System",
      "Revenue Tracking Interfaces",
      "Interactive Prototyping",
    ],
    screens: [
      {
        id: "shaarix-dashboard",
        title: "Human Value & Revenue Dashboard",
        caption:
          "A centralized overview of participation, human-value contributions, project units, and revenue distribution information.",
        image: "images/Dashboard-Home.png",
        alt: "Shaarix Human Value and Revenue Dashboard",
      },
      {
        id: "shaarix-sharetag",
        title: "ShareTag Identity",
        caption:
          "A unique identity concept designed to associate participants with their contributions and participation across the ecosystem.",
        image: "images/Share tag.png",
        alt: "Shaarix ShareTag Identity Creation Screen",
      },
      {
        id: "shaarix-auth",
        title: "Account Access & Onboarding",
        caption:
          "A structured account access experience introducing participants to the Shaarix human-value and project-participation environment.",
        image: "images/Auth Options.png",
        alt: "Shaarix Authentication and Onboarding Screen",
      },
      {
        id: "shaarix-splash",
        title: "Brand Introduction",
        caption:
          "A visual introduction to Shaarix and its role in recognizing human value, enabling project participation, and supporting revenue distribution.",
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
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
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
    <div
      className={`relative py-16 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden border-t ${theme.section}`}
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
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border mb-4 shadow-sm backdrop-blur-md ${theme.badge}`}>
            <Sparkles size={13} className={theme.muted} />
            <span>Featured Product Showcase</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${theme.heading}`}>
            Featured UI/UX{" "}
            <span className={`font-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl ${theme.headingAccent}`}>
              Applications
            </span>
          </h2>

          <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${theme.body}`}>
            Three signature digital platforms rendered flat inside realistic
            dark-framed Apple device mockups (MacBook Pro & iPhone 16 Pro) on a
            dark slate studio stage with crisp lighting.
          </p>
        </div>

        {/* Studio Filter Controls */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl backdrop-blur-xl border shadow-xl mb-14 ${theme.controls}`}>
          {/* App Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? `${theme.activeControl} font-semibold shadow-md`
                  : `border ${theme.inactiveControl}`
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
                      ? `${theme.activeControl} font-semibold shadow-md`
                      : `border ${theme.inactiveControl}`
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
            aria-pressed={isAutoScrolling}
            aria-label={
              isAutoScrolling
                ? "Pause automatic screen scrolling"
                : "Start automatic screen scrolling"
            }
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-medium transition-all ${
              isAutoScrolling
                ? theme.activeScroll
                : theme.inactiveScroll
            }`}
            title={isAutoScrolling ? "Pause Auto Scroll" : "Start Auto Scroll"}
          >
            {isAutoScrolling ? <Pause size={13} /> : <Play size={13} />}
            <span>Auto Scroll</span>
            <span className="text-[10px] opacity-70">
              {isAutoScrolling ? "ON" : "OFF"}
            </span>
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
                className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 border shadow-2xl backdrop-blur-xl overflow-hidden ${theme.card}`}
              >
                {/* Subtle Ambient Backlight Glow for this card */}
                <div
                  className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 bg-gradient-to-br ${app.accentColor}`}
                />

                {/* Card Header Info */}
                <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b mb-10 ${theme.divider}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${isDarkMode ? app.pillColor : "bg-slate-100 text-slate-700 border-slate-200"}`}>
                        {app.category}
                      </span>
                      <span className={theme.muted}>•</span>
                      <span className={`text-xs font-mono uppercase tracking-widest ${theme.muted}`}>
                        {app.client}
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-4xl font-bold tracking-tight ${theme.title}`}>
                      {app.name}
                    </h3>
                  </div>

                  <span className={`font-editorial italic text-base sm:text-xl ${theme.muted}`}>
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
                      <div className={`text-[11px] font-mono uppercase tracking-wider text-center mb-3 ${theme.panelLabel}`}>
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
                                  : isDarkMode
                                    ? "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                                    : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isSelected
                                    ? "bg-slate-900"
                                    : isDarkMode
                                      ? "bg-slate-500"
                                      : "bg-slate-300"
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
                      <span className={`text-xs font-mono uppercase tracking-widest block mb-2 ${theme.muted}`}>
                        Product Vision
                      </span>
                      <h4 className={`text-lg sm:text-xl font-bold tracking-tight leading-snug ${theme.heading}`}>
                        {app.subheadline}
                      </h4>
                    </div>

                    {/* 2-Sentence Impact Description */}
                    <div className={`p-5 rounded-2xl border ${theme.panel}`}>
                      <span className={`text-[11px] font-mono uppercase tracking-wider block mb-1.5 ${theme.panelLabel}`}>
                        Problem & Solution
                      </span>
                      <p className={`text-xs sm:text-sm leading-relaxed ${theme.panelText}`}>
                        {app.description}
                      </p>
                    </div>

                    {/* Key UI/UX & Architectural Highlights */}
                    <div>
                      <span className={`text-xs font-mono uppercase tracking-widest block mb-3 ${theme.muted}`}>
                        Key UI/UX Highlights
                      </span>
                      <ul className="space-y-2.5">
                        {app.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm ${theme.panelText}`}
                          >
                            <CheckCircle2
                              size={15}
                              className={`${theme.muted} shrink-0 mt-0.5`}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Tech Stack */}
                    <div>
                      <span className={`text-xs font-mono uppercase tracking-widest block mb-2.5 ${theme.muted}`}>
                        Core Tech Stack & Tools
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {app.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${theme.chip}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full-Screen 4K Inspection CTA */}
                    <div className={`pt-4 border-t flex items-center justify-between ${theme.divider}`}>
                      <div>
                        <span className={`text-xs font-semibold block ${theme.title}`}>
                          {currentScreen.title}
                        </span>
                        <span className={`text-[11px] ${theme.muted}`}>
                          {currentScreen.caption}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          setZoomScale(1);
                          setLightboxScreen(currentScreen);
                        }}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-medium transition-all shadow-sm shrink-0 ${theme.action}`}
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
              className={`absolute inset-0 backdrop-blur-2xl ${isDarkMode ? "bg-slate-950/90" : "bg-slate-900/40"}`}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className={`relative z-10 max-w-6xl max-h-[92vh] w-full rounded-3xl border overflow-hidden shadow-2xl flex flex-col ${theme.lightbox}`}
            >
              {/* Header / Controls */}
              <div className={`p-4 px-6 border-b flex flex-wrap items-center justify-between gap-4 ${theme.lightboxHeader}`}>
                <div>
                  <h4 className={`text-sm font-bold flex items-center gap-2 ${theme.heading}`}>
                    <span>{lightboxScreen.title}</span>
                    <span className={`text-[11px] font-mono font-normal px-2 py-0.5 rounded border ${theme.lightboxBadge}`}>
                      Unaltered Screen
                    </span>
                  </h4>
                  <p className={`text-xs ${theme.muted}`}>
                    {lightboxScreen.caption}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className={`flex items-center gap-1 border rounded-full p-1 ${theme.lightboxControls}`}>
                    <button
                      onClick={() => setZoomScale((prev) => Math.max(0.75, prev - 0.25))}
                      className={`p-1.5 rounded-full transition-colors ${theme.lightboxButton}`}
                      title="Zoom Out"
                    >
                      <ZoomOut size={14} />
                    </button>
                    <span className={`text-[11px] font-mono px-2 ${theme.panelText}`}>
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomScale((prev) => Math.min(2.5, prev + 0.25))}
                      className={`p-1.5 rounded-full transition-colors ${theme.lightboxButton}`}
                      title="Zoom In"
                    >
                      <ZoomIn size={14} />
                    </button>
                    <button
                      onClick={() => setZoomScale(1)}
                      className={`p-1.5 rounded-full transition-colors ${theme.lightboxButton}`}
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
                    className={`p-2 rounded-full transition-colors ${theme.lightboxLink}`}
                    title="Open Full Image"
                  >
                    <Download size={14} />
                  </a>

                  {/* Close Lightbox */}
                  <button
                    onClick={() => setLightboxScreen(null)}
                    className={`p-2 rounded-full transition-colors ${theme.lightboxLink}`}
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Viewport */}
              <div className={`flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start ${theme.lightboxViewport}`}>
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
    </div>
  );
}
