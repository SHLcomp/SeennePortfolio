import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./AboutPage.scss";
import img3 from "../assets/bg2.jpg";
import img2 from "../assets/lp2.jpg";
import img1 from "../assets/laptop.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutPage = () => {

    const {pathname} = useLocation();
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // or "smooth" if you want animation
    });
  }, [pathname]);


  useGSAP(() => {
    // TEXT ANIMATION
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-page .txt",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".note", { opacity: 0, y: 40, duration: 0.5, delay: 0.5, ease: "power3.out" })
      .from(".txt-info h1", { opacity: 0, x: -80, duration: 0.8, ease: "power4.out" }, "-=0.4")
      .from(".txt-info p", { opacity: 0, y: 40, stagger: 0.2, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".img-cont img", { opacity: 0, scale: 0.8, rotate: 4, duration: 1.2, ease: "power4.out" }, "-=0.8");

    // FLOATING IMAGE PARALLAX
    gsap.to(".img-cont img", {
      y: 40,
      scrollTrigger: { trigger: ".about-page", start: "top bottom", end: "bottom top" },
    });

    // EDUCATION ANIMATION
    gsap.from(".edu .text", { opacity: 0, y: 80, duration: 1, scrollTrigger: { trigger: ".edu", start: "top 75%" } });
    gsap.from(".edu-item", {
      opacity: 0,
      y: 300,
      stagger: 0.4,
      ease: "power3.out",
      scrollTrigger: { trigger: ".edu-cont", start: "top 70%", end: "bottom 60%", scrub: 1 },
    });

    // CERTIFICATES ANIMATION
    gsap.from(".cer .cer-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: { trigger: ".cer", start: "top 80%" },
    });
  });

  return (
    <div className="about-page">
      <Navbar />

      {/* INTRO */}
      <div className="txt">
        <div className="txt-info">
          <span className="note">About Me</span>
          <h1>Hi, I’m Sarah (Seenne)</h1>
          <p>
            A passionate frontend web developer creating interactive, modern, and responsive web experiences.
          </p>
          <p>
            I work on freelance platforms like{" "}
            <a target="_blank" href="https://www.fiverr.com/s/NNAXmWV" className="link">Fiverr</a>,{" "}
            <a target="_blank" href="https://www.upwork.com/freelancers/~01b63512a1803ab468?mp_source=share" className="link">Upwork</a>, and{" "}
            <a target="_blank" href="https://www.freelancer.com/u/SarahHerzAllah?frm=SarahHerzAllah&sb=t" className="link">Freelancer</a>, building real-world applications for clients worldwide.
          </p>
        </div>
        <div className="img-cont">
          <img src={img1} alt="Seenne coding" />
        </div>
      </div>

      {/* EDUCATION */}
      <div className="edu">
        <div className="text line-effect"><h2>Education & Learning</h2></div>

        <div className="edu-cont">
          <div className="edu-item item1">
            <div className="info">
              <h3>My Journey</h3>
              <p>
                I am a self-learner who has built my skills from scratch since
                2019. I received a scholarship from{" "}
                <span>Al Hussein Technical University </span>
                because of my programming abilities and self-learning
                dedication.
                <br />
                <br />
                I have also obtained certifications in programming,
                including certifications in frontend responsive web design and
                full-stack web development.
                <br />
                <br />I developed my skills by reading books, following
                professional developers, attending online boot camps, and
                building real-world web applications. Through freelancing, I
                gained valuable experience working with clients and adapting to
                different project requirements and mindsets.
              </p>
            </div>
            <div className="img-cont"><img src={img2} alt="Learning" /></div>
          </div>

          <div className="edu-item item2">
             <div className="info">
              <h3>Academic Education</h3>
              <p>
                I am currently a student at the{" "}
                <a target="_blank" href="https://www.meu.edu.jo/" className="link">
                  MEU - Middle East University
                </a>
                , studying{" "}
                <a target="_blank"
                  href="https://www.meu.edu.jo/faculties/faculty-of-engineering/intelligent-systems-engineering/"
                  className="link"
                >
                  Intelligent Systems Engineering
                </a>
                .
              </p>

              <br />

              <p>
                During my university studies, I participated in several
                technical learning camps, which significantly enhanced my
                educational journey.
                <br />
                <br />
                Later, I received a scholarship on the{" "}
                <a target="_blank" href="https://htux.org/" className="link">
                  HTUx
                </a>{" "}
                platform from{" "}
                <a target="_blank" href="https://www.htu.edu.jo/" className="link">
                  HTU - Al Hussein Technical University
                </a>
                . This opportunity allowed me to learn from experienced
                technical professionals and further strengthen my development
                skills.
              </p>
            </div>
            <div className="img-cont"><img src={img3} alt="Academic" /></div>
          </div>
        </div>
      </div>

      {/* CERTIFICATES */}
      <div className="cer" id="cer">
        <div className="text">
          <div className="title line-effect"><h2>Certificates</h2></div>
          <p>Here are some of my well-earned certificates:</p>
        </div>

        {/* Certificate Items */}
        <div className="cer-item">
          <h4>Legacy Responsive Web Design</h4>
          <div className="info">
            <h5>- FreeCodeCamp</h5>
            <div className="date"><p>Jan 10, 2023</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <h4>Legacy JavaScript Algorithms and Data Structures</h4>
          <div className="info">
            <h5>- FreeCodeCamp</h5>
            <div className="date"><p>Mar 27, 2024</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/f3c35892-1caa-40bf-b9b7-281e05930fa8#acc.fZS9oRl8" className="a">
            <h4>Basic Concepts</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Nov 9, 2024</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/0e2b9fc4-a00c-410f-95be-96ab921c11e1#acc.0ujZMUB3" className="a">
            <h4>HTML</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Apr 16, 2025</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/78719f22-577c-4fd2-9b0c-ce2390525f2a#acc.iEQzRJGC" className="a">
            <h4>CSS</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Apr 24, 2025</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/175efd98-f28f-42a0-aa39-b77dacdba2b3#acc.5gCuO3Fq" className="a">
            <h4>JavaScript</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Apr 25, 2025</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/5bdbff59-dd19-4ceb-9065-c4cf23237f6c#acc.3AnbiBJ1" className="a">
            <h4>React</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Jul 13, 2025</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/74493c4a-b172-48a9-a09c-96ae624ede4f#acc.5zoCVas0" className="a">
            <h4>Node JS & Database</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Jan 10, 2023</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>

        <div className="cer-item">
          <a target="_blank" href="https://www.credential.net/07b34ca1-54e8-45ec-82a0-d6b1404e5aab#acc.oqFHuU0D" className="a">
            <h4>Full Stack Web Development</h4>
          </a>
          <div className="info">
            <h5>- HTUx</h5>
            <div className="date"><p>Aug 27, 2025</p><i className="fa-solid i fa-calendar"></i></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
