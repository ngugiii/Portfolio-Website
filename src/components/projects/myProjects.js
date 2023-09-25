import portfolio from "../../assets/portfolio.png"
import esporty from "../../assets/E_sporty.png"
import jeafs from "../../assets/jeafs.jpg"
import myspacex from "../../assets/myspacex.png"


export const projectDetails = [
    {
        id:1,
        link: "",
        codeLink:"https://github.com/ngugiii/React-ECommerce-Website",
        img: jeafs,
        title: "Jeafs Online Shop",
        info: "This is an e-commerce website that I am currently developing using React.js, Sass, Redux and firebase. I have managed to set up authentication using firebase",
        finishedBuild: false
    },
    {
        id:2,
        link: "https://erickngugi.netlify.app/",
        codeLink:"https://github.com/ngugiii/Portfolio-Website",
        img: portfolio,
        title: "Portfolio Website",
        info:"I created my portfolio website using HTML, CSS, Tailwind CSS, javaScript and React js. This is a modern and responsive website that has been deployed to netlify",
        finishedBuild: true

    },
    {
        id:3,
        link: "https://myspace-x.netlify.app/",
        codeLink:"https://github.com/ngugiii/MySpaceX_Website",
        img: myspacex,
        title: "MySpaceX Website",
        info:"MySpaceX is a modern Landing page that is created using HTML, CSS, JavaScript and React.js. The website is Responsive and has been deployed to netlify.",
        finishedBuild: true
    },
    {
        id:4,
        link: "https://esportyshop.netlify.app/",
        codeLink:"https://github.com/ngugiii/online-shop",
        img: esporty,
        title: "Esporty E-commerce website",
        info:"E-sporty online shop is an e commerce website created using HTML, CSS and JavaScript. The website is responsive and has been deployed to netlify",
        finishedBuild: true
    },
]