
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <ScrollReveal>
        <div className="education-container">

          {/* HEADER */}
          <div className="education-header">
            <p className="education-label">
              06 — EDUCATION
            </p>

            <p className="education-side">
              The foundation
              <br />
              behind my work.
            </p>
          </div>

          {/* TITLE */}
          <div className="education-title">
            <h2>
              Learning,
              <br />
              <span>growing & building.</span>
            </h2>
          </div>

          {/* EDUCATION */}
          <div className="education-main">
            <div className="education-number">
              01
            </div>

            <div className="education-details">
              <p className="education-type">
                UNDERGRADUATE DEGREE
              </p>

              <h3>
                B.Tech — Computer Science
                <br />
                & Business Systems
              </h3>

              <p className="education-institution">
                S.A. Engineering College
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="education-bottom">
            <p>
              LEARN · APPLY · BUILD
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
