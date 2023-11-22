import React,{useEffect} from "react";
import "./Projects.css";
import { projectDetails } from "./myProjects";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";



const Projects = (props) => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  const projects = projectDetails.map((project) => {
    return (
      <div key={project.id} className="project sm:w-[55rem] sm:h-[45rem] p-5 rounded-md shadow-md" data-aos="fade-up">
       {!project.video && <img src={`${project.img}`} alt="" className="h-[25rem] rounded w-full" />}
        {project.video && <Link to={`project/${project.id}`} className=""><img src={`${project.img}`} alt="" className="h-[25rem] hover:scale-105 rounded w-full" /></Link>  }
        <h4 className="font-bold text-3xl text-orange-600 text-center my-2">{project.title}</h4>
        <p className="project-info text-2xl">{project.info}</p>{project.video && <Link to={`project/${project.id}`} className="text-blue-500 underline md:text-[1.8rem] text-[1.6rem] hover:text-blue-700">See more</Link>  }
        <div className="links text-white">
        {project.finishedBuild===true && <a href={project.link} target="_blank" className="link-btn bg-orange-500 rounded mr-2 px-2 py-1 hover:bg-orange-600">
          Demo
        </a> }
        {project.finishedBuild===false && <button className="progress link-btn bg-blue-500 rounded mr-2 px-2 py-1">Build in progress</button>}
       {project.codeLink && <a href={project.codeLink} target="_blank" className="link-btn bg-gray-800 rounded mr-2 px-2 py-1 hover:bg-gray-900">
          Code
        </a>}
        </div>
        
      </div>
    );
  });
  return (
    <section className="container myProjects" id="projects" data-theme={props.myTheme}>
      <h3 className="myHeadings">Projects</h3>
      <div className="projects xl:flex mb-10 xl:flex-wrap gap-y-16 gap-x-32 items-center justify-center">{projects}</div>
    </section>
  );
};

export default Projects;
