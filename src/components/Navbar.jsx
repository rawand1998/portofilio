import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const removeShadw = useRef(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
    setToggle(true);
  };
  const hide_menu = () => {
    console.log("hi");
    removeShadw.current.classList.remove("show__menu");
  };
  return (
    <div
      className={scrolled ? "navbar_container scrolled" : "navbar_container"}
    >
      <div className="logo">
        <span>
          Rawand <span>Jaradh</span>
        </span>
      </div>
      <div className= "menu" ref={menuRef}>
        <nav>
          <li>
            <a href="" onClick={hide_menu}>
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              Skills
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              Projects
            </a>
          </li>
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
      <span className="mobile__menu">
        <AiOutlineMenu onClick={toggleMenu} className="AiOutlineMenu" />
      </span>
    </div>
  );
}

export default Navbar;
