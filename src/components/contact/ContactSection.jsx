import React from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-text">
          <h2>Let’s Work Together</h2>
          <p>
            Have a project idea or want to collaborate?  
            Send me a message and I’ll get back to you soon.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="number" placeholder="Your Phone number" />
          <textarea placeholder="Your Message" rows="4" required />

          <button type="submit" className="cta2">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
