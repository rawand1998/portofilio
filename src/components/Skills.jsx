import React from "react";
import Slider from "react-slick";
import meter1 from "../img/meter1.svg";
import meter2 from "../img/meter2.svg";
import meter3 from "../img/meter3.svg";
function Skills() {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const slider = [
    { name: "ReactJs", img: meter3 },
    { name: "HTML", img: meter1 },
    { name: "CSS", img: meter1 },
    { name: "Firebase", img: meter2 },
    { name: "Redux & Redux toolkit", img: meter3 },
    { name: "Java Script", img: meter1 },
    { name: "Figma", img: meter1 },
    { name: "Material Ui", img: meter1 },
    { name: "Git&GitHub", img: meter1 },
  ];
  return (
    <div className="skill_bg">
      <div className="skills_container">
        <h3>My Skills</h3>
        <Slider {...settings}>
          {slider.map(({ img, name }) => (
            <div key={name} className="slider_client">
              <img src={img} alt="not found" />
              <span className="skills_name">{name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
