import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TopServices from "./Components/TopServices";
import Portfolio from "./Components/Portfolio";
// import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";

function MainLayout() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        isDarkMode ? "bg-[#08090a] text-white" : "bg-[#f8f9fa] text-slate-900"
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <TopServices />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
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
