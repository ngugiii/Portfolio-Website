import "./App.scss";
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import TechStack from "./components/techStack/TechStack"
import Education from "./components/education/Education"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"
import useLocalStorage from "react-use-localstorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme","light");

  const toggleTheme =()=>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
      <Footer myTheme={theme}/>
      
    </div>
  );
}

export default App;
