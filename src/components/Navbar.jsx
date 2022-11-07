import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={scrolled ? "navbar_container scrolled" : "navbar_container"}
    >
      <div className="logo">
        <span>
          Rawand <span>Jaradh</span>
        </span>
      </div>
      <div className="menu">
        <nav>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          {/* <Link to="/">Home</Link>
            <Link to="/">Skills</Link>
            <Link to="/">Projects</Link> */}
        </nav>
        <div className="icons">
          <a href="">
            <FaFacebookF className="icon" />
          </a>
          <a href="">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <button className="contact_btn">Contact me</button>
      </div>
    </div>
  );
}

export default Navbar;
