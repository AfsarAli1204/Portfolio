import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p>What I Work With</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Frontend Development</h3>

            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>React</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Backend Development</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>Node.js</span>
              <span>REST APIs</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Database & Tools</h3>

            <div className="skill-list">
              <span>MySQL</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Core Concepts</h3>

            <div className="skill-list">
              <span>OOP</span>
              <span>CRUD</span>
              <span>SDLC</span>
              <span>Database Design</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;