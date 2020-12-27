import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import killTheKeg from "../../assets/img/kill-the-keg.png";

const Projects = ({ navItem }) => {
  const [selectedProject] = useState([
    {
      name: "Kill The Keg",
      description:
        "Helping bar owners to quickly deplete kegs from leftover product, while helping avid beer drinkers find less expensive ways to drink with friends.",
      tools: "Sequelize/Express/Node/Handlebars",
      github: "https://github.com/JoshCarter8400/kill-the-keg",
      demo: "https://obscure-eyrie-90813.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Public Blog site",
      description:
        "This is a full stack application that allows user to post their thoughts and opinions through their personal blog post on a CMS style website. This project follows the Model View Controller paradigm.",
      tools: "Sequelize/Express/Node/Express-Session",
      github: "https://github.com/JoshCarter8400/tech-blog",
      demo: "https://rocky-cove-83154.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
  ]);

  const currentProject = selectedProject.filter(
    (project) => project.navItem === navItem
  );
  return (
    <main id="main">
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p></p>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <h3 className="about content h3">{selectedProject.name}</h3>
                <h6>
                  <strong>{selectedProject.tools}</strong>
                </h6>
                <h6>
                  <strong>{selectedProject.description}</strong>
                </h6>
                <img
                  src={killTheKeg}
                  className="img-fluid"
                  alt="Kill the Keg"
                />
                <div className="portfolio-links">
                  <a
                    href={selectedProject.demo}
                    data-gall="portfolioGallery"
                    target="blank"
                    title="App 2"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="blank"
                    title="More Details"
                  >
                    <i className="bx bxl-github">
                      <AiFillGithub />
                    </i>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
