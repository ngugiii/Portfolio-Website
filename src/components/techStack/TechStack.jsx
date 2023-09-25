import React,{useEffect} from 'react'
import "./TechStack.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { stackData } from './stack';

const TechStack = (props) => {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  },[])
  console.log(stackData);

  const data = stackData.map((stack)=>{
    return (
      <div className="stack">
        <img src={stack.imgSRC} alt="" />
        <span>{stack.name}</span>
        </div>
    )
  })
  return (
    <section className="container tech-stack" id="tech-stack" data-theme={props.myTheme}>
      <h3 className='myHeadings'>Tech Stack</h3>
      <div className="stack-container">
      <div className="stacks shadow" data-aos="flip-right">
        {data}
      </div>
      </div>
    </section>
  )
}

export default TechStack