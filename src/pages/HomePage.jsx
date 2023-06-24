import React from "react";
import About from "../components/first_section_about/About";
import Project from "../components/projects_section/Project";
import Skills from "../components/skills_section/Skills";
import Aboutme from "../components/about_section/Aboutme";
import Contact from "../components/contact_section/Contact";

const HomePage = () => {
  return (
    <>
      <About />
      <Project />
      <Skills />
      <Aboutme />
      <Contact />
    </>
  );
};

export default HomePage;
