import React from 'react'
import { projectDetails } from "./myProjects";
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Project = () => {
    const no=useParams();
    const id=no.id;


   const projectDetail=projectDetails.find((project)=>project.id == id);
  return (
    <div className='min-h-[90vh] w-full'>
        <Navbar/>
        <div className=" w-full md:px-32">
            <h1 className='text-[orangered] font-semibold md:text-[3rem] text-[2.5rem] font-serif w-full text-center my-[2rem]'>{projectDetail.title}</h1>
            <div className="project-header w-full md:px-28 px-3">
            <h3 className='text-[orangered] md:text-[2rem] text-[1.5rem] md:mb-2 mb-6 font-semibold md:px-6 px-4'>Demo Video:</h3>
            <div className="flex justify-center items-center">
            <div className="md:w-[70%] md:px-0 px-4" >
            <ReactPlayer 
                        url={projectDetail.video} 
                        width="100%"
                        height="auto"
                        controls={true}
                    />
            </div>
            </div>
            </div>
            <div className="w-full flex justify-center items-center mt-16 md:px-16 px-6">
            <div className="body">
                <h2 className='text-[orangered] md:text-[2.2rem] text-[1.6rem] mb-2 font-semibold px-6'>Project Description</h2>
                <div className="project-desc px-10 text-[1.5rem]">
                    {projectDetail.descriptionOverview}
                </div>
            </div>
            </div>
            <div className="body mt-8 md:px-16 px-6">
                <h2 className='text-[orangered] md:text-[2.2rem] text-[1.6rem] mb-2 font-semibold px-6'>Project Features</h2>
                <div className="project-desc md:px-10 text-[1.5rem]">
                    <ul className='px-8'>
                    {projectDetail.descriptionFeatures.map((feature, index)=>
                    (
                       <li key={index}># <span>{feature}</span></li>
                    )
                    )}
                    </ul>
                </div>
            </div>
            <div className="body mt-8 md:px-16 px-6">
                <h2 className='text-[orangered] md:text-[2.2rem] text-[1.6rem] mb-2 font-semibold px-6'>Technologies Used</h2>
                <div className="project-desc md:px-10 text-[1.5rem]">
                    <ul className='px-8 grid md:grid-cols-2'>
                    {projectDetail.descriptionTechnologies.map((technology, index)=>
                    (
                       <li key={index}># <span>{technology}</span></li>
                    )
                    )}
                    </ul>
                </div>
            </div>
            <div className="body mt-8 md:px-16 px-6">
                <h2 className='text-[orangered] md:text-[2.2rem] text-[1.6rem] mb-2 font-semibold px-6'>Visit Project</h2>
                <div className="project-desc px-10 text-[1.5rem]">
                 <a href={projectDetail.link} target='_blank' className='text-underline text-blue-700 hover:text-blue-900'>{projectDetail.link}</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Project