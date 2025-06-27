import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TopServices from "./Components/TopServices";
import Portfolio from "./Components/Portfolio";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TopServices />
      <Portfolio/>
    </div>
  );
}
