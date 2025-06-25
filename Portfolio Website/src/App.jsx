import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TopServices from "./Components/TopServices";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TopServices />
    </div>
  );
}
