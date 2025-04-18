import React from "react";
import Navbar from "./components/sections/Navbar/Navbar";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import ThreeBackground from './components/ThreeBackground/ThreeBackground';

import "./App.css";

function App() {
  return (
    <div className="app">
      <ThreeBackground />
      <Navbar />
      <div className="content">
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>  
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;