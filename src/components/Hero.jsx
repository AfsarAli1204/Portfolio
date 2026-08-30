import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* Hero Text */}
        <div className="hero-text">

          <p className="hero-intro">
            Hello, I'm 👋
          </p>

          <h1>
            Afsar Ali
          </h1>

          <h2>
            MCA Graduate & Aspiring Software Developer
          </h2>

          <p className="hero-description">
            I build modern web applications and software solutions
            using Python, React, JavaScript and SQL.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn primary-btn"
            >
              View My Projects
            </a>

            <a
              href="/Afsar_Ali_Resume.pdf"
              download="Afsar_Ali_Resume.pdf"
              className="hero-btn secondary-btn"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/AfsarAli1204"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/afsar-ali1204/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=afsar7317ali@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>

          </div>

        </div>

        {/* Profile Photo */}
        <div className="hero-image">
          <img
            src="/profile.jpeg"
            alt="Afsar Ali"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;