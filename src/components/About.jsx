import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="about-section" id="about">
      <ScrollReveal>
        <div className="about-container">

          {/* HEADER */}
          <div className="about-top section-header">
            <p className="about-label section-label">
              01 — ABOUT ME
            </p>

            <p className="about-side-text section-side">
              What shapes
              <br />
              my perspective.
            </p>
          </div>

          {/* MAIN TITLE */}
          <div className="about-title">
            <h2 className="section-title">
              Curiosity,
              <br />
              <span>made useful.</span>
            </h2>
          </div>

          {/* CONTENT */}
          <div className="about-grid">

            <div className="about-description">

              <p className="about-large-text">
                I'm <strong>Logarakshika A</strong>, a Computer Science and Business Systems student with an interest in business analysis and data.
              </p>

              <p>
                I work across Python, SQL, web development, and applied machine learning.
              </p>

              <p>
                I start with the problem, consider the people affected, and keep the outcome grounded in what will work.
              </p>

            </div>

            {/* FACTS */}
            <div className="about-facts">

              <div
                className="about-fact scroll-card"
                style={{ transitionDelay: "100ms" }}
              >
                <span>01</span>

                <div>
                  <small>EDUCATION</small>

                  <h3>
                    B.Tech
                  </h3>

                  <p>
                    Computer Science &
                    <br />
                    Business Systems
                  </p>
                </div>
              </div>

              <div
                className="about-fact scroll-card"
                style={{ transitionDelay: "200ms" }}
              >
                <span>02</span>

                <div>
                  <small>FOCUS</small>

                  <h3>
                    Business Analysis
                  </h3>

                  <p>
                    Data Analytics &
                    <br />
                    Technology
                  </p>
                </div>
              </div>

              <div
                className="about-fact scroll-card"
                style={{ transitionDelay: "300ms" }}
              >
                <span>03</span>

                <div>
                  <small>LOCATION</small>

                  <h3>
                    Chennai
                  </h3>

                  <p>
                    India
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}