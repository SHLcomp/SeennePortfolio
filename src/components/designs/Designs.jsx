import React from "react";
import "./Designs.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import projects from '../../data/projects.js'

const Designs = () => {


  return (
    <section className="designs">
      <div className="text">
        <span className="note">Projects & Case Studies</span>
        <h1>Designs That Turn Ideas Into Experiences</h1>
        <p>Showcasing real client work and UI/UX solutions.</p>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={project.img} alt={project.title} />
            </div>

            <div className="info">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a href={project.demo} className="cta a">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
