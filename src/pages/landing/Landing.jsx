import useLocalStorage from "react-use-localstorage";
import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import TechStack from "../../components/techStack/TechStack";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";

function Landing() {
  const [theme, setTheme] = useLocalStorage("theme","light");
  const [showButton, setShowButton] = useState(false);

  const toggleTheme =()=>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(()=>{
    const handleScrollButtonVisibility =()=>{
      window.pageYOffset > 600 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll",handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop =()=>{
    window.scrollTo({ top: 0, behavior: "smooth"});
  };

  return (
    <div className="main w-full">
      <div className="header w-full" data-theme={theme}>
        <Navbar myTheme={theme}/>
        <Header myTheme={theme} onToggleTheme={toggleTheme}/>
      </div>
      <TechStack myTheme={theme}/>
      <Education myTheme={theme}/>
      <Projects myTheme={theme}/>
   {showButton &&
   <div className="top" onClick={handleScrollToTop}>
    <BsFillArrowUpSquareFill size={30} color="var(--color-secondary)"/>

   </div> 
   }
      {/* <button class="top" onClick={handleScrollToTop}>&uArr;</button> */}
    </div>
  );
}

export default Landing;
