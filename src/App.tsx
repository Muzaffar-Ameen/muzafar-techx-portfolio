import Navbar from "./components/layout/Navbar";
import About from "./sections/about/About";

import Hero from "./sections/hero/Hero";
import TechStack from "./sections/tech-stack/TechStack";

import Services from "./sections/services/Services";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Process from "./sections/process/Process";
import WhyWork from "./sections/why-work/WhyWork";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
function App() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-background
        text-textPrimary
      "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* TECH STACK */}
      <TechStack />

      <About />

      <Services />

      <Skills />

      <Projects />

      <Experience />

      <Process />

      <WhyWork />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
