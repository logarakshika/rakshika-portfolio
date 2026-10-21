
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const internships = [
    {
      number: "01",
      company: "SkillCraft Technology",
      role: "Web Development Intern",
      period: "2025",
      description:
        "Worked on web development tasks involving responsive interfaces, frontend technologies, and practical application development.",
      image: "/certificates/skillcraft.jpg",
    },
    {
      number: "02",
      company: "CodeAlpha",
      role: "Backend Development Intern",
      period: "2025",
      description:
        "Worked on backend development concepts, server-side functionality, APIs, and application logic.",
      image: "/certificates/codealpha.jpg",
    },
    {
      number: "03",
      company: "Oasis Infobyte",
      role: "Java Development Intern",
      period: "2025",
      description:
        "Completed an internship focused on software development and programming through practical application-based tasks.",
      image: "/certificates/oasis-infobyte.jpg",
    },
    {
      number: "04",
      company: "The Developers Arena",
      role: "Python Development Intern",
      period: "2025",
      description:
        "Worked on programming projects and practical software development tasks while strengthening application development skills.",
      image: "/certificates/developers-arena.jpg",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <ScrollReveal>
        <div className="experience-container">
          <div className="experience-header">
            <p className="experience-label">03 — EXPERIENCE</p>
            <p className="experience-side">
              Learning through
              <br />
              practical experience.
            </p>
          </div>

          <div className="experience-title">
            <h2>
              Experience that
              <br />
              <span>shapes my journey.</span>
            </h2>
          </div>

          <div className="experience-grid">
            {internships.map((internship, index) => (
              <article
                className="experience-card scroll-card"
                key={internship.number}
                style={{
                  transitionDelay: `${index * 140}ms`,
                }}
              >
                {/* CERTIFICATE IMAGE */}
                <div className="experience-image">
                  <span className="experience-image-number">
                    {internship.number}
                  </span>

                  <img
                    src={internship.image}
                    alt={`${internship.company} internship certificate`}
                    className="experience-certificate"
                    loading="lazy"
                  />
                </div>

                {/* INTERNSHIP DETAILS */}
                <div className="experience-details">
                  <div className="experience-number">
                    {internship.number}
                  </div>
                  <div className="experience-period">
                    {internship.period}
                  </div>
                </div>

                <h3>{internship.company}</h3>
                <h4>{internship.role}</h4>

                <p className="experience-description">
                  {internship.description}
                </p>

                <div className="experience-footer">
                  <span>INTERNSHIP</span>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>

          <div className="experience-bottom">
            <p>EXPERIENCE · LEARNING · GROWTH</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
