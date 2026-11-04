import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Intro from "./Components/Intro";
import About from "./Components/About";
import TopServices from "./Components/TopServices";
import Process from "./Components/Process";
// import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import WhyWorkWithMe from "./Components/WhyWorkWithMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";

function MainLayout() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 font-sans selection:bg-white selection:text-black ${
        isDarkMode ? "bg-black text-white" : "bg-[#fafaf9] text-black"
      }`}
    >
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Intro />
        <About />
        <TopServices />
        <Process />
        {/* <Testimonials /> */}
        <Portfolio />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
