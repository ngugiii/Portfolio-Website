import React from 'react'
import "./Education.css"
import {GiGraduateCap} from "react-icons/gi"
import {MdLibraryBooks} from "react-icons/md"
import {BiTimeFive} from "react-icons/bi"
import {educationDetails} from "./eduData"

const Education = (props) => {
  console.log(educationDetails);
  const EducationInfo = educationDetails.map((education)=>{
    return (
      <div className="education-details">
        <h2 className="course"><GiGraduateCap color='var(--color-secondary)' size={23}/><b>{education.course}</b></h2>
        <h3 className="institution"><MdLibraryBooks color='var(--foreground)' size={20}/><i>{education.Institution}</i></h3>
        <h4 className="period"><BiTimeFive color='var(--foreground)' size={20}/><i>{education.duration}</i></h4>
        <p>{education.description}</p>

      </div>
    )
  })
  return (
    <section id="education" className="education container" data-theme={props.myTheme}>
      <h3 className='myHeadings'>Education</h3>
      {EducationInfo}
    </section>
  )
}

export default Education