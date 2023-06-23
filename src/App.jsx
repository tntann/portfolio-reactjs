import "./App.css";
import Aboutme from "./components/about_section/Aboutme";
import Contact from "./components/contact_section/Contact";
import About from "./components/first_section_about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects_section/Project";
import Skills from "./components/skills_section/Skills";

function App() {
  return (
    <div className=" bg-[#282C33]">
      <Navbar></Navbar>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Aboutme></Aboutme>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
