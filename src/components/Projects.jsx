import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-title">
        <p>What I Have Built</p>
        <h2>My Projects</h2>
        <span></span>
      </div>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-number">
            01
          </div>

          <h3>Tour & Travel Management System</h3>

          <p>
            A web-based tour and travel management system designed
            to provide users with a simple and user-friendly
            experience for managing travel-related activities.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MySQL</span>
          </div>

          <div className="project-buttons">
            <a
            href="https://github.com/AfsarAli1204/Tour-And-Travel-Management-System.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
            >
            GitHub
            </a>
          </div>

        </div>


        {/* Project 2 */}
        <div className="project-card">

          <div className="project-number">
            02
          </div>

          <h3>Beneficiary Documentation Tool</h3>

          <p>
            A documentation management application developed
            during my virtual internship to manage beneficiary
            information efficiently using a structured web
            application.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MySQL</span>
          </div>

          <div className="project-buttons">
            <a
            href="https://github.com/AfsarAli1204/Beneficiary-Documentation-Tool.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
            >
            GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;