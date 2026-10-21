export default function Hero() {
  return (
    <div className="hero">

      {/* BACKGROUND ACCENT */}
      <div className="hero-glow"></div>

      {/* IMAGE */}
      <div className="hero-image-wrap">

        <div className="hero-image-ring"></div>

        <img
          src="/profile.png"
          alt="Logarakshika A"
          className="hero-profile-image"
        />

      </div>

      {/* HERO TEXT */}
      <div className="hero-content">

        <p className="hero-eyebrow hero-reveal hero-reveal-1">
          COMPUTER SCIENCE & BUSINESS SYSTEMS
        </p>

        <h1 className="hero-reveal hero-reveal-2">
          Logarakshika <span>A</span>
        </h1>

        <h2 className="hero-reveal hero-reveal-3">
          Aspiring Business Analyst
        </h2>

        <p className="hero-description hero-reveal hero-reveal-4">
          A CSBS student passionate about turning technology
          and data into practical solutions, with interests
          in business analysis, data analytics, and
          intelligent applications.
        </p>

        <div className="hero-actions hero-reveal hero-reveal-5">

          <a
            href="/resume.pdf"
            download="Logarakshika_A_Resume.pdf"
            className="hero-button hero-button-primary"
          >
            Download Resume
            <span>↓</span>
          </a>

          <a
            href="mailto:logarakshikaa@gmail.com"
            className="hero-button hero-button-secondary"
          >
            Let's Talk
            <span>↗</span>
          </a>

        </div>

      </div>

      {/* SMALL DETAILS */}
      <div className="hero-side-label">
        <span>PORTFOLIO</span>
        <span>2026</span>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </div>

    </div>
  );
}