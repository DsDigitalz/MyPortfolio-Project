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

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TopServices />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
