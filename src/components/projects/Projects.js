import React,{useEffect} from "react";
import "./Projects.css";
import { projectDetails } from "./myProjects";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Projects = (props) => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  const projects = projectDetails.map((project) => {
  console.log(project);

    return (
      <div className="project" data-aos="fade-up">
        <img src={project.img.myspacex} alt="" />
        <img src={project.img.esporty} alt="" />
        <img src={project.img.portfolio} alt="" />
        <h4>{project.title}</h4>
        <p className="project-info">{project.info}</p>
        <div className="links">
        <a href={project.link} target="_blank" className="btn">
          Demo
        </a>
        <a href={project.codeLink} target="_blank" className="btn btn-code">
          Code
        </a>
        </div>
        
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
