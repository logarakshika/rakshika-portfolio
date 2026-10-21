
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Anomaly Guardian",
      category: "AI / DATA ANALYSIS",
      tech: "Python · AI/ML · Data Analysis · Real-Time Monitoring",
      description:
        "A data-driven monitoring system focused on identifying unusual patterns and supporting real-time analysis.",
      image: "/projects/anomaly-guardian.png",
      github: "https://github.com/logarakshika/anomaly-guardian",
    },

    {
      number: "02",
      title: "Azure Breeze",
      category: "WEB DEVELOPMENT",
      tech: "HTML · CSS · JavaScript",
      description:
        "A web project built using frontend technologies, focusing on a clean and user-friendly website experience.",
      image: "/projects/azure-breeze.jpeg",
      github: "https://github.com/logarakshika/azure-breeze",
    },

    {
      number: "03",
      title: "Movie Registration",
      category: "WEB APPLICATION",
      tech: "Python · Flask · MongoDB",
      description:
        "A movie ticket booking system where users can register, log in, browse movies, select seats, and book tickets.",
      image: "/projects/movie-registration.jpg",
      github: "https://github.com/logarakshika/Movie-registration",
    },

    {
      number: "04",
      title: "HearIT Sense",
      category: "ASSISTIVE TECHNOLOGY / IoT",
      tech: "ESP32 · 8 Push Buttons · Embedded Systems · Web Interface",
      description:
        "A smart wearable communication glove developed by Team Strategix at S.A. Engineering College. It uses an ESP32 and 8 push buttons to help people with hearing and speech impairments communicate through predefined messages and a web interface.",
      image: "/projects/hearit-sense.jpeg",
      github: "",
    },

    {
      number: "05",
      title: "Thiralvizhi",
      category: "INTELLIGENT TRANSPORTATION",
      tech: "Data-Driven Systems · Intelligent Transportation · Urban Computing",
      description:
        "A smart transportation system focused on analysing and optimising bus flow using data-driven approaches.",
      image: "/projects/thiralvizhi.jpeg",
      github: "",
    },
  ];

  return (
    <section
      className="projects-section"
      id="projects"
    >
      <ScrollReveal>
        <div className="projects-container">

          {/* HEADER */}
          <div className="projects-header">
            <p className="projects-label">
              04 — PROJECTS
            </p>

            <p className="projects-side">
              Things I've built
              <br />
              and problems I've explored.
            </p>
          </div>

          {/* TITLE */}
          <div className="projects-title">
            <h2>
              Turning ideas
              <br />
              <span>into projects.</span>
            </h2>
          </div>

          {/* PROJECT LIST */}
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                className="project-card scroll-card"
                key={project.number}
                style={{
                  transitionDelay: `${index * 160}ms`,
                }}
              >
                
<div className="project-visual">
  <div className="project-visual-number">
    {project.number}
  </div>

  <div className="project-visual-placeholder">
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="project-preview-image"
      />
    ) : (
      "PROJECT VISUAL"
    )}
  </div>
</div>


                {/* PROJECT INFO */}
                <div className="project-info">
                  <div className="project-meta">
                    <span>
                      {project.category}
                    </span>

                    <span>
                      {project.number}
                    </span>
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-tech">
                    {project.tech}
                  </p>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* ACTIONS */}
                  <div className="project-actions">
                    {project.github ? (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          VIEW PROJECT ↗
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link secondary"
                        >
                          GITHUB ↗
                        </a>
                      </>
                    ) : (
                      <span className="project-link">
                        PROJECT LINK COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="projects-bottom">
            <p>
              BUILDING · TESTING · LEARNING
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
