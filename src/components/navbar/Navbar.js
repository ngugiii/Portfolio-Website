import React,{useState} from 'react'
import "./Navbar.css"
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu(){
    setShowMenu(prevState => !prevState);
  }
  return (
    <div className="container navbar">
      <div className="logo">
        <h1>Erick Ngugi</h1>
      </div>
      <nav>
        <ul id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li><a href="/#">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#education">Education</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li className='btn'><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="menu-icons" onClick={toggleMenu}>
        {
        showMenu ? <RiCloseLine color='#fff' size={30}/> : <AiOutlineBars color='#fff' size={27}/>
      }
      </div>
    </div>
  )
}

export default Navbar