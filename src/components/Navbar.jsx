import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className={`navbar${menuOpen ? " navbar-menu-open" : ""}`} aria-label="Primary">
      <a href="#home" className="navbar-logo" aria-label="Logarakshika home" onClick={() => setMenuOpen(false)}>
        LA
      </a>

      <div className="navbar-links" id="primary-navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#achievements" onClick={() => setMenuOpen(false)}>Awards</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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