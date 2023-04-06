import React from 'react'
import "./Footer.css"
import {AiFillHeart} from "react-icons/ai"

const Footer = (props) => {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today=new Date();
  const dayToday=days[today.getDay()];
  console.log(dayToday);
  return (
    <footer className="footer" id="footer" data-theme={props.myTheme}>
      <div>
        <p>Created with&nbsp;<AiFillHeart color='red' size={23}/>&nbsp; by &nbsp;<a href="#about">Erick <span>Ngugi</span></a>.&nbsp; Have a great {dayToday}!</p>
      </div>
    </footer>
  )
}

export default Footer