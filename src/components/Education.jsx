import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-title">
        <p>My Academic Background</p>
        <h2>Education</h2>
        <span></span>
      </div>

      <div className="education-container">

        {/* MCA */}
        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">
            <h3>Master of Computer Applications (MCA)</h3>

            <h4>Software Development</h4>

            <p className="education-university">
              Sri Balaji University, Pune
            </p>

            <p className="education-status">
              Completed
            </p>
          </div>

        </div>


        {/* BSc */}
        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">
            <h3>BSc Computer Science</h3>

            <p className="education-university">
              Hemchand Yadav University, Durg, Chhattisgarh
            </p>

            <p className="education-status">
              Completed
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;