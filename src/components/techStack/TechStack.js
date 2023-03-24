import React,{useEffect} from 'react'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import git from "../../assets/git.png"
import figma from "../../assets/figma.png"
import "./TechStack.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const TechStack = (props) => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <section className="container tech-stack" id="tech-stack" data-theme={props.myTheme}>
      <h3 className='myHeadings'>Tech Stack</h3>
      <div className="stack" data-aos="fade-up">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={git} alt="" />
        <img src={figma} alt="" />
      </div>

    </section>
  )
}

export default TechStack