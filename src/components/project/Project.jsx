import React from 'react'
import './Project.scss';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
  return (
    <>
       
          <div className="card">
            <Link to={`designs/${project.id}`}>
              {" "}
              <div className="img">
                <img src={project.img} alt={project.title} />
              </div>
            </Link>

            <div className="info">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a href={project.demo} className="cta a" target='_blank'>
                View Online
              </a>
            </div>
          </div>
    </>
  )
}

export default Project