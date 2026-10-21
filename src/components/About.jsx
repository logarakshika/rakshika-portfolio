import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="about-section" id="about">
      <ScrollReveal>
        <div className="about-container">

          {/* HEADER */}
          <div className="about-top">
            <p className="about-label">
              01 — ABOUT ME
            </p>

            <p className="about-side-text">
              A little more about
              <br />
              the person behind
              <br />
              the projects.
            </p>
          </div>

          {/* MAIN TITLE */}
          <div className="about-title">
            <h2>
              Turning curiosity
              <br />
              into <span>solutions.</span>
            </h2>
          </div>

          {/* CONTENT */}
          <div className="about-grid">

            <div className="about-description">

              <p className="about-large-text">
                I'm <strong>Logarakshika A</strong>, a
                Computer Science and Business Systems
                student with a growing interest in
                Business Analysis, Data Analytics,
                and technology-driven problem solving.
              </p>

              <p>
                My experience spans software development,
                Python, SQL, AI/ML, web technologies,
                and data-driven applications.
              </p>

              <p>
                I enjoy understanding a problem from
                both the technical and business
                perspective and turning that understanding
                into practical solutions.
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

          {/* BOTTOM LINE */}
          <div className="about-bottom">

            <p>
              LEARNING · BUILDING · ANALYSING · CREATING
            </p>

            <span>
              ↓
            </span>

          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}