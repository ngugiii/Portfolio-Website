import React,{useEffect} from "react";
import erick from "../../assets/erick.png";
import { BsMouse } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { BsFillSunFill } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cv from "../../assets/Erick Ngugi CV.pdf"
import "./Header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = (props) => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  console.log(props);
  return (
    <div className="container myHeader" id="about" data-theme={props.myTheme}>
      <div className="theme-container" data-theme={props.myTheme} onClick={props.onToggleTheme}>
        {props.myTheme=="light" ? <HiMoon size={23} color="var(--background)"/> : <BsFillSunFill size={23} color="var(--background)"/>}

      </div>
      <div className="about" data-aos="fade-right">
        <h3 className="myHeadings myHeadings-about">About Me</h3>
        <p className="name">
          Hi all, I’m <span>Erick...</span>
        </p>
        <p className="info">
          A passionate Software Developer with experience in building 
          modern, interactive and functional web applications. I am dedicated
          to the quest of developing solutions that leverage on best practice technologies
          to develop over the top user Interfaces and user experiences
        </p>
        <div className="links">
          <div className="link">
            <a href="https://github.com/ngugiii" target="_blank">
              < BsGithub size={23} color='var(--foreground)'/>
              <span>Github</span>
            </a>
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/erick-ngugi" target="_blank">
              < BsLinkedin size={23} color='var(--foreground)'/>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="link">
            <a href="https://twitter.com/Erickngugi_" target="_blank">
              < BsTwitter size={23} color='var(--foreground)'/>
              <span>Twitter</span>
            </a>
          </div>
          <div className="link">
            <a href={cv} target="_blank">
              <FaFileDownload size={23} color='var(--foreground)'/>
              <span>Resume</span>
            </a>
          </div>
          <div className="link">
            <a href="mailto:erickngugi54@gmail.com" target="_blank">
              <MdEmail size={23} color='var(--foreground)'/>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="picture" data-aos="fade-left">
        <img src={erick} alt="" className="erick" />
      </div>
      <div className="floating-icon">
        <a href="/#projects">
          <BsMouse color='white' size={25} className="mouse" />
        </a></div>
    </div>
  );
};

export default Header;
