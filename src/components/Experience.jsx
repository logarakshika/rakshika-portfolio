
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const internships = [
    {
      number: "01",
      company: "SkillCraft Technology",
      role: "Web Development Intern",
      period: "2025",
      description: "Built responsive interfaces and strengthened practical frontend development skills.",
      image: "/certificates/skillcraft.jpg",
    },
    {
      number: "02",
      company: "CodeAlpha",
      role: "Backend Development Intern",
      period: "2025",
      description: "Explored server-side development, APIs, and application logic.",
      image: "/certificates/codealpha.jpg",
    },
    {
      number: "03",
      company: "Oasis Infobyte",
      role: "Java Development Intern",
      period: "2025",
      description: "Applied Java programming concepts to hands-on software development tasks.",
      image: "/certificates/oasis-infobyte.jpg",
    },
    {
      number: "04",
      company: "The Developers Arena",
      role: "Python Development Intern",
      period: "2025",
      description: "Used Python in practical programming projects and application development tasks.",
      image: "/certificates/developers-arena.jpg",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <ScrollReveal>
        <div className="experience-container">
          <div className="experience-header section-header">
            <p className="experience-label section-label">03 — EXPERIENCE</p>
            <p className="experience-side section-side">
              Early work across
              <br />
              web, backend, and Python.
            </p>
          </div>

          <div className="experience-title">
            <h2 className="section-title">
              Learning by
              <br />
              <span>doing the work.</span>
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

        </div>
      </ScrollReveal>
    </section>
  );
}
