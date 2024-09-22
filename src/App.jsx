import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
const App = () => {
  return (
    <Layout>
      <Navbar />
      <div className="reveal" id="header">
        <Header />
      </div>
      <div className="reveal" id="skills">
        <Skills />
      </div>
      <div className="reveal" id="project">
        <Projects />
      </div>
      <div className="reveal" id="experience">
        <Experience />
      </div>
      <div className="reveal" id="contact">
        <Contact />
      </div>
    </Layout>
  );
};

export default App;
