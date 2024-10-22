import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Title title="about" subtitle="Who am I?" />
        <About />
        <Title title="skills" subtitle="What I can do" />
        <Skills />
        <Title title="projects" subtitle="Some of my recent projects" />
        <Projects />
        <Title title="blogs" subtitle="Some of my recent blogs" />
        <Blogs />
        <Title title="contact" subtitle="Get in Touch" />
        <Contact />
      </div>
    </>
  );
}

export default App;
