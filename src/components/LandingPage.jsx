import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./Contact";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <section className="hero-section section wrapper">
        <Hero />
      </section>
      <section id="skills" className="skills-section section wrapper">
        <Skills />
      </section>
      <section id="projects" className="project-section section wrapper">
        <Projects />
      </section>
      <section id="contact" className="contact-section section wrapper">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
