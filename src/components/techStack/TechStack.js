import React,{useEffect} from 'react'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import git from "../../assets/git.png"
import figma from "../../assets/figma.png"
import firebase from "../../assets/firebase.png"
import redux from "../../assets/redux.png"
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
      <div className="stack-container">
      <div className="stacks" data-aos="flip-right">
        <div className="stack">
        <img src={html} alt="" />
        <span>HTML</span>
        </div>
        <div className="stack">
        <img src={css} alt="" />
        <span>CSS</span>
        </div>
        <div className="stack">
        <img src={javascript} alt="" />
        <span>JavaScript</span>
        </div>
        <div className="stack">
        <img src={react} alt="" />
        <span>React</span>
        </div>
        <div className="stack">
        <img src={redux} alt="" />
        <span>Redux</span>
        </div>
        <div className="stack">
        <img src={firebase} alt="" />
        <span>Firebase</span>
        </div>
        <div className="stack">
        <img src={git} alt="" />
        <span>Git</span>
        </div>
        <div className="stack">
        <img src={figma} alt="" />
        <span>Figma</span>
        </div>
      </div>

      </div>


    </section>
  )
}

export default TechStack