import React from "react";
import "./Contact.scss";
import Navbar from "../components/navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className="contact">
      
      {/* TITLE */}
      <div className="text line-effect">
        <h2>Let’s Build Something Amazing Together</h2>
        <p>
          Have an idea, project, or collaboration in mind? 
          I’m always excited to work on creative and impactful projects.
        </p>
      </div>

      {/* CONTACT CONTENT */}
      <div className="contact-cont">

        {/* LEFT INFO */}
        <div className="contact-info">

          <div className="info-item">
            <h4>Email</h4>
            <a href="mailto:your@email.com">your@email.com</a>
          </div>

          <div className="info-item">
            <h4>Freelance Platforms</h4>
            <div className="links">
              <a href="#">Fiverr</a>
              <a href="#">Upwork</a>
              <a href="#">Freelancer</a>
            </div>
          </div>

          <div className="info-item">
            <h4>Availability</h4>
            <p>Open for freelance & collaborations</p>
          </div>

        </div>

        {/* FORM */}
        <form className="contact-form">

          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="number" required />
            <label>Phone Number</label>
          </div>

          <div className="input-group">
            <textarea rows="5" required></textarea>
            <label>Message</label>
          </div>

          <button className="cta">Send Message</button>

        </form>

      </div>

    </section>
    </>
  );
};

export default Contact;
