import "./App.css";
import About from "./components/first_section_about/About";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects_section/Project";

function App() {
  return (
    <div className=" bg-[#282C33]">
      <Navbar></Navbar>
      <About></About>
      <Project></Project>
    </div>
  );
}

export default App;
