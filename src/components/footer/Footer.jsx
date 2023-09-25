import React from 'react'
import "./Footer.css"
import {AiFillHeart} from "react-icons/ai"

const Footer = (props) => {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today=new Date();
  const dayToday=days[today.getDay()];
  return (
    <footer className="footer" id="footer" data-theme={props.myTheme}>
      <div>
        <p>Created with<AiFillHeart color='red' size={23}/> by <a href="#about">Erick<span> Ngugi</span>.</a> Have a great {dayToday}!</p>
      </div>
    </footer>
  )
}

export default Footer