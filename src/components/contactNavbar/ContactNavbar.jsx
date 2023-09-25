import React,{useState, useEffect} from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ContactNavbar = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu(){
    setShowMenu(prevState => !prevState);
  }
  return (
    <div className="w-full mb-24 sm:px-32 px-12 py-5 navbar">
      <div className="logo" data-aos="zoom-in">
        <h1><Link to="/">Erick Ngugi</Link></h1>
      </div>
      <span className='sm:text-3xl text-2xl'>
      <Link to="/">Home</Link>
      </span>
    </div>
  )
}

export default ContactNavbar