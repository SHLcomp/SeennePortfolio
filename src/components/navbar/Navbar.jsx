import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);
  const locate = useLocation();
  useEffect(() => {
    switch (locate.pathname) {
      case "/":
        setMenu("home");
        break;
      case "/about":
        setMenu("about");
        break;
      case "/designs":
        setMenu("designs");
        break;
      case "/contact":
        setMenu("contact");
        break;
    }
  });
  return (
    <nav>
      <h1 className="txt-glow">
        Sarah <span className="cursive">Web Dev</span>
      </h1>
      <ul className={open ? "open" : ""}>
        <Link className="a" to={"/"}>
          <li className={menu === "home" ? "active" : ""}>Home</li>
        </Link>
        <a href="#designs" className="a">
          <li className={menu === "designs" ? "active" : ""}>Designs</li>
        </a>
        <Link to={"/about"} className="a">
          <li className={menu === "about" ? "active" : ""}>About</li>
        </Link>
        <Link className="a" to={"/contact"}>
          <li className={menu === "contact" ? "active" : ""}>Contact</li>
        </Link>
      </ul>
      <i
        className={`fa-solid i ${open === true ? "fa-xmark" : "fa-bars"}`}
        onClick={() => setOpen((prev) => !prev)}
      ></i>
    </nav>
  );
};

export default Navbar;
