import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroLoader from "./components/IntroLoader";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

const INTRO_SESSION_KEY = "logarakshika-portfolio-intro-seen";

function shouldShowIntro() {
  try {
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== "true";
  } catch (error) {
    console.error("Unable to read intro session state; skipping the intro.", error);
    return false;
  }
}

function App() {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

  useEffect(() => {
    if (!showIntro) return;

    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    } catch (error) {
      console.error("Unable to save intro session state; skipping the intro.", error);
      setShowIntro(false);
    }
  }, [showIntro]);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}
      <main
        className="portfolio"
        aria-hidden={showIntro}
        inert={showIntro}
      >
        <a className="skip-link" href="#about">
          Skip to content
        </a>

        <section className="hero-page" id="home">
          <Navbar />
          <Hero />
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;