
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Anomaly Guardian",
      category: "AI / DATA ANALYSIS",
      tech: "Python · AI/ML · Data Analysis · Real-Time Monitoring",
      description:
        "Uses data analysis to surface unusual patterns and support real-time monitoring.",
      image: "/projects/anomaly-guardian.png",
      github: "https://github.com/logarakshika/anomaly-guardian",
    },

    {
      number: "02",
      title: "Azure Breeze",
      category: "WEB DEVELOPMENT",
      tech: "HTML · CSS · JavaScript",
      description:
        "A frontend project designed around a clear, easy-to-use browsing experience.",
      image: "/projects/azure-breeze.jpeg",
      github: "https://github.com/logarakshika/azure-breeze",
    },

    {
      number: "03",
      title: "Movie Registration",
      category: "WEB APPLICATION",
      tech: "Python · Flask · MongoDB",
      description:
        "A Flask and MongoDB booking app for account access, movie browsing, seat selection, and ticket reservations.",
      image: "/projects/movie-registration.jpg",
      github: "https://github.com/logarakshika/Movie-registration",
    },

    {
      number: "04",
      title: "HearIT Sense",
      category: "ASSISTIVE TECHNOLOGY / IoT",
      tech: "ESP32 · 8 Push Buttons · Embedded Systems · Web Interface",
      description:
        "A Team Strategix wearable prototype that uses an ESP32 and eight buttons to send preset messages through a web interface.",
      image: "/projects/hearit-sense.jpeg",
      github: "",
    },

    {
      number: "05",
      title: "Thiralvizhi",
      category: "INTELLIGENT TRANSPORTATION",
      tech: "Data-Driven Systems · Intelligent Transportation · Urban Computing",
      description:
        "A data-led concept for analysing and improving bus movement in urban settings.",
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
          <div className="projects-header section-header">
            <p className="projects-label section-label">
              04 — PROJECTS
            </p>

            <p className="projects-side section-side">
              Selected work across
              <br />
              data, software, and access.
            </p>
          </div>

          {/* TITLE */}
          <div className="projects-title">
            <h2 className="section-title">
              Ideas put
              <br />
              <span>to work.</span>
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
                          View on GitHub ↗
                        </a>
                      </>
                    ) : (
                      <span className="project-link project-note">
                        Team project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
