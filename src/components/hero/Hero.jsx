import React from "react";
import "./Hero.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import img from "../../assets/laptop.png";
import { Link } from "react-router-dom";

const Hero = () => {
  useGSAP(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".hero",
    //     start: "top top",
    //     // markers: true,
    //   },
    // });

    gsap.from(".txt .title", {
      opacity: 0,
      y: -100,
      duration: 2,
    });
    gsap.from(".txt .title .note", {
      opacity: 0,
      y: -10,
      duration: 1,
      delay: 1,
    });

    gsap.from(".txt .info p", {
      opacity: 0,
      y: -100,
      x: 20,
      duration: 2,
    });
    gsap.from(".txt .info button", {
      opacity: 0,
      y: -20,
      x: 20,
      duration: 1,
      delay: 1,
    });

    gsap.from(".hero .name", {
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 1.5,
      ease: "back.out(1.7)",
    });

    gsap.to(".txt .img", {
      transform: "scale(1.1) rotate(15deg)",
      duration: 2,
      // delay:1
    })
    gsap.from(".txt .img",{
      opacity:0,
      duration:1,
      delay:.7,
    });
  });
  return (
    <div className="hero noise">
      <div className="txt">
        <div className="title">
          <h3 className="note">Profession</h3>
          <h1>Frontend Web Designer and Developer</h1>
        </div>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="info">
          <p>
            Bringing your ideas to life! Creating stunning, modern websites
            for your online presence!! <br /> Ready?
          </p>
          <Link to={"/contact"}><button className="cta2">Contact Now</button></Link>
        </div>
      </div>
      <div className="name">
        <h1>Seenne</h1>
      </div>
    </div>
  );
};

export default Hero;
