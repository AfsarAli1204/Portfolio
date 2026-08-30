import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>I'm Afsar Ali, a Software Developer.</h3>

            <p>
              I am an MCA graduate specializing in Software Development
              with a strong interest in building practical and user-friendly
              software applications.
            </p>

            <p>
              I have worked with technologies such as Python, JavaScript,
              React, HTML, CSS and SQL. I enjoy solving problems, learning
              new technologies and turning ideas into working applications.
            </p>

            <p>
              As a fresher, I am looking for an opportunity where I can
              contribute to real-world projects, improve my technical skills
              and grow as a software developer.
            </p>
          </div>

          <div className="about-info">

            <div className="info-card">
              <h4>Education</h4>
              <p>MCA - Software Development</p>
            </div>

            <div className="info-card">
              <h4>Focus</h4>
              <p>Software & Web Development</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Pune, India</p>
            </div>

            <div className="info-card">
              <h4>Availability</h4>
              <p>Open to Opportunities</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;