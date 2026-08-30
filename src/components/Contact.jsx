import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .send(
        "service_ji12hur",
        "template_4m9ci1c",
        formData,
        "DxuNSQpnZxFpQpW0U"
      )
      .then(() => {
        setStatus("Message sent successfully! ✅");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
        <span></span>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always open to discussing new opportunities,
            projects, and ideas. Feel free to reach out to me.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <span>📧</span>

              <div>
                <h4>Email</h4>

                <a href="mailto:afsar7317ali@gmail.com">
                  afsar7317ali@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>

              <div>
                <h4>Location</h4>

                <p>Pune, India</p>
              </div>
            </div>

          </div>

        </div>


        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

          </div>


          <button
            type="submit"
            className="contact-btn"
          >
            Send Message
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;