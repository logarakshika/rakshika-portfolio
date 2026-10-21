import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <ScrollReveal>
        <div className="contact-container">

          {/* HEADER */}
          <div className="contact-header">
            <p className="contact-label">
              07 — CONTACT
            </p>

            <p className="contact-side">
              Let's build something
              <br />
              meaningful together.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="contact-content">

            <h2>
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p className="contact-description">
              Whether it's a project, collaboration, internship
              opportunity, or simply a conversation about technology
              and business — I'd love to hear from you.
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
            <span>ASPIRING BUSINESS ANALYST</span>
            <span>© 2026</span>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}