import React from "react";
import "./Contact.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    // Animate the title and description
    gsap.from(".contact .text h2", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact .text",
        start: "top 80%",
      },
    });

    gsap.from(".contact .text p", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact .text",
        start: "top 80%",
      },
    });

    // Animate info items on the left
    gsap.from(".contact-info .info-item", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 85%",
      },
    });

    // Animate form fields
    gsap.from(".contact-form .input-group", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%",
      },
    });

    // Animate submit button
    gsap.from(".contact-form .cta", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%",
      },
    });
  });

  return (
    <>
      <Navbar />
      <section className="contact">
        {/* TITLE */}
        <div className="text line-effect">
          <h2>Let’s Build Something Amazing Together</h2>
          <p>
            Have an idea, project, or collaboration in mind? I’m always excited
            to work on creative and impactful projects.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="contact-cont">
          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:sara12321@gmail.com?subject=Project Inquiry&body=Hello Sarah, I would like to discuss a project with you." target="_blank" rel="noopener noreferrer">sara12321@gmail.com</a> {/*Here ... it doesn't work*/}
            </div>

            <div className="info-item">
              <h4>Freelance Platforms</h4>
              <div className="links">
                <a href="https://www.fiverr.com/s/NNAXmWV">Fiverr</a>
                <a href="https://www.upwork.com/freelancers/~01b63512a1803ab468?mp_source=share">Upwork</a>
                <a href="https://www.freelancer.com/u/SarahHerzAllah?frm=SarahHerzAllah&sb=t">Freelancer</a>
              </div>
            </div>

            <div className="info-item">
              <h4>Availability</h4>
              <p>Open for freelance & collaborations</p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="contact-form"
            action="https://formspree.io/f/maqdobev"
            method="POST"
          >
            <div className="input-group">
              <input name="Name" type="text" required />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input name="Email" type="email" required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <input name="Phone" type="number" required />
              <label>Phone Number</label>
            </div>

            <div className="input-group">
              <textarea name="msg" rows="5" required></textarea>
              <label>Message</label>
            </div>

            <button className="cta">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
