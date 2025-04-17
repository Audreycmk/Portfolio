import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
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