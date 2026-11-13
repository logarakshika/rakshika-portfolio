import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <ScrollReveal>
        <div className="contact-container">

          {/* HEADER */}
          <div className="contact-header section-header">
            <p className="contact-label section-label">
              07 — CONTACT
            </p>

            <p className="contact-side section-side">
              Good work starts
              <br />
              with a clear conversation.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="contact-content">

            <h2>
              Ready to
              <br />
              <span>contribute.</span>
            </h2>

            <p className="contact-description">
              Open to analyst and technology roles, internships, and considered collaborations.
            </p>

            <a
              href="mailto:logarakshikaa@gmail.com"
              className="contact-email"
            >
              logarakshikaa@gmail.com
            </a>

          </div>

          {/* LINKS */}
          <div className="contact-links">

            <a
              href="https://www.linkedin.com/in/logarakshikaa/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/logarakshika"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="/resume.pdf"
              download="Logarakshika_A_Resume.pdf"
            >
              Download Resume ↓
            </a>

          </div>

          {/* FOOTER */}
          <div className="contact-footer">
            <span>LOGARAKSHIKA A</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}