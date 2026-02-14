import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./ProjectDisplay.scss";
import { useLocation } from "react-router-dom";

const ProjectDisplay = ({proj}) => {

  const {pathname} = useLocation();
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // or "smooth" if you want animation
    });
  }, [pathname]);

  return (
    <>
      <Navbar />

      <div className="projectDisplay">

        {/* HERO */}
        <div className="top">
          <div className="txt">
            <h1>{proj.title}</h1>
            <p>{proj.desc}</p>

            <div className="btns">
              {proj.demo && (
                <a href={proj.demo} target="_blank" className="cta a">
                  Live Demo
                </a>
              )}

              {proj.github && (
                <a href={proj.github} target="_blank" className="cta2 a">
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div className="img-cont">
            <img src={proj.showcaseImg} alt={proj.title} />
          </div>
        </div>

        {/* TECH STACK */}
        <section className="section">
          <h2>Technologies Used</h2>
          <div className="tech">
            {proj.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        {proj.features && (
          <section className="section">
            <h2>Key Features</h2>
            <ul>
              {proj.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {/* WORKFLOW */}
        {proj.workflow && (
          <section className="section">
            <h2>Development Workflow</h2>
            <p>{proj.workflow}</p>
          </section>
        )}

      </div>
    </>
  );
};

export default ProjectDisplay;
