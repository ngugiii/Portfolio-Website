import React, { useEffect } from "react";
import "./Projects.css";
import { projectDetails } from "./myProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  const projects = projectDetails.map((project) => {
    return (
      <div
        key={project.id}
        className="project shadow-xl rounded-lg bg-white overflow-hidden"
        data-aos="zoom-in-up"
      >
       {project.video && <Link to={`project/${project.id}`}>
        <img
          src={`${project.img}`}
          alt=""
          className="w-full cursor-pointer hover:scale-[1.02] transition-all h-80 rounded-t-lg"
        />
        </Link>} 
       {!project.video && <img
          src={`${project.img}`}
          alt=""
          className="w-full h-80 rounded-t-lg"
        />} 
        <div className="p-4 md:p-8">
          <h4 className="md:text-3xl text-2xl font-bold tracking-tight text-gray-900">{project.title}</h4>
          <p className="text-gray-600 md:text-2xl text-xl">{project.info}</p>
          {project.video && (
            <Link to={`project/${project.id}`} className="text-blue-500 text-2xl block mt-4 underline">
              See more
            </Link>
          )}
          <div className="flex items-center justify-between mt-4">
            {project.finishedBuild === true && (
              <a
                href={project.link}
                target="_blank"
                className="text-white bg-orange-600 rounded-md hover:bg-orange-700 py-1 px-2 text-xl cursor-pointer"
              >
                Demo
              </a>
            )}
            {project.finishedBuild === false && (
              <button
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md"
              >
                Build in progress
              </button>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                className="inline-flex items-center px-4 py-2 text-xl font-medium text-white rounded-md bg-gray-700 hover:bg-gray-900 transition-colors"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="container myProjects pb-5" id="projects" data-theme={props.myTheme}>
      <h3 className="text-3xl pb-3 myHeadings">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">{projects}</div>
    </section>
  );
};

export default Projects;
