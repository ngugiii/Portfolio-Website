import "./App.scss";
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import TechStack from "./components/techStack/TechStack"
import Education from "./components/education/Education"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"
import useLocalStorage from "react-use-localstorage";
import Contact from "./components/contact/Contact";
import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";


function App() {
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
    <div className="main">
      <div className="header" data-theme={theme}>
        <Navbar myTheme={theme}/>
        <Header myTheme={theme} onToggleTheme={toggleTheme}/>
      </div>
      <TechStack myTheme={theme}/>
      <Education myTheme={theme}/>
      <Projects myTheme={theme}/>
      <Contact myTheme={theme}/>
   {showButton &&
   <div className="top" onClick={handleScrollToTop}>
    <BsFillArrowUpSquareFill size={30} color="var(--color-secondary)"/>

   </div> 
   }
      <Footer myTheme={theme}/>
   {/* <button class="top" onClick={handleScrollToTop}>&uArr;</button> */}
    </div>
  );
}

export default App;
