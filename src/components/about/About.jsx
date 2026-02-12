import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import img from "../../assets/laptop.png";

const About = () => {
  return (
    <div className="about">



      <div className="extras">

      </div>



      <div className="txt">
        <div className="txt-info">
          <span className="note">About Seene</span>
          <h1>Who is Seenne?</h1>
          <p>
            I’m Sarah (Seenne), a frontend web developer specializing in modern
            and interactive website experiences.
          </p>
          <p>
            Web development is both my passion and profession. I work as a
            freelancer on different platforms as
            <a href="#" className="link">
              Fiverr
            </a>
            ,
            <a href="#" className="link">
              Upwork
            </a>
            , and
            <a href="#" className="link">
              Freelancer
            </a>
          </p>
        </div>
        <div className="img-cont">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="edu">
        <div className="text line-effect">
          <h2>Education & Learning</h2>
        </div>

        <div className="edu-cont">
          <div className="edu-item">
            <div className="info">
              <h3>My Journey</h3>
              <p>
                I started my educational journey at 2019, as a self-learner. I
                learned from reading books, following professional developers,
                and attending online boot camps! Simultaneously, building and
                selling web apps, gaining experience and getting to deal with
                different mindsets.
              </p>
            </div>
            <div className="img-cont">
              <img src={img} alt="" />
            </div>
          </div>

          <div className="edu-item">
            <div className="info">
              <h3>Academic Education</h3>
              <p>
                I am currently a student at the{" "}
                <a href="#" className="link">
                  MEU - Middle East University
                </a>
                , studying{" "}
                <a href="#" className="link">
                  Intelligent Systems Engineering
                </a>
                .
              </p>
              <p>
                I won a scholarship on the{" "}
                <a href="#" className="link">
                  HTUx
                </a>{" "}
                platform from{" "}
                <a href="#" className="link">
                  HTU - Al Hussein Technical University
                </a>
                , which was a great jump in my eductational path!
              </p>
            </div>
            <div className="img-cont">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cer">
        <div className="text">
          <div className="title line-effect">
            <h2 className="">Certificates</h2>
          </div>
          <p>Here are some of my well-earned certificates:</p>
        </div>
        <div className="cer-item">
          <h4>Legacy Responsive Web Design</h4>
          <div className="info">
            <h5>- FreeCodeCapm</h5>
            <div className="date">
              <p>Jan 10, 2023</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>
        <div className="cer-item">
          <h4>Legacy JavaScript Algorithms and Data Structures</h4>
          <div className="info">
            <h5>- FreeCodeCapm</h5>
            <div className="date">
              <p>Mar 27, 2024</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a
            href="https://www.credential.net/f3c35892-1caa-40bf-b9b7-281e05930fa8#acc.fZS9oRl8"
            className="a"
          >
            <h4>Basic Concepts</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Nov 9, 2024</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a
            href="https://www.credential.net/0e2b9fc4-a00c-410f-95be-96ab921c11e1#acc.0ujZMUB3"
            className="a"
          >
            <h4>HTML</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Apr 16, 2025</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a
            href="https://www.credential.net/78719f22-577c-4fd2-9b0c-ce2390525f2a#acc.iEQzRJGC"
            className="a"
          >
            <h4>CSS</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Apr 24, 2025</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a
            href="https://www.credential.net/175efd98-f28f-42a0-aa39-b77dacdba2b3#acc.5gCuO3Fq"
            className="a"
          >
            <h4>JavaScript</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Apr 25, 2025</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a href="" className="a">
            <h4>React</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Jul 13, 2025</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a
            href="https://www.credential.net/74493c4a-b172-48a9-a09c-96ae624ede4f#acc.5zoCVas0"
            className="a"
          >
            <h4>Node JS & Database</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Jan 10, 2023</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="cer-item">
          <a
            href="https://www.credential.net/07b34ca1-54e8-45ec-82a0-d6b1404e5aab#acc.oqFHuU0D"
            className="a"
          >
            <h4>Full Stack Web Development</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date">
              <p>Aug 27, 2025</p>
              <i className="fa-solid i fa-calendar"></i>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
