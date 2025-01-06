import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  //using AOS library for animation. Initializing here and we can add data-aos property to any element which need animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once while scrolling down
      offset: 50, // Offset (in px) for triggering animations
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
