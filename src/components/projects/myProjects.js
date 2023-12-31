import portfolio from "../../assets/portfolio.PNG"
import esporty from "../../assets/E_sporty.PNG"
import jeafs from "../../assets/jeafs.jpg"
import myspacex from "../../assets/myspacex.PNG"
import getLinked from "../../assets/getLinked.png"
import issue from "../../assets/issue.png"
import nhs from "../../assets/nhs.png"
import nhsVideo from "../../assets/nhs.mp4"
import linkedVideo from "../../assets/linked.mp4"
import issueVideo from "../../assets/issue.mp4"


export const projectDetails = [
    {
        id:7,
        link: "https://myissue-tracker.vercel.app/",
        codeLink:"https://github.com/ngugiii/issue-tracker",
        img: issue,
        video: issueVideo,
        title: "Issue Tracker",
        info: "Next.js-based Issue Tracker for issue management; allowing tracking, assignment, and monitoring within projects. Admin Logins are (Email: admin@gmail.com, Password: Password@1)",
        descriptionOverview: "Utilizing Next.js, Prisma, Node.js, and MongoDB, this Issue Tracker app streamlines project management. It empowers users to effortlessly create, categorize, and track project issues. With intuitive features for status tracking, user assignment, and progress monitoring, it offers a user-friendly interface for seamless issue management within projects",
        descriptionFeatures:["User registration and login","CRUD Operations for Issues","User Assignment","Intuitive Categorization","Real-time Progress Tracking","Responsive Design"],
        descriptionTechnologies:["HTML,CSS,JavaScript","Next js","React JS","Tailwind CSS","Prisma","NextAuth","Node JS","Express JS","Mongo DB"],
        finishedBuild: true
    },
    {
        id:1,
        link: "https://nairobihouseofstyle.netlify.app/",
        img: nhs,
        video: nhsVideo,
        title: "Nairobi House of Style",
        info: "This is a Full Stack e-commerce portal developed using the MERN Stack, backend has been deployed to render and frontend to netlify",
        descriptionOverview: "This eCommerce website is built using React js, Tailwind CSS, Mongo DB and Node js, providing users with a seamless shopping experience. Users can explore a wide range of products, add items to their carts, make purchases, and manage their orders efficiently. The platform includes user authentication, product catalog browsing, and an intuitive user interface for a smooth shopping journey",
        descriptionFeatures:["User registration and login","CRUD Operations for Products, Orders, Authentication and Reviews","Admin Dashboard","Responsive Design"],
        descriptionTechnologies:["HTML,CSS,JavaScript","React JS","Tailwind CSS","Vite","Node JS","Express JS","Mongo DB"],
        finishedBuild: true
    },
    {
        id:2,
        link: "https://main--getlinkedpage.netlify.app/",
        codeLink:"https://github.com/ngugiii/linked",
        img: getLinked,
        video: linkedVideo,
        title: "GetLinked Landing Page",
        info: "This is a modern Landing Page built with React and styled using Tailwind CSS. It has a landing page, Contact Page and Registration Page",
        descriptionOverview: "Experience modern web design with our ReactJS and Tailwind CSS powered landing page. Engage users with a responsive interface, seamless navigation, and visually appealing elements for an immersive experience, all optimized for superior performance and brand impact.",
        descriptionFeatures:["Lnding Page","Registration Page","Contact Page","Responsive Design"],
        descriptionTechnologies:["HTML,CSS,JavaScript","React JS","Tailwind CSS"],
        finishedBuild: true
    },
    {
        id:3,
        link: "",
        codeLink:"https://github.com/ngugiii/React-ECommerce-Website",
        img: jeafs,
        title: "Jeafs Online Shop",
        info: "This is an e-commerce website that I am currently developing using React.js, Sass, Redux and firebase. I have managed to set up authentication using firebase",
        finishedBuild: false
    },
    {
        id:4,
        link: "https://erickngugi.netlify.app/",
        codeLink:"https://github.com/ngugiii/Portfolio-Website",
        img: portfolio,
        title: "Portfolio Website",
        info:"I created my portfolio website using HTML, CSS, Tailwind CSS, javaScript and React js. This is a modern and responsive website that has been deployed to netlify",
        finishedBuild: true

    },
    {
        id:5,
        link: "https://myspace-x.netlify.app/",
        codeLink:"https://github.com/ngugiii/MySpaceX_Website",
        img: myspacex,
        title: "MySpaceX Website",
        info:"MySpaceX is a modern Landing page that is created using HTML, CSS, JavaScript and React.js. The website is Responsive and has been deployed to netlify.",
        finishedBuild: true
    },
    {
        id:6,
        link: "https://esportyshop.netlify.app/",
        codeLink:"https://github.com/ngugiii/online-shop",
        img: esporty,
        title: "Esporty E-commerce website",
        info:"E-sporty online shop is an e commerce website created using HTML, CSS and JavaScript. The website is responsive and has been deployed to netlify",
        finishedBuild: true
    },
]