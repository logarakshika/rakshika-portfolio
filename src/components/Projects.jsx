import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    category: "DATA ANALYSIS · EDUCATION",
    title: "Student Performance Analysis & Dashboard",
    technologies: ["Microsoft Excel", "Data Analysis", "Dashboard Development"],
    description:
      "Analysis of approximately 250 student records to understand academic performance, pass percentage, grade distribution and subject-wise trends.",
    focus:
      "Subject-wise performance, grade distribution, pass rate and section comparisons.",
    image: "/projects/student-performance-dashboard.png",
    imageAlt:
      "Excel dashboard showing student totals, pass rate, grade distribution and average marks by subject",
    github:
      "https://github.com/logarakshika/student-performance-analysis-excel",
  },
  {
    number: "02",
    category: "BUSINESS ANALYSIS · SQL",
    title: "Retail Sales & Customer Analysis",
    technologies: ["SQL", "MySQL", "CTEs", "Joins", "Window Functions"],
    description:
      "A SQL-based analysis project exploring sales performance, customer spending, product revenue and repeat purchase behaviour using a sample dataset.",
    focus:
      "Revenue trends, product performance, customer spending and repeat orders.",
    image: "/projects/retail-sales-analysis.png",
    imageAlt:
      "MySQL Workbench query and result from the retail sales analysis project",
    github: "https://github.com/logarakshika/retail-sales-sql-analysis",
  },
  {
    number: "03",
    category: "AI / DATA ANALYSIS",
    title: "Anomaly Guardian",
    technologies: ["Python", "AI/ML", "Data Analysis", "Real-Time Monitoring"],
    description:
      "Uses data analysis to surface unusual patterns and support real-time monitoring.",
    focus:
      "Machine-learning anomaly detection, real-time insights, alerts and visual dashboards.",
    image: "/projects/anomaly-guardian.png",
    imageAlt: "Anomaly Guardian project interface preview",
    github: "https://github.com/logarakshika/anomaly-guardian",
  },
  {
    number: "04",
    category: "INTELLIGENT TRANSPORTATION",
    title: "Thiralvizhi",
    subtitle: "Smart Bus Flow Optimisation System",
    technologies: ["ESP32", "Entry/Exit Sensors", "LCD Display"],
    description:
      "A data-led concept for analysing and improving bus movement in urban settings.",
    focus:
      "The existing prototype visual shows entry and exit sensors, an ESP32 control unit and a bus-count display.",
    image: "/projects/thiralvizhi.jpeg",
    imageAlt:
      "Bus-counting prototype diagram with entry and exit sensors, an ESP32 controller and an LCD display",
    github: "",
  },
  {
    number: "05",
    category: "AI / EDUCATION",
    title: "AI-Based Personalized Study Plan Generator",
    technologies: ["Python", "Streamlit", "Scikit-learn", "SQLite"],
    description:
      "A Streamlit app that uses student marks to build a personalized daily study timetable, with progress tracking and PDF/email export.",
    focus:
      "Subject strength prediction, time-aware scheduling, progress logging and plan export.",
    image: "/projects/study-plan-generator.png",
    imageAlt:
      "AI Study Plan Generator Streamlit interface showing subject mark inputs",
    github: "https://github.com/logarakshika/Main_projects",
  },
  {
    number: "06",
    category: "FRONTEND · BRAND CONCEPT",
    title: "Azure Breeze",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A fragrance-brand web concept with a clear browsing experience and a visual identity built around freshness and elegance.",
    focus:
      "Fragrance brand identity, product presentation and visual direction.",
    image: "/projects/azure-breeze.jpeg",
    imageAlt: "Azure Breeze fragrance brand identity artwork",
    github: "https://github.com/logarakshika/azure-breeze",
  },
];

function ProjectImage({ project }) {
  return (
    <div className="project-visual">
      <div className="project-image-frame">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="project-preview-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <div className="project-info">
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.number} / 06</span>
      </div>

      <h3>{project.title}</h3>
      {project.subtitle && (
        <p className="project-subtitle">{project.subtitle}</p>
      )}

      <ul className="project-tech" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <p className="project-description">{project.description}</p>

      <div className="project-focus">
        <span>Project focus</span>
        <p>{project.focus}</p>
      </div>

      {project.github && (
        <div className="project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} on GitHub`}
          >
            View repository <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
}

function StackedProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{
        "--stack-offset": `${index * 16}px`,
        zIndex: index + 1,
      }}
    >
      <ProjectImage project={project} />
      <ProjectDetails project={project} />
    </article>
  );
}

export default function Projects() {
  const projectsListRef = useRef(null);

  useEffect(() => {
    const list = projectsListRef.current;

    if (!list) return undefined;

    const cards = [...list.querySelectorAll(".project-card")];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    let frame = 0;

    const updateDepth = () => {
      frame = 0;

      const stackEnabled = window.innerWidth > 700 && !reducedMotion.matches;
      if (!stackEnabled) {
        cards.forEach((card) => {
          card.style.setProperty("--stack-scale", "1");
          card.style.setProperty("--stack-opacity", "1");
        });
        return;
      }

      const viewportEdge = window.innerHeight + 120;
      const positions = cards.map((card) => ({
        top: card.getBoundingClientRect().top,
        stickyTop: Number.parseFloat(window.getComputedStyle(card).top) || 0,
      }));

      positions.forEach((position, index) => {
        let depth = 0;

        for (
          let nextIndex = index + 1;
          nextIndex < positions.length;
          nextIndex += 1
        ) {
          const next = positions[nextIndex];
          const travel = viewportEdge - next.stickyTop;
          depth += Math.max(
            0,
            Math.min(1, (viewportEdge - next.top) / travel)
          );
        }

        const visibleDepth = Math.min(depth, 2);
        cards[index].style.setProperty(
          "--stack-scale",
          (1 - visibleDepth * 0.03).toFixed(3)
        );
        cards[index].style.setProperty(
          "--stack-opacity",
          (1 - visibleDepth * 0.03).toFixed(3)
        );
      });
    };

    const scheduleDepthUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateDepth);
    };

    window.addEventListener("scroll", scheduleDepthUpdate, { passive: true });
    window.addEventListener("resize", scheduleDepthUpdate);
    reducedMotion.addEventListener("change", scheduleDepthUpdate);
    scheduleDepthUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleDepthUpdate);
      window.removeEventListener("resize", scheduleDepthUpdate);
      reducedMotion.removeEventListener("change", scheduleDepthUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-container">
        <div className="projects-header section-header">
          <p className="projects-label section-label">04 — PROJECTS</p>
          <p className="projects-side section-side">
            Selected work across
            <br />
            data, products, and systems.
          </p>
        </div>

        <div className="projects-title">
          <h2 className="section-title" id="projects-title">
            Ideas put
            <br />
            <span>to work.</span>
          </h2>
        </div>

        <div className="projects-list" ref={projectsListRef}>
          {projects.map((project, index) => (
            <StackedProjectCard
              project={project}
              index={index}
              key={project.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
