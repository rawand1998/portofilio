import React from "react";
import andela from "../img/andela.PNG";
import pixle from "../img/500px.PNG";
import insta from "../img/insta.PNG";
import nulla from "../img/nula.PNG";
function Projects() {
  let imgages = [
    { img: pixle },
    { img: andela },
    { img: insta },
    { img: nulla },
  ];
  return (
    <div className="project_container">
      <h2>Projects</h2>
      <div className="project_card">
      {imgages.map((img) => (
       <div className="product">
          <a href="">
            <img src={img.img} alt="" />
          </a>
      </div>
      ))}
        </div>
    </div>
  );
}

export default Projects;
