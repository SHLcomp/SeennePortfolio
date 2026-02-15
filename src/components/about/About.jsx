import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import img2 from "../../assets/workplace.png";
import img3 from "../../assets/lp.png";
import img from "../../assets/keyboard.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    // HERO ANIMATION
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about .txt",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".note", {
      opacity: 0,
      y: 40,
      duration: 0.5,
      delay: 0.5,
      ease: "power3.out",
    })
      .from(
        ".txt-info h1",
        { opacity: 0, x: -80, duration: 0.8, ease: "power4.out" },
        "-=0.4",
      )
      .from(
        ".txt-info p",
        { opacity: 0, y: 40, stagger: 0.2, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .from(
        ".img-cont img",
        {
          opacity: 0,
          scale: 0.8,
          rotate: 4,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8",
      );

    // FLOATING IMAGE PARALLAX
    gsap.to(".img-cont img", {
      y: 40,
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
      },
    });

    // SKILLS & EDUCATION ANIMATION
    gsap.from(".edu .text", {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: { trigger: ".edu", start: "top 75%" },
    });
    gsap.from(".edu-item", {
      opacity: 0,
      y: 300,
      stagger: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".edu-cont",
        start: "top 70%",
        end: "bottom 60%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="about">
      <div className="extras"></div>

      {/* HERO SECTION */}
      <div className="txt">
        <div className="txt-info">
          <span className="note">Who is Seenne?</span>
          <h1>Code Artisan & Innovation Seeker</h1>
          <p>
            Hi, I’m Sarah, known as Seenne. I turn ideas into interactive web
            experiences with clean, modern frontend magic.
          </p>
          <p>
            Beyond the code, I’m a digital problem solver and storyteller. You
            can find me crafting projects on{" "}
            <a href="https://www.fiverr.com/s/NNAXmWV" className="link" target="_blank">
              Fiverr
            </a>
            ,{" "}
            <a href="https://www.upwork.com/freelancers/~01b63512a1803ab468?mp_source=share" className="link" target="_blank">
              Upwork
            </a>
            , and{" "}
            <a href="https://www.freelancer.com/u/SarahHerzAllah?frm=SarahHerzAllah&sb=t" className="link" target="_blank">
              Freelancer
            </a>
            , bringing visions to life one line of code at a time.
          </p>
        </div>
        <div className="img-cont">
          <img src={img3} alt="Seenne coding" />
        </div>
      </div>

      {/* EDUCATION & PERSONAL GROWTH */}
      <div className="edu">
        <div className="text line-effect">
          <h2>Exploration & Mastery</h2>
        </div>

        <div className="edu-cont">
          <div className="edu-item item1">
            <div className="info">
              <h3>Code Quest</h3>
              <p>
                My coding adventure began at 15. I dived into HTML, CSS, and
                JavaScript with nothing but curiosity and determination.
                <br />
                <br />
                Along the way, I earned multiple certifications, sharpened my
                skills through hands-on projects, and freelanced for real
                clients. Every challenge strengthened my understanding and
                fueled my love for creative solutions.
              </p>
              <div className="cta-cont">
                <Link to={"/about"} className="cta2 a">
                  Discover More
                </Link>
              </div>
            </div>
            <div className="img-cont">
              <img src={img2} alt="Coding journey" />
            </div>
          </div>

          <div className="edu-item item2">
            <div className="info">
              <h3>Lab of Learning</h3>
              <p>
                At{" "}
                <a href="https://www.meu.edu.jo/" className="link" target="_blank">
                  Middle East University
                </a>
                , I explore the frontier of Intelligent Systems Engineering.
                <br />
                <br />I combine structured learning with hands-on
                experimentation, attending workshops, and online bootcamps to
                continuously level up my skills.
              </p>
              <p>
                Through scholarships at{" "}
                <a href="https://htux.org/" className="link" target="_blank">
                  HTUx
                </a>{" "}
                and guidance from mentors at{" "}
                <a href="https://www.htu.edu.jo/" className="link" target="_blank">
                  HTU
                </a>
                , I gain the insight and confidence to tackle real-world
                challenges in web development.
              </p>
            </div>
            <div className="img-cont">
              <img src={img} alt="Academic learning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
