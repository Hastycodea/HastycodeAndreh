import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
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
      </div>
    </>
  );
}

export default App;
