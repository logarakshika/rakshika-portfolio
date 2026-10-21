function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="navbar-logo">
        LA
      </a>

      <div className="navbar-links">
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#achievements">AWARDS</a>
        <a href="#education">EDUCATION</a>
        <a href="#contact">CONTACT</a>
      </div>

      <a
        href="https://github.com/logarakshika"
        target="_blank"
        rel="noreferrer"
        className="navbar-github"
      >
        GITHUB ↗
      </a>

    </nav>
  );
}

export default Navbar;