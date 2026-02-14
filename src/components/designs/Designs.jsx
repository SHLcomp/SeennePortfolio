import React from "react";
import "./Designs.scss";
import { Link } from "react-router-dom";
import Project from "../project/Project.jsx";

const Designs = () => {
  return (
    <section className="designs" id="designs">
      <div className="text">
        <span className="note">Projects & Case Studies</span>
        <h1>Designs That Turn Ideas Into Experiences</h1>
        <p>Showcasing real client work and UI/UX solutions.</p>
      </div>

      <div className="projects">
        <Project />
      </div>
    </section>
  );
};

export default Designs;
