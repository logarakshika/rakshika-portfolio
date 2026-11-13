
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <ScrollReveal>
        <div className="education-container">

          {/* HEADER */}
          <div className="education-header section-header">
            <p className="education-label section-label">
              06 — EDUCATION
            </p>

          </div>

          {/* TITLE */}
          <div className="education-title">
            <h2 className="section-title">
              Grounded
              <br />
              <span>in fundamentals.</span>
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

        </div>
      </ScrollReveal>
    </section>
  );
}
