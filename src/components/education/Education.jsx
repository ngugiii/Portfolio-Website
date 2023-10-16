import React,{useEffect} from 'react'
import "./Education.css"
import {GiGraduateCap} from "react-icons/gi"
import {MdLibraryBooks} from "react-icons/md"
import {BiTimeFive} from "react-icons/bi"
import {educationDetails as data} from "./eduData"
import eduPic from "../../assets/education.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = (props) => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  // const EducationInfo = educationDetails.map((education)=>{
  //   return (
  //     <div className="education-details">
  //       <h2 className="course"><GiGraduateCap color='var(--color-secondary)' size={23}/><b>{education.course}</b></h2>
  //       <h3 className="institution"><MdLibraryBooks color='var(--foreground)' size={20}/><i>{education.Institution}</i></h3>
  //       <h4 className="period"><BiTimeFive color='var(--foreground)' size={20}/><i>{education.duration}</i></h4>
  //       <p>{education.description}</p>

  //     </div>
  //   )
  // })
  return (
    <section id="education" className="education container" data-theme={props.myTheme}>    
      <h3 className='myHeadings'>Education</h3>
      <div className="education-info">
      <div className="">
        <VerticalTimeline>
          {data.map((timeline, index) => (
            <VerticalTimelineElement
              key={index} // Use the index as the key
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#03021b",
                padding: "2rem",
                fontSize:"9rem",
              }}
              contentArrowStyle={{ display: "none" }}
              date={
                <span className="date">{timeline.duration}</span>
              }
              iconStyle={{
                fontSize: "9rem",
                fontWeight: 800,
                color: "#fff",
              }}
              iconClassName="iconss"
              icon={<MdLibraryBooks/>}
              textClassName="eduText"
            >
              <h1 className="vertical-timeline-element-title sm:text-3xl text-2xl font-bold text-[orangered]">
                {timeline.course}
              </h1>
              <p className="vertical-timeline-element-subtitle font-extrabold text-2xl">{timeline.Institution}</p>
              <p className="text-2xl">{timeline.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      </div>
      
    </section>
  )
}

export default Education