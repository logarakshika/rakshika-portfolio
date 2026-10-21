import ScrollReveal from "./ScrollReveal";

export default function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "2nd Prize",
      event: "Eureka",
      image: "/certificates/eureka.png",
    },
    {
      number: "02",
      title: "Special Mention + Awarded  ₹10,000",
      event: "TNWISE Hackathon",
      image: "/certificates/tnwise.png",
    },
    {
      number: "03",
      title: "State-Level Participant",
      event: "NimirNthu Nil Hackathon",
      image: "/certificates/nimirthu-nil.png",
    },
    {
      number: "04",
      title: "Best Presentation Award",
      event: "Thinkathon 9.0",
      image: "/certificates/Thinkathon.jpeg",
    },
  ];

  return (
    <section
      className="achievements-section"
      id="achievements"
    >
      <ScrollReveal>

        <div className="achievements-container">

          {/* HEADER */}
          <div className="achievements-header">

            <p className="achievements-label">
              05 — ACHIEVEMENTS
            </p>

            <p className="achievements-side">
              Milestones,
              <br />
              competitions & recognition.
            </p>

          </div>


          {/* TITLE */}
          <div className="achievements-title">

            <h2>
              Moments that
              <br />
              <span>made me proud.</span>
            </h2>

          </div>


          {/* ACHIEVEMENT GRID */}
          <div className="achievements-grid">

            {achievements.map((achievement, index) => (

              <article
                className="achievement-card scroll-card"
                key={achievement.number}
                style={{
                  transitionDelay: `${index * 140}ms`,
                }}
              >

                {/* CERTIFICATE IMAGE */}
                <div className="achievement-image">

                  <span className="achievement-image-number">
                    {achievement.number}
                  </span>

                  <img
                    src={achievement.image}
                    alt={`${achievement.event} certificate`}
                    className="achievement-certificate"
                  />

                </div>


                {/* DETAILS */}
                <div className="achievement-content">

                  <p className="achievement-category">
                    ACHIEVEMENT
                  </p>

                  <h3>
                    {achievement.title}
                  </h3>

                  <h4>
                    {achievement.event}
                  </h4>

                  <p className="achievement-detail">
                    {achievement.detail}
                  </p>

                </div>


                {/* ARROW */}
                <div className="achievement-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>


          {/* FOOTER */}
          <div className="achievements-bottom">

            <p>
              PARTICIPATE · PRESENT · BUILD · GROW
            </p>

          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}