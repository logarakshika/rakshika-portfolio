import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "experience", "projects", "achievements", "education", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);

        const currentSection = sections
          .map((id) => document.getElementById(id))
          .filter((section) => section && section.getBoundingClientRect().top <= window.innerHeight * 0.5)
          .pop();

        if (currentSection) setActiveSection(currentSection.id);
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <nav
      className={`navbar${menuOpen ? " navbar-menu-open" : ""}`}
      aria-label="Primary"
      style={{ "--scroll-progress": scrollProgress }}
    >
      <a href="#home" className="navbar-logo" aria-label="Logarakshika home" onClick={() => setMenuOpen(false)}>
        LA
      </a>

      <div className="navbar-links" id="primary-navigation">
        {sections.map((id) => (
          <a
            href={`#${id}`}
            key={id}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {id === "achievements" ? "Awards" : `${id[0].toUpperCase()}${id.slice(1)}`}
          </a>
        ))}
      </div>

      <a
        href="https://github.com/logarakshika"
        target="_blank"
        rel="noreferrer"
        className="navbar-github"
        aria-label="GitHub profile, opens in a new tab"
      >
        GitHub ↗
      </a>

      <button
        type="button"
        className="navbar-menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span className="navbar-menu-icon" />
      </button>
    </nav>
  );
}

export default Navbar;