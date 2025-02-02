import 'bootstrap/dist/css/bootstrap.min.css';

import { BsWindow } from "react-icons/bs";
import { MdOutlineLayers } from "react-icons/md";
import { GoTerminal } from "react-icons/go";

import showcaseImage1 from "./assets/bg-showcase-1.jpg?url";
import showcaseImage2 from "./assets/bg-showcase-2.jpg?url";
import showcaseImage3 from "./assets/bg-showcase-3.jpg?url";

import testimonialImage1 from "./assets/testimonials-1.jpg?url";
import testimonialImage2 from "./assets/testimonials-2.jpg?url";
import testimonialImage3 from "./assets/testimonials-3.jpg?url";

import Navbar from "./components/Navbar"
import Home from './components/Home';
import IconGrid from './components/IconGrid';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App(){

    let  homeHeading = [
        {
          
            flag:true,
            description:"Generate more leads with a professional landing page!"
        }]

    let callToAction = [
        {
            flag:false,
            description:"Ready to get started?Sign up now!" 
        }]

    let gridData =[
        {
            icon: BsWindow,
            heading: "Fully Responsive",
            description: "This theme will look great on any device,no matter the size!"
        },
        {
            icon: MdOutlineLayers,
            heading: "Bootstrap 5 Ready",
            description: "Featuring the latest build of the new Bootstrap 5 framework!"
        },
        {
            icon: GoTerminal,
            heading: "Easy to Use",
            description: "Ready to use with your own content, or customize the source files!"
        }
    ]

    let showcaseData = [
        {
            image : showcaseImage1,
            heading: "Fully Responsive",
            description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
        },
        {
            image : showcaseImage2,
            heading: "Updated For Bootstrap 5",
            description:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
        },
        {
            image : showcaseImage3,
            heading: "Easy to Use & Customize",
            description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
        }
    ];

    let testimonialData = [
        {
           image : testimonialImage1,
           name : "Margaret E.",
           feedback : "This is fantastic! Thanks so much guys!"
        },
        {
            image : testimonialImage2,
            name : "Fres S.",
            feedback : "Bootstrap is amazing.I've been using it to create lots of super nice landing pages."
         },
         {
            image : testimonialImage3,
            name : "Sarah W.",
            feedback : "Thanks so much for making these free resources available to us!"
         }
    ]
    return(
        <>
        <Navbar/>
        <Home data={homeHeading}/>
        <IconGrid data={gridData}/>
        <Showcase data={showcaseData}/>
        <Testimonials data={testimonialData}/>
        <Home data={callToAction}/>
        <Footer/>
        </>
    )
}
export default App