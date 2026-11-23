import GhostGradient from "./GhostGradient";

export default function Hero() {
  return (
    <div className="hero">
      <GhostGradient />

      {/* IMAGE */}
      <div className="hero-image-wrap">

        <div className="hero-image-ring"></div>

        <img
          src="/profile-suit.png"
          alt="Portrait of Logarakshika A"
          className="hero-profile-image"
        />

      </div>

      <div className="hero-insight-card hero-reveal hero-reveal-5" aria-hidden="true">
        <div className="hero-insight-heading">
          <span>INSIGHT / 01</span>
          <i />
        </div>
        <p>Find the <strong>signal.</strong></p>
        <div className="hero-mini-chart">
          <i style={{ height: "36%" }} />
          <i style={{ height: "58%" }} />
          <i style={{ height: "44%" }} />
          <i style={{ height: "76%" }} />
          <i style={{ height: "92%" }} />
          <i style={{ height: "66%" }} />
          <i style={{ height: "100%" }} />
        </div>
      </div>

      {/* HERO TEXT */}
      <div className="hero-content">

        <p className="hero-eyebrow hero-reveal hero-reveal-1">
          BUSINESS ANALYSIS · DATA STORYTELLING
        </p>

        <h1 className="hero-reveal hero-reveal-2">
          Logarakshika <span>A</span>
        </h1>

        <h2 className="hero-reveal hero-reveal-3">
          Making data useful for people.
        </h2>

        <p className="hero-description hero-reveal hero-reveal-4">
          I bring curiosity, structured thinking, and technology together
          to turn complex questions into clear, actionable insights.
        </p>

        <div className="hero-process hero-reveal hero-reveal-4" aria-label="My approach: ask, analyze, act">
          <span>ASK</span>
          <i aria-hidden="true" />
          <span>ANALYZE</span>
          <i aria-hidden="true" />
          <span>ACT</span>
        </div>

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