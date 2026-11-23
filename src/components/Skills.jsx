import ScrollReveal from "./ScrollReveal";

export default function Skills() {

  const skillGroups = [
    {
      number: "01",
      title: "DATA & DATABASES",
      skills: ["Python", "SQL", "SQLite", "Data Analysis"],
    },
    {
      number: "02",
      title: "APPLIED AI / ML",
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "OpenCV",
      ],
    },
    {
      number: "03",
      title: "PROGRAMMING",
      skills: ["Java", "C", "JavaScript"],
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

          <div className="skills-header section-header">

            <p className="skills-label section-label">
              02 — SKILLS
            </p>

            <p className="skills-side section-side">
              A focused mix of
              <br />
              software and data tools.
            </p>

          </div>


          <div className="skills-title">

            <h2 className="section-title">
              A practical
              <br />
              <span>toolkit.</span>
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


        </div>

      </ScrollReveal>

    </section>
  );
}