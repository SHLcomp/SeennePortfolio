import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link";

const Footer = () => {

  useGSAP(() => {
    gsap.from(".footer-cont > div", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
      }
    });
  });

  return (
    <footer className="footer noise">
      <div className="footer-cont">

        {/* Branding */}
        <div className="brand">
          <h2>Seenne</h2>
          <p>
            Frontend Designer & Developer creating modern interactive web
            experiences.
          </p>
          <span className="availability">
            ✔ Available for freelance projects
          </span>
        </div>

        {/* Quick Links */}
        <div className="links">
          <h3>Navigation</h3>
          <Link className="a" to="/">Home</Link>
          <Link className="a" to="/about">About</Link>
          <HashLink className="a" to="/#designs">Designs</HashLink> {/*Here, I need the user to be able to visit the home page and exactly on the #designs section*/}
          <Link className="a" to="/contact">Contact</Link>
        </div>

        {/* Freelance Platforms */}
        <div className="freelance">
          <h3>Hire Me</h3>
          <a className="a" href="https://www.fiverr.com/s/NNAXmWV">Fiverr</a>
          <a className="a" href="https://www.upwork.com/freelancers/~01b63512a1803ab468?mp_source=share">Upwork</a>
          <a className="a" href="https://www.freelancer.com/u/SarahHerzAllah?frm=SarahHerzAllah&sb=t">Freelancer</a>
        </div>

        {/* Social */}
        <div className="social">
          <h3>Connect</h3>
          <a className="a" href="https://github.com/SHLcomp">GitHub</a>
          <a className="a" href="www.linkedin.com/in/sarah-bader-98894725a">LinkedIn</a>
          {/* <a className="a" href="#">Behance</a> */}
        </div>

      </div>

      <div className="bottom">
        <p>© {new Date().getFullYear()} Seenne — Designed & Developed by Me</p>
      </div>
    </footer>
  );
};

export default Footer;
