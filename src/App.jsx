import "./App.css";
import About from "./components/first_section_about/About";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className=" bg-[#282C33]">
      <Navbar></Navbar>
      <About></About>
    </div>
  );
}

export default App;
