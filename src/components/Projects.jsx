import React from "react";
import andela from "../img/andela.PNG";
import pixle from "../img/500px.PNG";
import insta from "../img/insta.PNG";
import nulla from "../img/nula.PNG";
import food from "../img/food.PNG";
function Projects() {
  let imgages = [
    { img: pixle, link: "https://500px-site-rawand1998.vercel.app/" },
    {
      img: andela,
      link: "https://andela-site-react-quwyjly36-rawand1998.vercel.app/",
    },
    { img: insta, link: "https://port-site-six.vercel.app/" },
    {
      img: food,
      link: "https://food-delivery-app-ecommerce-website-rawand1998.vercel.app/",
    },
    { img: nulla, link: "https://github.com/rawand1998/nulla_dashboard" },
  ];
  return (
    <div className="project_container" id="projects">
      <h2>Projects</h2>
      <div className="project_card">
        {imgages.map(({ img, link }) => (
          <div className="product">
            <a href={link}>
              <img src={img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
