import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-info">
          <h3>Afsar Ali</h3>

          <p>
            Aspiring Software Developer
          </p>
        </div>

        <div className="footer-links">

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

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=afsar7317ali@gmail.com" target="_blank">
           Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Afsar Ali. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;