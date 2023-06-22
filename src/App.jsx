import "./App.css";
import About from "./components/first_section_about/About";
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
    </div>
  );
}

export default App;
