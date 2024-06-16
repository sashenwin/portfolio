import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Router>
          <Navbar />
          <Element name="hero" className="element py-48">
            <Hero />
          </Element>
          <Element name="about" className="element">
            <About />
          </Element>
          <Element name="technologies" className="element">
            <Technologies />
          </Element>
          <Element name="experience" className="element">
            <Experience />
          </Element>
          <Element name="education" className="element">
            <Education />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </Router>
      </div>
    </div>
  );
};

export default App;
