import React from "react";
import { FaAngleRight } from "react-icons/fa";
import header_img from "../img/header-img.svg";
function Banner() {
  return (
    <div className="banner_continer">
      <div className="banner_content">
        <span className="welocome">Welcome to my Portfolio</span>

        <h2>
          Hi! I`m{" "}
          <span className="name">Rawand Jaradh Front-end developer</span>
        </h2>

        <p className="summer">
          I am a Front End developer with industry experience building websites
          and web applications. <br />I specialize in React and have
          professional experience working with HTML5, CSS3, Redux, and
          JavaScript.
          <br /> Passionate about writing clean, maintainable code and working
          collaboratively in a team environment.
          <br /> Apart from the technologies listed above, I possess common
          professional skills such as knowledge of GIT, and Firebase.
        </p>
        <a href="" className="let_contact">
          Let`s Connect <FaAngleRight className="arrow" />
        </a>
      </div>
      <div className="header_img">
        <img src={header_img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
