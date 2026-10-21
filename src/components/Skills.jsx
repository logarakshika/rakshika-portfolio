import ScrollReveal from "./ScrollReveal";

export default function Skills() {

  const skillGroups = [
    {
      number: "01",
      title: "PROGRAMMING",
      skills: ["Python", "Java", "C", "JavaScript"],
    },
    {
      number: "02",
      title: "DATA & DATABASES",
      skills: ["SQL", "SQLite", "Data Analysis"],
    },
    {
      number: "03",
      title: "AI / ML",
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "OpenCV",
      ],
    },
    {
      number: "04",
      title: "WEB & TOOLS",
      skills: [
        "HTML",
        "CSS",
        "Git",
        "GitHub",
        "Streamlit",
        "VS Code",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">

      <ScrollReveal>

        <div className="skills-container">

          <div className="skills-header">

            <p className="skills-label">
              02 — SKILLS
            </p>

            <p className="skills-side">
              Technologies I use
              <br />
              to build and analyse.
            </p>

          </div>


          <div className="skills-title">

            <h2>
              Tools for
              <br />
              <span>building ideas.</span>
            </h2>

          </div>


          <div className="skills-grid">

            {skillGroups.map((group, index) => (

  <div
    className="skill-card scroll-card"
    key={group.number}
    style={{
      transitionDelay: `${index * 120}ms`,
    }}
  >

                <div className="skill-card-top">

                  <span>
                    {group.number}
                  </span>

                  <span>
                    ↗
                  </span>

                </div>


                <h3>
                  {group.title}
                </h3>


                <div className="skill-list">

                  {group.skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>


          <div className="skills-bottom">

            <p>
              LEARN · BUILD · ANALYSE · IMPROVE
            </p>

          </div>

        </div>

      </ScrollReveal>

    </section>
  );
}