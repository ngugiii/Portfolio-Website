import React from "react";
import "./Projects.css";
import { projectDetails } from "./myProjects";

const Projects = (props) => {
  const projects = projectDetails.map((project) => {
  console.log(project);

    return (
      <div className="project">
        <img src={project.img.myspacex} alt="" />
        <img src={project.img.esporty} alt="" />
        <img src={project.img.portfolio} alt="" />
        <h4>{project.title}</h4>
        <p className="project-info">{project.info}</p>
        <a href={project.link} target="_blank" className="btn">
          Check it out
        </a>
      </div>
    );
  });
  return (
    <section className="container myProjects" id="projects" data-theme={props.myTheme}>
      <h3 className="myHeadings">Projects</h3>
      <div className="projects">{projects}</div>
    </section>
  );
};

export default Projects;
