export default function Hero() {
  return (
    <div
      className="hero"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;

        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--pointer-x", "50%");
        event.currentTarget.style.setProperty("--pointer-y", "50%");
      }}
    >

      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-glow"></div>

      {/* IMAGE */}
      <div className="hero-image-wrap">

        <div className="hero-image-ring"></div>

        <img
          src="/profile-suit.png"
          alt="Portrait of Logarakshika A"
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
          I connect business questions with data and technology
          to shape practical, human-centred solutions.
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