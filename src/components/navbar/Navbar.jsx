import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation().pathname;

  function toggleMenu() {
    setShowMenu((prevState) => !prevState);
  }
  return (
    <div className="w-full sm:px-28 px-8 py-3 navbar">
      <div className="logo" data-aos="zoom-in">
        <h1>Erick Ngugi</h1>
      </div>
      <nav>
        <ul id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li>
            <a href="/">Home</a>
          </li>
          {location == "/" && (
            <>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#education">Education</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
            </>
          )}
          <li className="btn">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="black" size={30} />
        ) : (
          <AiOutlineBars color="black" size={27} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
